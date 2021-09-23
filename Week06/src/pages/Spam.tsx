import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const Spam: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>
                        Spam
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Spam</h2>
            </IonContent>
        </IonPage>
    );
};

export default Spam;