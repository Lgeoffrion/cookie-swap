import React, { Component } from "react";
import Navbar from "../components/Navbar"
import TradeTable from "../components/TCMTrades"

import API from "../utils/API";

class TCMTrades extends Component {
    // Take from database and pass to state as troopInv
    state = {
        userid:"",
        outgoingTrades:"",
        tcmInfo: "",
        doneLoading: false
  
    };



    componentDidMount() {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        this.setState({ userid: userInfo.id });
        this.tcmInfo();

        this.myIncomingTrades();
 
    }

//pulls all TCM data
tcmInfo = () => {
    API.getTCMS()
    .then(res => {
        this.setState({tcmInfo: res.data})
    }).then(
        this.myIncomingTrades()
    );
}
    

 //pulls incoming trades claimed by the user
 myIncomingTrades = () => {
    var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
    API.myIncomingTrades(userInfo.id)
    .then(res => {
        this.setState({ doneLoading: true, incomingTrades: res.data });
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
                   

                    <h3 class="tradeh3">Incoming Cookie Swaps</h3>
                    {this.state.doneLoading &&
                        <TradeTable 
                            tradeDetails={this.state.incomingTrades} 
                            tcmInfo={this.state.tcmInfo}
                            currentUser={this.state.userid}
                            cancelFormSubmit={this.cancelFormSubmit}
                            completeFormSubmit={this.completeFormSubmit}>
                        </TradeTable>
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