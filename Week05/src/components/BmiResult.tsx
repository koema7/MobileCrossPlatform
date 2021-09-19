import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react"
import './BmiResult.css';

const BmiResult: React.FC<{ results : number | undefined; status : string | undefined; color : string | undefined}> = (props) => {
    if(props.results == undefined){
        return null
    }
    else{
        return (
            <IonRow>
                <IonCol>
                    <IonCard id="result" color={props.color}>
                        <IonCardContent className="ion-text-center">
                            <h2>{props.results}</h2>
                            <h1>{props.status}</h1>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        )
    }
}

export default BmiResult; 