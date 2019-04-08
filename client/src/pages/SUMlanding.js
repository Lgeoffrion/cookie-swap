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
        // cdl:""
    };

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
    handleInputChange = event => {
        // const value = event.target.value;
        const name = event.target.name;
        const value = event.target.value;
        // const troop = event.target.troopnum;
        // const phone = event.target.phone;
        // const city = event.target.location;
        // const email = event.target.email;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.tcmCreate(this.state);
        this.setState({
            name: "",
            password: 'temporary',
            troop: "",
            phone: "",
            city: "",
            email: ""
        })
        // location.reload()
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
                    <SUMtable>
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