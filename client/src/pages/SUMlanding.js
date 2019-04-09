import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainWrapper from "../components/MainWrapper"
import SUMsearchAdd from "../components/SUMsearchAdd"
import SUMtable from "../components/SUMtable"
import API from "../utils/API";

class SUMlanding extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troops: [],
        filtTroop:[],
        name: "",
        password: 'temporary',
        troop: "",
        phone: "",
        city: "",
        email: "",
        phoneErrorMsg: "valid",
        buttonDsbl: false,
        firstCheck: true,
        sumid:"",
        search:""
    };
    // Refeshing the Location of the page
    handleReset = event => {
        document.location.href = "/SUM";
    }

    // As soon as Page hide some messages and also Do API call to display TCMs information in the Page
    componentDidMount() {
        this.troopInfo();
        var pformatalert = document.getElementById("pformatalert");
        pformatalert.style.visibility = "hidden";
        var eformatalert = document.getElementById("eformatalert");
        eformatalert.style.visibility = "hidden";
    }

    // API call for getting the TCM Details from the database
    troopInfo = () => {
        var SUM_userInfo = JSON.parse(sessionStorage.getItem('SUM_userInfo'));

        if (!SUM_userInfo) {
            document.location.href = "/";
        }
        else {
            this.setState({ userid: SUM_userInfo.user.id });
            API.getTCMS().then(res => {
                this.setState({ 
                    troops: res.data,
                    filtTroop: res.data,
                });
            });
        }

    }
    //=============Modal listerns/functions=========================================
    //error displays for if fields are not filled in the add tcm modal
    displayErr = () => {
        var talert = document.getElementById("talert"),
        calert = document.getElementById("calert"),
        palert = document.getElementById("palert"),
        lalert = document.getElementById("lalert"),
        ealert = document.getElementById("ealert");
        var pformatalert = document.getElementById("pformatalert");
        var eformatalert = document.getElementById("eformatalert");

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
            palert.style.visibility = "visible";
            pformatalert.style.visibility = "hidden";
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
            ealert.style.visibility = "visible";
            eformatalert.style.visibility = "hidden";
        }
        else
        {
            ealert.style.visibility = "hidden"
            eformatalert.style.visibility = "hidden"; 
        }
    }
    //modal input onChange handler
    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value

        this.setState({
            [name]: value
        });

        // Email Validation while typing Email
        var eformatalert = document.getElementById("eformatalert");
        var ealert = document.getElementById("ealert");
        
        if (name == "email") {
            if (!value.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})$/)) {
                ealert.style.visibility = "hidden"
                eformatalert.style.visibility = "visible";
            }
            else {
                ealert.style.visibility = "hidden"
                eformatalert.style.visibility = "hidden";
            }
        }
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
    
    // Checking Phone number format while typing the Phone number and displaying error Message
    handleInputPhoneChange = event => {
        const { name, value } = event.target;
        var pformatalert = document.getElementById("pformatalert");
        var palert = document.getElementById("palert");
        if (name == "phone" &&
            (event.key.match(/[0-9]/) || event.keyCode == 8 || event.keyCode == 189)
            && (event.keyCode == 8 || value.length < 12)) {
            var newphone = value + event.key;
            this.setState({ phone: newphone });
            if (newphone.match(/([0-9]{3})\-([0-9]{3})-([0-9]{4})$/))
            { 
                palert.style.visibility = "hidden";
                pformatalert.style.visibility = "hidden"; 
            }
            else { palert.style.visibility = "hidden";
            pformatalert.style.visibility = "visible"; } 
        }
        else {
            event.preventDefault();
        }
    };

    // Handle click on the submit button
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
    //==========Search Bar listerns/functions========================================
    //specific input change handler for the search bar
    handleSearchInputChange = event => {

        const name = event.target.name;
        const value = event.target.value

        this.setState({
            [name]: value
        });
    }
    //search handler for when search is entered
    handleSearch = (event) => {
        event.preventDefault();
        // if nothing is inputted show all 
        if (this.state.search === ""){
            console.log("empty");
            this.setState({
                filtTroop: this.state.troops
            })
        }
        //else search for either the troop number or the cookie manager
        else{
            var fTroop =  this.state.troops.filter(troop => {
                return troop.name == this.state.search || troop.troop == this.state.search;
            });
            this.setState({
                filtTroop: fTroop,
            })
        }
        window.stop();
    }
    //handler for the x in the search bar
    searchX = (event) => {
        event.preventDefault();
        this.setState({
            filtTroop: this.state.troops,
        })
    }
    //====================================================================================

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
                    id={"searchBar"}
                    disabled= {this.state.buttonDsbl}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    inputPhoneChange={this.handleInputPhoneChange}
                    name={this.state.name}
                    troop={this.state.troop}
                    phone={this.state.phone}
                    city={this.state.city}
                    email={this.state.email}
                    handleSearchInputChange={this.handleSearchInputChange}
                    handleSearch={element=>(element||{}).onsearch=this.handleSearch}
                    handleSeachClick={this.handleSearch}
                    searchX={this.searchX}
                    search={this.state.search}
                />
                <MainWrapper id="SUMwrapper">
                    {/* pass table info from db through props in the rows */}
                    <SUMtable troops={this.state.filtTroop}/>
                </MainWrapper>
            </>

        )
    }

}

export default SUMlanding;