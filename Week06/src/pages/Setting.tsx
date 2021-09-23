import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const Setting: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>
                        Settings
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Settings</h2>
            </IonContent>
        </IonPage>
    );
};

export default Setting;