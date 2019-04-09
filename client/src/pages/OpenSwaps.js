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
        tcmInfo: "",
        doneLoading: false
    };



async componentDidMount() {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        this.setState({ userid: userInfo.id });
        this.tcmInfo();
        // this.myOpenTrades();
    }

//pulls all TCM data
tcmInfo = () => {
    API.getTCMS()
    .then(res => {
        this.setState({tcmInfo: res.data})
        console.log("Test 1:", res.data);    
    }).then(
        this.myOpenTrades()
    ).then(setTimeout(()=>{
        this.setState({ doneLoading: true })
        }, 500)
        );
}

//pulls open trades made by the user
    myOpenTrades = () => {
        var userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
        // var test = JSON.parse(sessionStorage.getItem("TCMList"));
        API.myOpenTrades(userInfo.id)
       .then(res => {
            this.setState({ openTrades: res.data });
            console.log("Test 2:", res.data);  
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
                   
                        <h3 className="tradeh3">Open Cookie Swaps</h3>
                        {this.state.doneLoading &&
                        <OpenTradeTable 
                        tcmInfo={this.state.tcmInfo}
                        tradeDetails={this.state.openTrades} 
                        currentUser={this.state.userid}
                        cancelFormSubmit={this.cancelFormSubmit}
                        completeFormSubmit={this.completeFormSubmit}>
                        </OpenTradeTable>
                        }
                    </div></div>

            </>

        )
    }

}

export default TCMTrades