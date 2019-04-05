import React, { Component } from "react";
import Navbar from "../components/Navbar"

class Profile extends Component {
    state = {

    }
    render()
    {
        return(
            <>
            {/* Navbar passes a prop which will be the navbar title */}
            <Navbar title="Troop Manager Profile" 
            ahref={'/TCM'} 
            page={'profile'}/>
            </>
        
        
        );
    }
}

export default Profile;