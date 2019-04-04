import React, { Component } from "react";
import LoginNavbar from "../components/LoginNavbar";
import MainWrapper from "../components/MainWrapper"
import SUMsearchAdd from "../components/SUMsearchAdd"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import SideBtn from "../components/SideBtn"
import SUMtable from "../components/SUMtable"
import SUMrow from "../components/SUMrow"

class SUMlanding extends Component {
    // Take from database and pass to state as troopInv
    state = {
        contacts:{}
    };
    
    render(){
        return (
            <>
                    {/* Navbar passes a prop which will be the navbar title */}
                    <LoginNavbar title="Service Unit Manager"/>
                    {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id*/}
                    <SUMsearchAdd/>
                    <MainWrapper id="SUMwrapper">
                        {/* Sidebar which will take SideBtn as children */}

                        {/* Table for excess cookie data, will pull from database and 
                        pass props through state to populate table
                        Data will be passed through state and props to here*/}
                        <SUMtable>
                            <SUMrow/>
                        </SUMtable>
                    </MainWrapper>
            </>

        )
    }

}

export default SUMlanding;