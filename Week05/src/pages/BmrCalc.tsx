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
    IonRadioGroup,
    IonRadio,
    IonListHeader,
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

import BmrControls from '../components/Controls';
import InputControl from '../components/InputControl';
import BmrResult from '../components/BmrResult';

import {useRef, useState} from "react";


const BmrCalc: React.FC = () => {
    const [ error, setError ] = useState<string>();
    const [ calculatedBMR, setCalculatedBMR ] = useState<number>();
    const [ gender, setGender ] = useState<string>();
    const [ sedentary, setSedentary ] = useState<number>();
    const [ exercise13, setExercise13 ] = useState<number>();
    const [ exercise45, setExercise45 ] = useState<number>();
    const [ dailyExercise, setDailyExercise ] = useState<number>();
    const [ intenseExercise, setintenseExercise ] = useState<number>();
    const [ calcUnits, setCalsUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const ageInputRef = useRef<HTMLIonInputElement>(null);
    const genderInputRef = useRef<HTMLIonRadioGroupElement>(null);

    const calculateBMI = () =>{
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;
        const enteredAge = ageInputRef.current!.value;

        if(!enteredWeight || !enteredHeight || !enteredAge || +enteredHeight <= 0 || +enteredWeight <= 0 || +enteredAge <= 0){
            setError('Please enter a valid (non-negative) input number');
            return;
        } 

        if(!gender){
            setError('Please select a gender');
            return;
        }

        let bmr = 0;

        if(gender == 'Male'){
            if(calcUnits === 'ftlbs'){
                bmr = 66 + (13.7 * +enteredWeight/2.2) + (5 * +enteredHeight/0.0328) - (6.8 * +enteredAge);
            }
            else{
                bmr = 66 + (13.7 * +enteredWeight) + (5 * +enteredHeight) - (6.8 * +enteredAge);
            }
        }
        else{
            if(calcUnits === 'ftlbs'){
                bmr = 655 + (9.6 * +enteredWeight/2.2) + (1.8 * +enteredHeight/0.0328) - (4.7 * +enteredAge);
            }
            else{
                bmr = 655 + (9.6 * +enteredWeight) + (1.8 * +enteredHeight) - (4.7 * +enteredAge);
            }
        }

        setSedentary(bmr * 1.2);
        setExercise13(bmr * 1.375);
        setExercise45(bmr * 1.55);
        setDailyExercise(bmr * 1.725);
        setintenseExercise(bmr * 1.9);
        setCalculatedBMR(bmr);
    }

    const resetInputs = () =>{
        weightInputRef.current!.value = null;
        heightInputRef.current!.value = null;
        ageInputRef.current!.value = null;
        genderInputRef.current!.value = null;
        setCalculatedBMR(undefined)
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
                        <IonTitle>BMR Calculator</IonTitle>
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
                                            <IonItem>
                                                <IonLabel position="floating">Age</IonLabel>
                                                <IonInput ref={ageInputRef}></IonInput>
                                            </IonItem>
                                            <IonRadioGroup ref={genderInputRef} onIonChange={e => setGender(e.detail.value)}>
                                                <IonListHeader>
                                                    <IonLabel>Gender</IonLabel>
                                                </IonListHeader>
                                                <IonRow>
                                                    <IonCol>
                                                        <IonItem>
                                                            <IonLabel>Male</IonLabel>
                                                            <IonRadio slot="start" value="Male" />
                                                        </IonItem>
                                                    </IonCol>
                                                    <IonCol>
                                                        <IonItem>
                                                            <IonLabel>Female</IonLabel>
                                                            <IonRadio slot="start" value="Female" />
                                                        </IonItem>
                                                    </IonCol>
                                                </IonRow>
                                            </IonRadioGroup>
                                            <IonItem>
                                                <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                                                <IonInput ref={heightInputRef}></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                                                <IonInput ref={weightInputRef}></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <BmrControls onCalculate={calculateBMI} onReset={resetInputs} />
                                    <BmrResult results={calculatedBMR} sedentary={sedentary} exercise13={exercise13} exercise45={exercise45} dailyExercise={dailyExercise} intenseExercise={intenseExercise}/>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonApp>
        </>
    )
};

export default BmrCalc;
