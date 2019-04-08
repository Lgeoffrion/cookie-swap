import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainWrapper from "../components/MainWrapper"
import SUMsearchAdd from "../components/SUMsearchAdd"
// import ExcessCookieBody from "../components/ExcessCookieBody"
import SUMtable from "../components/SUMtable"
import SUMrow from "../components/SUMrow"
import API from "../utils/API";

class SUMlanding extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troops: [],
        name: "",
        password: 'temporary',
        troop: "",
        phone: "",
        city: "",
        email: "",
        phoneErrorMsg: "valid profilePageInput",
        updateMsg: "",
        buttonDsbl: false,
        firstCheck: true
    };
    handleReset = event => {
        document.location.href = "/SUM";
    }
    componentDidMount() {
        this.troopInfo();
    }
    troopInfo = () => {
        var SUM_userInfo = JSON.parse(sessionStorage.getItem('SUM_userInfo'));

        if (!SUM_userInfo) {
            document.location.href = "/";
        }
        else {
            console.log("usernfo", SUM_userInfo.id);
            this.setState({ userid: SUM_userInfo.id });
            API.getTCMS().then(res => {
                // console.log(res);
                this.setState({ troops: res.data });
            });
        }

    }
    displayErr = () => {
        var talert = document.getElementById("talert"),
        calert = document.getElementById("calert"),
        palert = document.getElementById("palert"),
        lalert = document.getElementById("lalert"),
        ealert = document.getElementById("ealert");

        if (!this.state.troop){
            talert.style.visibility = "visible"
        }
        else{
            talert.style.visibility = "hidden"
        }
        if (!this.state.name){
            calert.style.visibility = "visible"
        }
        else{
            calert.style.visibility = "hidden"
        }
        if (!this.state.phone){
            palert.style.visibility = "visible"
        }
        else{
            palert.style.visibility = "hidden"
        }
        if (!this.state.city){
            lalert.style.visibility = "visible"
        }
        else{
            lalert.style.visibility = "hidden"
        }
        if (!this.state.email){
            ealert.style.visibility = "visible"
        }
        else{
            ealert.style.visibility = "hidden"
        }
    }
    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value

        this.setState({
            [name]: value
        });
        //checks the modal to see if there are inputs for all ======================
        if(!this.state.firstCheck){
            this.displayErr();
        }
        if (!(this.state.troop && this.state.name && this.state.phone && this.state.city && this.state.email)){
            this.setState({
                buttonDsbl: true

            })
        }
        else{
            this.setState({
                buttonDsbl:false
            })
        }
        
    }

    handleFormSubmit = event => {
        event.preventDefault();
        //if the modal passes the input check, update the DB =======================
        if (this.state.troop && this.state.name && this.state.phone && this.state.city && this.state.email){
            API.tcmCreate(this.state);
            this.setState({
                name: "",
                password: 'temporary',
                troop: "",
                phone: "",
                city: "",
                email: ""
            })
            alert("New profile created!")
            this.handleReset()
        }
        else{
            this.displayErr();
            this.setState({
                firstCheck: false
            })
        }

    }
    updateProfile = event => {
        // event.preventDefault();
        // console.log(this.state);
        // API.tcmCreate(this.state);
        // this.setState({
        //     name: "",
        //     password: 'temporary',
        //     troop: "",
        //     phone: "",
        //     city: "",
        //     email: ""
        // })
        // location.reload()
    }
    render() {
        return (
            <>
                {/* Navbar props, which will be the navbar title, and page its on */}
                <Navbar
                    title={'Service Unit Manager'}
                    page={'sum'}
                />
                {/* Holds the search bar and the add troop button with the modal
                    passes prop for the modal form*/}
                <SUMsearchAdd
                    disabled= {this.state.buttonDsbl}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    name={this.state.name}
                    troop={this.state.troop}
                    phone={this.state.phone}
                    city={this.state.city}
                    email={this.state.email}
                />
                <MainWrapper id="SUMwrapper">
                    {/* pass table info from db through props in the rows */}
                    <SUMtable onChange={this.troopInfo}>
                        
                        {this.state.troops.map(
                            troop => <SUMrow
                                key={troop.id}
                                id={troop.id}
                                name={troop.name}
                                troop={troop.troop}
                                email={troop.email}
                                phone={troop.phone}
                                city={troop.city}
                                cdl={troop.samoas}
                                gf={troop.caramel_chocolate_chip}
                                lem={troop.lemonades}
                                pbp={troop.peanut_butter_patties}
                                pbs={troop.peanut_butter_sandwich}
                                sb={troop.shortbread}
                                sm={troop.smores}
                                tal={troop.thanks_a_lot}
                                tm={troop.thin_mint}
                                // updateProfile={this.updateProfile}
                            />
                        )}
                    </SUMtable>
                </MainWrapper>
            </>

        )
    }

}

export default SUMlanding;