import { isPlatform } from '@ionic/core';
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton,IonTitle, IonButtons, IonBackButton, IonMenuButton, IonLabel, IonItem, IonList, IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonAvatar, IonFab, IonFabButton, IonAlert } from '@ionic/react';
import { addOutline, ban, banSharp, chevronForward, create, trash } from 'ionicons/icons';
import React, { useRef, useState } from 'react';

export const FRIENDS_DATA = [
    {id: 'f1', name: 'Minju', profile_picture: 'https://img.okezone.com/content/2020/06/03/598/2223703/kim-minju-iz-one-jadi-mc-music-core-gantikan-mina-gugudan-5TbDXZpyBi.jpg'},
    {id: 'f2', name: 'Min Min', profile_picture: 'https://cdn.idntimes.com/content-images/community/2021/02/official-izone-p-2295815686038303368-1-2295815683379054910-337d580540a5c9ed0cca5b79517ddc17-6f141affbd3242c5b47933f1cf6a8ede.jpg'},
    {id: 'f3', name: 'Kim Minju', profile_picture: 'https://cdn.idntimes.com/content-images/community/2018/11/20181106-173749-1f6a2275765e1fb9cddd1300fbf346e0_600x400.png'}
];

const Meet: React.FC = () => {
    const callFriendHandler = () => {
        console.log("Calling...");
    };
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
    const blockFriendHandler = () => {
        slidingOptionRef.current?.closeOpened();
        console.log("Blocking...");
    };
    const editFriendHandler = () => {
        slidingOptionRef.current?.closeOpened();
        console.log("Editing...");
    };
    const [startDeleting, setStartDeleting] = useState(false);
    const startAddFriendHandler = () => {
        console.log("adding friend...");
    };
    const startDeleteFriendHandler = () => {
        setStartDeleting(true);
        slidingOptionRef.current?.closeOpened();
    };
    const deleteFriendHandler = () => {
        setStartDeleting(false);
        slidingOptionRef.current?.closeOpened();
    };

    return (
        <React.Fragment>

        
        <IonAlert isOpen={startDeleting}
            header="Are you sure?"
            message="Do you want to delete your friend? This cannot be undone."
            buttons={[
                {text: 'No', role: 'cancel', handler: () => {setStartDeleting(false)}},
                {text: 'Yes', handler: deleteFriendHandler}
            ]}
        
        />
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>
                        Meet
                    </IonTitle>
                    {!isPlatform('android') && (
                        <IonButtons slot="end">
                            <IonButton onClick={startAddFriendHandler}> 
                                <IonIcon icon={addOutline}/>
                            </IonButton>
                        </IonButtons>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {FRIENDS_DATA.map(friend => (
                        <IonItemSliding key={friend.id} ref={slidingOptionRef}>
                            {/* <IonItemOptions side="start">
                                <IonItemOption color="danger" onClick={startDeleteFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>
                                <IonItemOption color="warning" onClick={blockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={trash} />
                                </IonItemOption>
                            </IonItemOptions> */}
                            <IonItem lines="full" button onClick={callFriendHandler}>
                                <IonAvatar slot="start">
                                    <img src={friend.profile_picture} />
                                </IonAvatar>
                                <IonLabel>{friend.name}</IonLabel>
                                <IonIcon slot="end" icon={chevronForward}/>
                            </IonItem>
                            <IonItemOptions side="end">
                                <IonItemOption color="warning" onClick={editFriendHandler}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>
                {isPlatform('android') && (
                    <IonFab horizontal="end" vertical="bottom" slot="fixed">
                        <IonFabButton color="secondary" onClick={startAddFriendHandler}>
                            <IonIcon icon={addOutline}/>
                        </IonFabButton>
                    </IonFab>
                )}
            </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default Meet;