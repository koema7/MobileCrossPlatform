import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle } from '@ionic/react';
import { FaSearch } from "react-icons/fa";
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
            <IonTitle size="large">Search</IonTitle>
        </IonHeader>
        <IonRow className="search-container">
          <IonCol size='12' className='search-header-container'>
            <div className="search-form">
              <FaSearch className='search-icons'/>
              Where to?
            </div>
            <div className="search-box-nearby">
              <div className="search-box-nearby-content">
                <h1>See what's good nearby.</h1>
                <div className="search-box-location-settings">
                  Turn on location settings
                </div>
              </div>
            </div>
          </IonCol>
          <IonCol size='12' className='search-content-container'>
            <h2 className='search-content-title'>Destinations travellers love</h2>
            <div className='search-content-images-container'>
              <div className="search-location-images-top">
                <div className="search-location-images search-location-images-new-york-city">
                  <div className="search-location-images-title">
                      <h4>New York City</h4>
                  </div>
                </div>
                <div className="search-location-images search-location-images-not-left search-location-images-singapore">
                  <div className="search-location-images-title">
                      <h4>Singapore</h4>
                  </div>
                </div>
              </div>
              <div className="search-location-images-bottom">
                <div className="search-location-images search-location-images-rome">
                  <div className="search-location-images-title">
                      <h4>Rome</h4>
                  </div>
                </div>
                <div className="search-location-images search-location-images-not-left search-location-images-paris">
                  <div className="search-location-images-title">
                    <h4>Paris</h4>
                  </div>
                </div>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Search;
