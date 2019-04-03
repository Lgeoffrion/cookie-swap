import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import Sidebar from "../components/Sidebar"
import ExcessCookieBody from "../components/ExcessCookieBody"
import SideBtn from "../components/SideBtn"
import { withRouter } from 'react-router-dom';

class Inventory extends Component {
    state = {
        troopInv:{}
    };
    
    render(){
        return (
            <>
                    <Navbar title="Excess Cookie Inventory"/>
                    <MainWrapper id="excessinventory">
                        <Sidebar>
                            <SideBtn 
                            name="button"
                            />
                        </Sidebar>
                        <ExcessCookieBody/>
                    </MainWrapper>
                    <MainWrapper id="yourinventory">
                        <ExcessCookieBody/>
                    </MainWrapper>
            </>

        )
    }

}
export default withRouter(Inventory);
// export default Inventory