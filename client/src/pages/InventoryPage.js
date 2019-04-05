import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainWrapper from "../components/MainWrapper";
import InventoryTable from "../components/TCMinventory";
import API from "../utils/API";

class TCMInventory2 extends Component {
  // Take from database and pass to state as troopInv
  state = {
    troopInv: "",
    userid: "",
    openTrades: "",
    troops: [],
    caramel_chocolate_chip: "",
    lemonades: "",
    peanut_butter_patties: "",
    peanut_butter_sandwich: "",
    smores: "",
    samoas: "",
    shortbread: "",
    thanks_a_lot: "",
    thin_mint: "",
    cookie: "",
    value: ""
  };

  componentDidMount() {
    this.myInventory();
  }


//Pulls inventory of individual that is logged in
  myInventory = () => {
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log("user ID :", userInfo.id);

    API.getYourInventory(userInfo.id)
    .then(res => {
      console.log("API Response:", res);
      this.setState({ 
          openTrade: res.data,
          userid: userInfo.id
     });
    });
  };

  addInputChange = event => {
    // const value = event.target.value;
    const name = event.target.name;
    const value = event.target.value;
    // const troop = event.target.troopnum;
    // const phone = event.target.phone;
    // const city = event.target.location;
    // const email = event.target.email;

    this.setState({
        [name]: value,
        cookie: name,
        value: value
    })
}

subInputChange = event => {
    // const value = event.target.value;
    const name = event.target.name;
    const value = event.target.value;
    // const troop = event.target.troopnum;
    // const phone = event.target.phone;
    // const city = event.target.location;
    // const email = event.target.email;

    this.setState({
        [name]: value,
        cookie: name,
        value: value
    })
}

swapInputChange = event => {
    // const value = event.target.value;
    const name = event.target.name;
    const value = event.target.value;
    // const troop = event.target.troopnum;
    // const phone = event.target.phone;
    // const city = event.target.location;
    // const email = event.target.email;

    this.setState({
        [name]: value,
        cookie: name,
        value: value
    })
}

addFormSubmit = event => {
    event.preventDefault();       
    API.addCookies(this.state);    
    this.setState({
        caramel_chocolate_chip: "",
        lemonades: "",
        peanut_butter_patties: "",
        peanut_butter_sandwich: "",
        smores: "",
        samoas: "",
        shortbread: "",
        thanks_a_lot: "",
        thin_mint: "",
        cookie: "",
        value: ""
    })
}

subFormSubmit = event => {
    event.preventDefault();     
    API.subCookies(this.state);    
    this.setState({
        caramel_chocolate_chip: "",
        lemonades: "",
        peanut_butter_patties: "",
        peanut_butter_sandwich: "",
        smores: "",
        samoas: "",
        shortbread: "",
        thanks_a_lot: "",
        thin_mint: "",
        cookie: "",
        value: ""
    })
}

swapFormSubmit = event => {
    event.preventDefault();    
    API.swapCookies(this.state);    
    this.setState({
        caramel_chocolate_chip: "",
        lemonades: "",
        peanut_butter_patties: "",
        peanut_butter_sandwich: "",
        smores: "",
        samoas: "",
        shortbread: "",
        thanks_a_lot: "",
        thin_mint: "",
        cookie: "",
        value: ""
    })
}

  render() {
    return (
      <>
        <Navbar title={"Troop Cookie Manager"} ahref={"/"} page={"tcm"} />
        <div className="row">
          <div className="col col l10 push-l1 s12">
            {/* <MainWrapper id="yourinventory">
                </MainWrapper> */}

            {/* <div>{userInfo}</div> */}
            <InventoryTable
              tradeDetails={this.state.openTrade}
              currentUser={this.state.userid}
              addInputChange={this.addInputChange}
              addFormSubmit={this.addFormSubmit}
              subInputChange={this.subInputChange}
              subFormSubmit={this.subFormSubmit}
              swapInputChange={this.swapInputChange}
              swapFormSubmit={this.swapFormSubmit}
            />
          </div>
        </div>
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
    );
  }
}

export default TCMInventory2;
