import { IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonIcon, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader } from '@ionic/react';
import { add } from 'ionicons/icons';
import MemoryItem from '../components/MemoryComp'

import './style.css';

import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";

import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';

import MemoriesContext from "../data/memorycontext";
import { useContext, useEffect, useState } from 'react';

const GoodMemories: React.FC = () => {
    // const memoriesCtx = useContext(MemoriesContext);
    const db = getFirestore();
    const storage = getStorage();
    const [memories,setMemories] = useState<Array<any>>([]);
    const goodMemories = memories.filter(goodMemories => goodMemories.type == 'good');

    useEffect(()=>{
        async function getData() {
          const querySnapshot = await getDocs(collection(db, "memories"));
          console.log('querySnapshot:',querySnapshot);
          setMemories(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
    
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} = > ${doc.data}`);
            console.log('doc:',doc);
          })
        }
    
        getData();
      }, []);

    return (
        <IonPage>
            <IonFab vertical="bottom" class="fabButton" horizontal="end" slot="fixed" >
                <IonFabButton routerLink={'/newMemory'}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Good Memories
                    </IonTitle>
                    <IonButton slot="end" class="headerButton" routerLink={'/newMemory'} >
                        <IonIcon icon={add} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {goodMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No good memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}
                    {goodMemories.map(memory => (
                        <MemoryItem key={memory.id} id={memory.id} base64Url={memory.imageUrl} title={memory.title} lat={parseInt(memory.lat)} long={parseInt(memory.lng)}/>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories;