import { IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonIcon, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader } from '@ionic/react';
import { add } from 'ionicons/icons';

import './style.css'

import MemoriesContext, {Memory} from "../data/memorycontext";
import { useHistory } from "react-router";
import { useRef, useState, useContext } from 'react';

const GoodMemories: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext);
    const goodMemories = memoriesCtx.memories.filter(memory => memory.type == 'good');

    return (
        <IonPage>
            <IonFab vertical="bottom" horizontal="end" slot="fixed" className="fabButton">
                <IonFabButton routerLink={'/newMemory'}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Good Memories
                    </IonTitle>
                    <IonButton slot="end" routerLink={'/newMemory'} className="headerButton">
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
                        <IonRow key={memory.id}>
                            <IonCard>
                                <img src={memory.imagePath} alt={memory.title} />
                                <IonCardHeader>
                                    <IonCardTitle>{memory.title}</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories;