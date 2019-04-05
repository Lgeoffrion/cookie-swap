import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import InventoryTable from "../components/TCMinventory"
import API from "../utils/API";

class TCMInventory2 extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv: "",
        userid:"",
        openTrades :""
  
    };

    componentDidMount() {
   
        this.tradeCookie();
    }
    
    tradeCookie = () => {
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        console.log("user ID :", userInfo.id);

        API.getYourInventory(userInfo.id)

        .then(res => {
            console.log("API Response:", res);
            this.setState({ openTrade: res.data });
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
                        {/* <MainWrapper id="yourinventory">
                </MainWrapper> */}

                        {/* <div>{userInfo}</div> */}
                        <InventoryTable tradeDetails={this.state.openTrade} 
                        currentUser={this.state.userid}>
                        </InventoryTable>
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

export default TCMInventory2