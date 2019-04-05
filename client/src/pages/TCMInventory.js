import React, { Component } from "react";
import Navbar from "../components/Navbar"
// import MainWrapper from "../components/MainWrapper"
// import ExcessCookieBody from "../components/ExcessCookieBody"
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
        this.openSwaps();
    }
    openSwaps = () => {
        API.getOpenSwaps().then(res => {
            // console.log("Trade Cookies:",res.data);
            this.setState({ openTrade: res.data });
        });
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        console.log("userinfo", userInfo.id);
        this.setState({ userid: userInfo.id});

    }

    claimFormSubmit = event => {
        event.preventDefault();       
        // Trying to log the current info of JUST the claim you're clicking on, before we go further.
        console.log(this.state.openTrade);    
    }

    render() {
        // this.tradeCookie();

        return (
            <>
             <Navbar
                    title={'Troop Cookie Manager'}
                    ahref={'/'}
                    page={'tcm'}
                />
                <div className='row'>
                    <div className="col col l10 push-l1 s12">
                        {/* <MainWrapper id="yourinventory">
                        </MainWrapper> */}

                        {/* <div>{userInfo}</div> */}
                        <TradeTable 
                        tradeDetails={this.state.openTrade} 
                        currentUser={this.state.userid}
                        claimFormSubmit={this.claimFormSubmit}
                        >
                        </TradeTable>
                    </div></div>
            </>

        )
    }

}

export default TCMInventory