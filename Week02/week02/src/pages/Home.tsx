import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useRef, useState} from "react";
import BmiControls from '../components/BmiControls';

const Home: React.FC = () => {
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>();
  const [ BMIStatus, setBMIStatus ] = useState<string>();
  const [ error, setError ] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () =>{
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if(!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }
    const bmi = +enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100));

    if(bmi<18.5){
      setBMIStatus("Kurus");
    }else if(bmi >= 18.5 && bmi <= 24.9){
      setBMIStatus("Normal");
    }else if(bmi >= 2.5 && bmi <= 29.9){
      setBMIStatus("Gemuk");
    }else if(bmi >= 30.0){
      setBMIStatus("Obesitas");
    }

    console.log(bmi);
    setCalculatedBMI(bmi);
  }

  const resetBMI = () =>{
    weightInputRef.current!.value = null;
    heightInputRef.current!.value = null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Tinggi Badan (cm)</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Berat Badan (kg)</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiControls onCalculate={calculateBMI} onReset={resetBMI}/>
          {calculatedBMI && BMIStatus && (<IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent className="ion-text-center">
                  <h2>{calculatedBMI}</h2>
                  <h1>{BMIStatus}</h1>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
