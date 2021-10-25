import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart, home, pencil, search } from "ionicons/icons";
import Explore from './pages/Explore';
import Plan from './pages/Plan';
import Review from './pages/Review';
import Search from './pages/Search';

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
import './theme/variables.css';
import './pages/Tab.css';

import { RiHomeLine } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Explore} exact={true} />
          <Route path="/plan" component={Plan} />
          <Route path="/review" component={Review} />
          <Route path="/search" component={Search} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton href="/home" tab="home" layout="icon-top">
            <RiHomeLine/>
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton href="/search" tab="search" layout="icon-top">
            <AiOutlineSearch/>
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton href="/plan" tab="plan" layout="icon-top">
            <AiOutlineHeart/>
            <IonLabel>Plan</IonLabel>
          </IonTabButton>
          <IonTabButton href="/Review" tab="Review" layout="icon-top">
            <BiPencil/>
            <IonLabel>Review</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
