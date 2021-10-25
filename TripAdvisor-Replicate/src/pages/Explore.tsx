import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Explore.css';
import { GrChatOption } from "react-icons/gr";
import { BiBed } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className='explore-ion-header'>
            <IonTitle size="large">Explore</IonTitle>
        </IonHeader>
        <IonRow className='explore-container'>
          <IonCol size='12' className='explore-header'>
            <div className="explore-header-button-container">
              <div className="explore-header-button">
                <BiBed className="explore-header-icons"/>
                Hotels
              </div>
              <div className="explore-header-button">
                <HiOutlineTicket className="explore-header-icons"/>
                Things To Do
              </div>
              <div className="explore-header-button">
                <IoRestaurantOutline className="explore-header-icons"/>
                Restaurant
              </div>
              <div className="explore-header-button">
                <GrChatOption className="explore-header-icons"/>
                Forum
              </div>
            </div>
          </IonCol>
          <IonCol size='12'>
            <div className="banner-container">
              <div className="banner-images banner-images-background">
                <div className="banner-images-title">
                  <h1>Get more of</h1>
                  <h1 className="banner-h1">what you've</h1>
                  <h1 className="banner-h1">been missing.</h1>
                  <p>Introducing Tripadvisor plus. Endless travel</p>
                  <p className="banner-p">saving, one simple membership.</p>
                  <div className="get-intel-button">
                    Get the intel
                  </div>
                </div>
              </div>
            </div>
            
          </IonCol>
          <IonCol size='12' className='explore-content'>
              <h2 className='explore-content-title'>Small batch stays</h2>
              <h6 className='explore-content-subtitle'>Cool cities, cooler boutique hotels</h6>
              <div className='explore-content-images-container'>
                <div className="explore-location-images explore-location-images-nyc">
                  <div className="explore-location-images-title">
                    <h1>New York City</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-paris">
                  <div className="explore-location-images-title">
                    <h1>Paris</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-rome">
                  <div className="explore-location-images-title">
                    <h1>Rome</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-singapore">
                  <div className="explore-location-images-title">
                    <h1>Singapore</h1>
                  </div>
                </div>
              </div>
              <h2 className='explore-content-title explore-content-title-margin'>Plan your next escape</h2>
              <h6 className='explore-content-subtitle'>Family-friendly spots to explore</h6>
              <div className='explore-content-images-container'>
                <div className="explore-location-images explore-location-images-bali">
                  <div className="explore-location-images-title">
                    <h1>Bali</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-flores">
                  <div className="explore-location-images-title">
                    <h1>Flores</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-lombok">
                  <div className="explore-location-images-title">
                    <h1>Lombok</h1>
                  </div>
                </div>
                <div className="explore-location-images explore-location-images-riau">
                  <div className="explore-location-images-title">
                    <h1>Riau Archipelago</h1>
                  </div>
                </div>
              </div>
          </IonCol>
      </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Explore;
