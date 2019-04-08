import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import TradeTable from "../components/TCMTrades"
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
        this.tcmInfo();
        this.myOpenTrades();
        this.myOutgoingTrades();
        this.myIncomingTrades();
        
    }

    tcmInfo = () => {
        API.getTCMS()
        .then(res => {
            console.log("TCMINFO:", res)
            this.setState({tcmInfo: res.data})
        });
    }
    
    //Pulls inventory of individual that is logged in
    myOpenTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        // console.log("user ID :", userInfo.id);

        API.myOpenTrades(userInfo.id)

        .then(res => {
            // console.log(" myOpenTrades API Response:", res);
            this.setState({ openTrades: res.data });
        });
      
    }

    myOutgoingTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        // console.log("user ID :", userInfo.id);

        API.myOutgoingTrades(userInfo.id)

        .then(res => {
            // console.log("myOutgoingTrades API Response:", res);
            this.setState({ outgoingTrades: res.data });
        });
      
    }


    myIncomingTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        // console.log("user ID :", userInfo.id);

        API.myIncomingTrades(userInfo.id)

        .then(res => {
            // console.log("myIncomingTrades API Response:", res);
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
                   
                        <h3>Open Trades</h3>
                        <OpenTradeTable tradeDetails={this.state.openTrades} 
                        tcmInfo={this.state.tcmInfo}
                        currentUser={this.state.userid}>
                        </OpenTradeTable>

                        <h3>Outgoing Trades</h3>
                        <TradeTable tradeDetails={this.state.outgoingTrades} 
                        tcmInfo={this.state.tcmInfo}
                        currentUser={this.state.userid}>
                        </TradeTable>

                        <h3>Incoming Trades</h3>
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