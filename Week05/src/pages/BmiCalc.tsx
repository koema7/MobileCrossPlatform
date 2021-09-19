import { 
    IonApp, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonAlert,
    IonButtons,
    IonBackButton
} from '@ionic/react';

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

import BmiControls from '../components/Controls';
import InputControl from '../components/InputControl';
import BmiResult from '../components/BmiResult';

import {useRef, useState} from "react";


const BmiCalc: React.FC = () => {
    const [ error, setError ] = useState<string>();
    const [ calculatedBMI, setCalculatedBMI ] = useState<number>();
    const [ BMIStatus, setBMIStatus ] = useState<string>();
    const [ calcUnits, setCalsUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const [ resultColor, setResulColor ] = useState<string>();
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBMI = () =>{
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;

        if(!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0){
            setError('Please enter a valid (non-negative) input number');
            return;
        } 

        let bmi = 0;

        if(calcUnits === 'ftlbs'){
            bmi = +enteredWeight/2.2 / (+enteredHeight/100/0.0328 * +enteredHeight/100/0.0328);
        }
        else{
            bmi = +enteredWeight / (+enteredHeight/100 * +enteredHeight/100);
        }

        if(bmi<18.5){
            setBMIStatus("Kurus");
            setResulColor("warning")
        }else if(bmi >= 18.5 && bmi <= 24.9){
            setBMIStatus("Normal");
            setResulColor("success");
        }else if(bmi >= 2.5 && bmi <= 29.9){
            setBMIStatus("Gemuk");
            setResulColor("warning")
        }else if(bmi >= 30.0){
            setBMIStatus("Obesitas");
            setResulColor("danger")
        }

        console.log(bmi);
        setCalculatedBMI(bmi);
    }

    const resetInputs = () =>{
        weightInputRef.current!.value = null;
        heightInputRef.current!.value = null;
        setCalculatedBMI(undefined)
    }

    const clearError = () => {
        setError('');
    }

    const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
        setCalsUnits(selectedValue);
    }

    return (
        <>
            <IonAlert
                isOpen={!!error}
                message={error}
                buttons={[
                {text: 'Okay', handler: clearError}
                ]}
            />
            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="home" />
                        </IonButtons>
                        <IonTitle>BMI Calculator</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                                <IonGrid className="ion-no-padding">
                                    <IonRow>
                                        <IonCol>
                                            <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                                                <IonInput ref={heightInputRef}></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                                                <IonInput ref={weightInputRef}></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <BmiControls onCalculate={calculateBMI } onReset={resetInputs} />
                                    <BmiResult results={calculatedBMI} status={BMIStatus} color={resultColor}/>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonApp>
        </>
    )
};

export default BmiCalc;
