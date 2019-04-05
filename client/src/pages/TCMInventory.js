import React, { Component } from "react";
import LoginNavbar from "../components/LoginNavbar"
import MainWrapper from "../components/MainWrapper"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import ExcessTable from "../components/ExcessTable"
import ExcessRow from "../components/ExcessRow"
import TradeTable from "../components/TradeTable"

import API from "../utils/API";
class TCMInventory extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv: "",
        openTrades :"",
        userid:""
    };

    componentDidMount() {
        this.tradeCookie();
    }
    tradeCookie = () => {
        API.getTCMS().then(res => {
            // console.log(res);
            this.setState({ openTrade: res.data });
        });
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        console.log("usernfo", userInfo.id);
        this.setState({ userid: userInfo.id});

    }

    render() {
        // this.tradeCookie();

        return (
            <>
             <LoginNavbar
                    title={'Troop Cookie Manager'}
                    ahref={'/'}
                    page={'tcm'}
                />
                <div className='row'>
                    <div className="col col l10 push-l1 s12">
                        {/* <MainWrapper id="yourinventory">
                </MainWrapper> */}

                        {/* <div>{userInfo}</div> */}
                        <TradeTable tradeDetails={this.state.openTrade} 
                        currentUser={this.state.userid}>
                        </TradeTable>
                    </div></div>
                {/* Navbar passes a prop which will be the navbar title */}
               
                {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id*/}
                {/* <MainWrapper id="cookieTrade"> */}
                    {/* Table for excess cookie data, will pull from database and 
                        pass props through state to populate table
                        Data will be passed through state and props to here, could use separate 
                        component for table and thead then use props.children to fill with map
                        of the rows */}
                    

                {/* </MainWrapper> */}
                {/* Wrapper for invetory of logged in troop, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id */}
              
            </>

        )
    }

}

export default TCMInventory