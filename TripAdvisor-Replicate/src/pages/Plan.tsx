import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle } from '@ionic/react';
import { useRef, useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { MdPersonAdd } from 'react-icons/md';
import './Plan.css';
interface PageRouter{
  page: string
}
const PlanRouter: React.FC<PageRouter> = (props) => {
  if(props.page == 'trips'){
      return (
        <div className="plan-content-trips-container">
          <IonRow className="plan-content-trips-box">
              <IonCol size-md='1' size='2' className="plan-content-trips-box-logo">
                  <div className="plan-content-trips-box-icons-circle">
                    <IoHeart className='plan-content-trips-box-icons'/>
                  </div>
              </IonCol>
              <IonCol size-md='11' size='10' className="plan-content-trips-box-title">
                  <span>Save places you'd like to visit</span>
              </IonCol>
          </IonRow>
          <IonRow className="plan-content-trips-box">
              <IonCol size-md='1' size='2' className="plan-content-trips-box-logo">
                  <div className="plan-content-trips-box-icons-circle">
                    <GoLocation className='plan-content-trips-box-icons'/>
                  </div>
              </IonCol>
              <IonCol size-md='11' size='10' className="plan-content-trips-box-title">
                  <span>See your saves on a map</span>
              </IonCol>
          </IonRow>
          <IonRow className="plan-content-trips-box">
              <IonCol size-md='1' size='2' className="plan-content-trips-box-logo">
                  <div className="plan-content-trips-box-icons-circle">
                    <CgNotes className='plan-content-trips-box-icons'/>
                  </div>
              </IonCol>
              <IonCol size-md='11' size='10' className="plan-content-trips-box-title">
                  <span>Keep track of notes, links, and more</span>
              </IonCol>
          </IonRow>
          <IonRow className="plan-content-trips-box">
              <IonCol size-md='1' size='2' className="plan-content-trips-box-logo">
                  <div className="plan-content-trips-box-icons-circle">
                    <MdPersonAdd className='plan-content-trips-box-icons'/>
                  </div>
              </IonCol>
              <IonCol size-md='11' size='10' className="plan-content-trips-box-title">
                  <span>Share and collaborate on your plans</span>
              </IonCol>
          </IonRow>
          
          <div className="plan-content-trips-footer">
              <div className="plan-content-trips-footer-title">
                Trip name
              </div>
              <div className="plan-content-trips-footer-form">
                Ex: Weekend in NYC
              </div>
              <div className="plan-content-trips-footer-button">
                Create a Trip
              </div>
              <div className="plan-content-trips-footer-href">
                Log in to access your Trips
              </div>
          </div>
        </div>
      )
  }
  else if(props.page == 'saves'){
      return (
        <div className="plan-content-saves-container">
            <div className="plan-content-saves-title">
                No saves yet
            </div>
            <div className="plan-content-saves-subtitle">
                Places you save will appear here
            </div>
            <div className="plan-content-saves-href">
                Log in to access your Saves
            </div>
        </div>
      )
  }
  else{
      return (
        <div className="plan-content-bookings-container">
          <div className="plan-content-bookings-href">
              Log in to access your Saves
          </div>
        </div>
      )
  }
}

const Plan: React.FC = () => {
  const [ page, setPage ] = useState<string>('trips');
  const planButtonTrip = useRef<HTMLDivElement>(null);
  const planButtonSaves = useRef<HTMLDivElement>(null);
  const planButtonBookings = useRef<HTMLDivElement>(null);
  const changePage = (selected: string) => {
      document.getElementById('plan-button-title-' + page)?.classList.remove('plan-button-title-active')
      setPage(selected)
      document.getElementById('plan-button-title-' + selected)?.classList.add('plan-button-title-active')
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
            <IonTitle size="large">Plan</IonTitle>
        </IonHeader>
        <IonRow className='plan-container'>
            <IonCol size='12' className='plan-header-container'>
                <button className='plan-button' onClick={() => changePage('trips')}>
                    <div ref={planButtonTrip} className="plan-button-title plan-button-title-active" id="plan-button-title-trips">
                        Trips
                    </div>
                </button>
                <button className='plan-button' onClick={() => changePage('saves')}>
                    <div ref={planButtonSaves} className="plan-button-title" id="plan-button-title-saves">
                        Saves
                    </div>
                </button>
                <button className='plan-button' onClick={() => changePage('bookings')}>
                    <div ref={planButtonBookings} className="plan-button-title plan-button-bookings" id="plan-button-title-bookings">
                        Bookings
                    </div>
                </button>
            </IonCol>
            <IonCol size='12' className='plan-content-container'>
                <PlanRouter page={page}/>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Plan;
