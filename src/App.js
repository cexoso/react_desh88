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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <MuiThemeProvider>
            <Router>
                <div>

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
                </div>
            </Router>
        </MuiThemeProvider>

        );
    }
}

export default App;



