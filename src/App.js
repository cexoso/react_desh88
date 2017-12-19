import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,Route
} from 'react-router-dom';

import RaceInfo from './pages/RaceInfo';
import NewsInfo from './pages/NewsInfo';
import PlayerInfo from './pages/PlayerInfo';
import GameInfo from './pages/GameInfo';
import SubRace from './pages/SideRace';
import Download from './pages/Download';
import PaySuccess from './pages/PaySuccess';
import PayFail from './pages/PayFail';
import activitiesInfo from './pages/activitiesInfo';
import Ticket from  './pages/Ticket';
import VideoInfo from  './pages/VideoInfo';
import DownloadSea from  './pages/DownloadSea';
import SharePage from './pages/SharePage';
import ChoiseTicketPage from './pages/ChoiseTicketPage';
import MallInfoPage from './pages/mall/MallInfoPage';
import LogisticsPage from './pages/mall/LogisticsPage';
import AntDemo from './pages/AntDemo';
import CommentInfoPage from './pages/comment/CommentInfoPage';
import PersonDynamicPage from './pages/comment/PersonDynamicPage';

    // global.console = {
    //     info: () => {
    //     },
    //     log: () => {
    //     },
    //     warn: () => {
    //     },
    //     error: () => {
    //     },
    // };


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Route exact path="/ant" component={AntDemo}/>
                    <Route exact path="/race/:id/:lang" component={RaceInfo}/>

                    <Route path="/loadApp" component={Download}/>
                    <Route path="/news/:id/:lang" component={NewsInfo}/>
                    <Route path="/rankPlayer/:id/:lang" component={PlayerInfo}/>
                    <Route path="/rankGame/:id/:lang" component={GameInfo}/>
                    <Route path="/race/:id/:lang/sidedetail/:subId" component={SubRace}/>
                    <Route path="/pay/success" component={PaySuccess}/>
                    <Route path="/pay/fail" component={PayFail}/>

                    <Route path="/sharePage" component={SharePage}/>
                    <Route path="/loadAPPSea" component={DownloadSea}/>
                    <Route path="/activities/:id/:lang" component={activitiesInfo}/>
                    <Route path="/race/:id/:lang/loadAPP" component={Download}/>
                    <Route path="/races/:id/tickets/:ticketId/:lang" component={Ticket}/>
                    <Route path="/videos/:video_id/:lang" component={VideoInfo}/>

                    <Route path="/raceTickets/:id/:lang" component={ChoiseTicketPage}/>

                    <Route path="/products/:id/:lang" component={MallInfoPage}/>


                    <Route path="shipments/search/:shipping_number/:express_code/:order_number/:lang" component={LogisticsPage}/>


                </div>
            </Router>

        );
    }
}

export default App;



