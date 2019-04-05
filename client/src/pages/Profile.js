import React, { Component } from "react";
import LoginNavbar from "../components/LoginNavbar"

class Profile extends Component {
    state = {

    }
    render()
    {
        return(
            <>
            {/* Navbar passes a prop which will be the navbar title */}
            <LoginNavbar title="Troop Manager Profile" 
            ahref={'/TCMInventory'} 
            page={'tcm'}/>
            </>
        
        
        );
    }
}

export default Profile;