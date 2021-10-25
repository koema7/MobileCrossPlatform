import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle } from '@ionic/react';
import { FaSearch } from "react-icons/fa";
import './Review.css';

const Review: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
            <IonTitle size="large">Review</IonTitle>
        </IonHeader>
        <IonRow className="review-container">
          <IonCol size='12' className="review-box review-box-write">
            <div className="review-button">
              Write a review
            </div>
          </IonCol>
          <IonCol size='12' className="review-box review-box-upload">
            <div className="review-button">
              Upload a photo
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Review;
