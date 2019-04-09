import React, { Component } from "react";
import Navbar from "../components/Navbar"
import TradeTable2 from "../components/OutgoingTrades"

import API from "../utils/API";

class TCMTrades extends Component {
    // Take from database and pass to state as troopInv
    state = {
        userid:"",
        outgoingTrades:"",
        tcmInfo: ""
  
    };



    componentDidMount() {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        this.setState({ userid: userInfo.id });
        this.tcmInfo();

        this.myOutgoingTrades();
 
    }

//pulls all TCM data
    tcmInfo = () => {
        API.getTCMS()
        .then(res => {
            this.setState({tcmInfo: res.data})
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

    cancelFormSubmit = (event, i) => {
        event.preventDefault();
        let cancelArray = event.target.getAttribute('data-value').split(",")
        API.cancelSwap(cancelArray);
        window.location.reload();
    }

    completeFormSubmit = (event, i) => {
        event.preventDefault();
        let completeArray = event.target.getAttribute('data-value').split(",")
        API.completeSwap(completeArray);
        window.location.reload();
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
                   

                        <h3 class="tradeh3">Outgoing Cookie Swaps</h3>
                        {this.state && this.state.outgoingTrades &&
                        <TradeTable2 
                            tradeDetails={this.state.outgoingTrades} 
                            tcmInfo={this.state.tcmInfo}
                            currentUser={this.state.userid}
                            cancelFormSubmit={this.cancelFormSubmit}
                            completeFormSubmit={this.completeFormSubmit}>
                        </TradeTable2>
                        }


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