import React, { Component } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";

class Profile extends Component {
    state = {

    }
    componentDidMount() {
        this.getprofileDetails();
    }

    // Method to get Profile details using API routes
    getprofileDetails = () => {

        // Check if the TCM user already logged in, if they are not looged in then send them to Login Page
        var TCM_userInfo = JSON.parse(sessionStorage.getItem('TCM_userInfo'));

        if (!TCM_userInfo) {
            document.location.href = "/";
        }
        else 
        {
            // Once we get the userInfo from Session Storage, store only the user id in state variable
            console.log("TCM_userInfo", TCM_userInfo.id);
            this.setState({ userid: TCM_userInfo.id });
            // API.getOpenSwaps().then(res => {
            //     // console.log("Trade Cookies:",res.data);
            //     this.setState({ openTrade: res.data });
            // });
        }

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