import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

const Home: React.FC = () => {

    
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Calculator</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
            <h2>00000028583 - Delvin Chianardi</h2>
            <IonButton expand="block" routerLink="/bmi">BMI Calculator</IonButton>
            <IonButton expand="block" routerLink="/bmr">BMR Calculator</IonButton>
        </IonContent>
    </IonApp>
    );
}

export default Home;