import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainWrapper from "../components/MainWrapper"
import SUMsearchAdd from "../components/SUMsearchAdd"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import SUMtable from "../components/SUMtable"
import SUMrow from "../components/SUMrow"
import API from "../utils/API";

class SUMlanding extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troops: [],
    };

    componentDidMount() {
        this.troopInfo();
    }
    troopInfo = () => {
        API.getTCMS().then(res => {
            // console.log(res);
            this.setState({ troops: res.data });    
        });
        // var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        // console.log("usernfo", userInfo.id);
        // this.setState({ userid: userInfo.id});

    }
    
    render(){
        return (
            <>
                    {/* Navbar passes a prop which will be the navbar title */}
                    <Navbar 
                        title={'Service Unit Manager'}
                        ahref={'/'}
                        page={'sum'} 
                    />
                    {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id*/}
                    <SUMsearchAdd/>
                    <MainWrapper id="SUMwrapper">
                        {/* pass table info from db through props in the rows */}
                        <SUMtable>
                            {this.state.troops.map(
                                troop => <SUMrow
                                id      = {troop.id}
                                name    = {troop.name}
                                troop   = {troop.troop}
                                email   = {troop.email}
                                phone   = {troop.phone}
                                city    = {troop.city}
                                cdl     = {troop.samoas}
                                gf      = {troop.caramel_chocolate_chip}
                                lem     = {troop.lemonades}
                                pbp     = {troop.peanut_butter_patties}
                                pbs     = {troop.peanut_butter_sandwich}
                                sb      = {troop.shortbread}
                                sm      = {troop.smores}
                                tal     = {troop.thanks_a_lot}
                                tm      = {troop.thin_mint}
                                />
                            )}
                        </SUMtable>
                    </MainWrapper>
            </>

        )
    }

}

export default SUMlanding;