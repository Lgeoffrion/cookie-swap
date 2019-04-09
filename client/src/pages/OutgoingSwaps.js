import React, { Component } from "react";
import Navbar from "../components/Navbar"
import TradeTable2 from "../components/OutgoingTrades"

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
    }

        //pulls all TCM data
        tcmInfo = () => {
            API.getTCMS()
            .then(res => {
                this.setState({tcmInfo: res.data})
            }).then(
                this.myOutgoingTrades()
            );
        }
        
    
        //pulls outgoing trades made by the user
        myOutgoingTrades = () => {
            var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
            API.myOutgoingTrades(userInfo.id)
            .then(res => {
                this.setState({ doneLoading: true, outgoingTrades: res.data });
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
                        {this.state.doneLoading &&
                        <TradeTable2 
                            tradeDetails={this.state.outgoingTrades} 
                            tcmInfo={this.state.tcmInfo}
                            currentUser={this.state.userid}
                            cancelFormSubmit={this.cancelFormSubmit}
                            completeFormSubmit={this.completeFormSubmit}>
                        </TradeTable2>
                        }
                    </div></div>
              
            </>

        )
    }


}

export default TCMTrades