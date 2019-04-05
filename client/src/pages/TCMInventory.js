import React, { Component } from "react";
import LoginNavbar from "../components/LoginNavbar"
import MainWrapper from "../components/MainWrapper"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import ExcessTable from "../components/ExcessTable"
import ExcessRow from "../components/ExcessRow"

class TCMInventory extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv:{}
    };
    
    render(){
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        console.log("usernfo",userInfo);
        return (
            <>

                    {/* Navbar passes a prop which will be the navbar title */}
                    <LoginNavbar 
                        title={'Excess Cookie Inventory'}
                        ahref={'/'}
                        page={'tcm'} 
                    />
                    {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id */}
                    <MainWrapper id="excessinventory">
                        {/* Sidebar which will take SideBtn as children */}

                        {/* Table for excess cookie data, will pull from database and 
                        pass props through state to populate table
                        Data will be passed through state and props to here, could use separate 
                        component for table and thead then use props.children to fill with map
                        of the rows */}
                        <ExcessTable>
                            <ExcessRow/>
                        </ExcessTable>
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