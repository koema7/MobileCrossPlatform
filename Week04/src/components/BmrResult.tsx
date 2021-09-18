import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react"

const BmrResult: React.FC<{ 
    results : number | undefined; 
    sedentary : number | undefined;  
    exercise13 : number | undefined;
    exercise45 : number | undefined;
    dailyExercise : number | undefined;
    intenseExercise : number | undefined;
}> = (props) => {
    if(props.results == undefined){
        return null
    }
    else{
        return (
            <IonRow>
                <IonCol>
                    <IonCard>
                        <IonCardContent className="ion-text-center">
                            <h2>BMR = {props.results} Calories/day</h2>
                            <h1>Daily calorie needs based on activity level</h1>
                            <IonRow>
                                <IonCol>
                                    <b>Activity Level</b>
                                </IonCol>
                                <IonCol>
                                    <b>Calorie</b>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    Sedentary: little or no exercise
                                </IonCol>
                                <IonCol>
                                    {props.sedentary}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    Exercise: 1-3 times/week
                                </IonCol>
                                <IonCol>
                                    {props.exercise13}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    Exercise: 4-5 times/week
                                </IonCol>
                                <IonCol>
                                    {props.exercise45}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    Daily Exercise or Intense Exercise 3-4 times/week
                                </IonCol>
                                <IonCol>
                                    {props.dailyExercise}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    Intense Exercise: 6/7 times/week
                                </IonCol>
                                <IonCol>
                                    {props.intenseExercise}
                                </IonCol>
                            </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        )
    }
}

export default BmrResult; 