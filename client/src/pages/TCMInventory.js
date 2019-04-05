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
                        <TradeTable tradeDetails={this.state.openTrade} 
                        currentUser={this.state.userid}>
                        </TradeTable>
                    </div></div>
            </>

        )
    }

}

export default TCMInventory