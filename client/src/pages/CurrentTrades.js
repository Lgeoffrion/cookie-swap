import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import TradeTable from "../components/TCMTrades"
import TradeTable2 from "../components/OutgoingTrades"
import OpenTradeTable from "../components/OpenTrades"
import API from "../utils/API";

class TCMTrades extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv: "",
        userid:"",
        openTrades:"",
        outgoingTrades:"",
        incomingTrades:"",
        tcmInfo: ""
  
    };



    componentDidMount() {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        this.setState({ userid: userInfo.id });
        this.tcmInfo();
        this.myOpenTrades();
        this.myOutgoingTrades();
        this.myIncomingTrades();
        
    }

//pulls all TCM data
    tcmInfo = () => {
        API.getTCMS()
        .then(res => {
            console.log("TCMINFO:", res)
            this.setState({tcmInfo: res.data})
        });
    }
    
//pulls open trades made by the user
    myOpenTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        API.myOpenTrades(userInfo.id)
        .then(res => {
            this.setState({ openTrades: res.data });
        });
      
    }

    //pulls outgoing trades made by the user
    myOutgoingTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        API.myOutgoingTrades(userInfo.id)
        .then(res => {
            this.setState({ outgoingTrades: res.data });
        });
      
    }

  //pulls incoming trades claimed by the user
    myIncomingTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        API.myIncomingTrades(userInfo.id)
        .then(res => {
            this.setState({ incomingTrades: res.data });
        });
    }
    

 

    render() {

        return (
            <>
             <Navbar
                    title={'Troop Cookie Manager'}
                    ahref={'/'}
                    page={'tcm'}
                />
                <div className='row'>
                    <div className="col col l10 push-l1 s12">
                   
                        <h3 class="tradeh3">Open Cookie Swaps</h3>
                        <OpenTradeTable tradeDetails={this.state.openTrades} 
                        tcmInfo={this.state.tcmInfo}
                        currentUser={this.state.userid}>
                        </OpenTradeTable>

                        <h3 class="tradeh3">Outgoing Cookie Swaps</h3>
                        <TradeTable2 tradeDetails={this.state.outgoingTrades} 
                        tcmInfo={this.state.tcmInfo}
                        currentUser={this.state.userid}>
                        </TradeTable2>

                        <h3 class="tradeh3">Receiving Cookie Swaps</h3>
                        <TradeTable tradeDetails={this.state.incomingTrades} 
                        tcmInfo={this.state.tcmInfo}
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

export default TCMTrades