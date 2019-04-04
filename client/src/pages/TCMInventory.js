import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import Sidebar from "../components/Sidebar"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import SideBtn from "../components/SideBtn"
import API from "../utils/API";
import ExcessTable from "../components/ExcessTable"
import ExcessRow from "../components/ExcessRow"

class TCMInventory extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv:[],
    };
    //==========================================================================================
    // call the data as and pass into troopInv as soon as component is mounted
    componentDidMount() {
        //use api call "getInventory()" function from utils/api
        API.getInventory().then(res => {
            let tempArray = [];
            //loop through the res(resonse) and push it into the state troopInv
            for(let i = 0; i < res.data.length; i++){
                tempArray.push(
                    {
                        id                    :     res.data[i].id,
                        name                  :     res.data[i].name,
                        location              :     res.data[i].city,
                        smores                :     res.data[i].smores,
                        thinMint              :     res.data[i].thin_mint,
                        shortBread            :     res.data[i].shortbread,
                        peanutButterSandwhich :     res.data[i].peanut_butter_sandwhich,
                        lemonades             :     res.data[i].lemonades,
                        thanksAlot            :     res.data[i].thanks_a_lot,
                        samoas                :     res.data[i].samoas,
                        caramelChocolateChip  :     res.data[i].caramel_chocolate_chip,
                        peanutButterPatties   :     res.data[i].peanut_butter_patties
                    }
                )
            }
            //insert our temporary array into our state troopInv
            this.setState({troopInv: tempArray});
        })
      }
    //===========================================================================================
    render(){
        return (
            <>
                    {/* Navbar passes a prop which will be the navbar title */}
                    <Navbar title="Excess Cookie Inventory"/>
                    {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id*/}
                    <MainWrapper id="excessinventory">
                    <div>
                        {this.state.troopInv.map((troop, index) => (
                            <p key={index}>
                            {troop.id} |
                            {troop.name} |
                            {troop.location} |
                            {troop.smores} |
                            {troop.thinMint} |
                            {troop.shortBread} |
                            {troop.peanutButterSandwhich} |
                            {troop.lemonades} |
                            {troop.thanksAlot} |
                            {troop.samoas} |
                            {troop.caramelChocolateChip} |
                            {troop.peanutButterPatties} |
                            </p>
                        ))}
                    </div>
                        {/* Sidebar which will take SideBtn as children */}
                        {/* Table for excess cookie data, will pull from database and 
                        pass props through state to populate table
                        Data will be passed through state and props to here, could use separate 
                        component for table and thead then use props.children to fill with map
                        of the rows */}
                    </MainWrapper>
                    {/* Wrapper for invetory of logged in troop, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id */}
                    <MainWrapper id="yourinventory">
                        {/* Sidebar which will take SideBtn as children */}
                        
                    </MainWrapper>
            </>

        )
    }

}

export default TCMInventory