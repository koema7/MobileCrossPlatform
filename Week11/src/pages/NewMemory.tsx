import { Directory, Filesystem } from "@capacitor/filesystem"
import { base64FromPath } from "@ionic/react-hooks/filesystem"
import { useRef, useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { IonRow, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonButton, IonButtons, IonIcon, IonLabel, IonInput, IonSelect, IonSelectOption, IonGrid, IonContent} from '@ionic/react';
import { camera } from 'ionicons/icons';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import MemoriesContext, {Memory} from "../data/memorycontext";
import { useHistory } from "react-router";

import "../firebaseConfig";

import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";

import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';

const NewMemory: React.FC = () => {
    const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good');
    const titleRef = useRef<HTMLIonInputElement>(null);
    const memoriesCtx = useContext(MemoriesContext);
    const history = useHistory();
    const [lat, setLat] = useState<number>(-6);
    const [long, setLong] = useState<number>(106);

    const db = getFirestore();
    const storage = getStorage();
    const [memories,setMemories] = useState<Array<any>>([]);

    const containerStyle ={
        width: '100%',
        height: '500px'
    }

    const selectPos = (e: google.maps.MapMouseEvent) => {
        if(e.latLng?.lat()){ 
            setLat(e.latLng?.lat()); 
        }
        if(e.latLng?.lng()){ 
            setLong(e.latLng?.lng()); 
        }
    };

    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectedMemoryType = event.detail.value;
        setChosenMemoryType(selectedMemoryType);
    }
    const [takenPhoto, setTakenPhoto] = useState<{
        path: string | undefined;
        preview: string;
    }>();
    const takePhotoHandler = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 80,
            width: 500
        });
        console.log(photo);

        if(!photo || /*!photo.path ||*/ !photo.webPath){
            return;
        }

        setTakenPhoto({
            path: photo.path,
            preview: photo.webPath
        });
    }

    const addData = async( title: string, image: string, imageUrl: string, lat: number, lng: number, type: string) => {
        try {
          const docRef = await addDoc(collection(db, "memories"), {
            title: title,
            image: image,
            imageUrl: imageUrl,
            lat: lat,
            lng: lng,
            type: type
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

    const addMemoryHandler = async () => {
        const enteredTitle = titleRef.current?.value;
        if(!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType){
            return;
        }
        
        const fileName = new Date().getTime() + '.jpeg';
        const base64 = await base64FromPath(takenPhoto!.preview);
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        });
        const storageRef = ref(storage, fileName);

        fetch(base64).then(async(res) => {
            const parsedBlob = await res.blob();
            uploadBytes(storageRef, parsedBlob).then(() => {
                console.log('upload file success');
                getDownloadURL(ref(storage, fileName)).then((url) =>{
                  addData(enteredTitle.toString(), fileName, url, lat, long, chosenMemoryType);
                })
              })  
        });

        // memoriesCtx.addMemory(fileName, base64,enteredTitle.toString(), chosenMemoryType, lat, long);
        history.length > 0 ? history.goBack() : history.replace('/goodMemories');
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>
                        Add New Memory
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonInput placeholder="Memory Title" type="text" ref={titleRef}></IonInput>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel>Memory Type</IonLabel>
                            <IonSelect onIonChange={selectMemoryTypeHandler} placeholder="Memory Type">
                                <IonSelectOption value="good">Good Memory</IonSelectOption>
                                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <div className="image-preview">
                                {!takenPhoto && <h3>No photo chosen.</h3>}
                                {takenPhoto && <img src={takenPhoto.preview} alt="Preview"/>}
                            </div>
                            <IonButton fill="clear" onClick={takePhotoHandler}>
                                <IonIcon slot="start" icon={camera}/>
                                <IonLabel>Take Photo</IonLabel>
                            </IonButton>
                        </IonCol>             
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <LoadScript googleMapsApiKey="AIzaSyDM_VDLKyk0DEifuqJWgTHow4Ij7PxEOys">
                                <GoogleMap
                                    onClick={selectPos}
                                    mapContainerStyle={containerStyle}
                                    center={{ lat: lat, lng: long }}
                                    zoom={10}>
                                    <Marker position={{ lat: lat, lng: long }} />
                                </GoogleMap>
                            </LoadScript>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol className="ion-text-center">
                            <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default NewMemory;