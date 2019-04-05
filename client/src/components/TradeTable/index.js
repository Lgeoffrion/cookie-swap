import React, { Component } from "react";
import API from "../../utils/API";
// import "./style.css";
//will pass props to populate table row with real data sometime




function TradeTable(props) {
    console.log(props.tradeDetails);

   var tradeRow = [];

    for (var index in props.tradeDetails) {
        if (props.tradeDetails[index].id != props.currentUser) {
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "caramel_chocolate_chip", props.tradeDetails[index].caramel_chocolate_chip]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "lemonades", props.tradeDetails[index].lemonades]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "peanut_butter_patties", props.tradeDetails[index].peanut_butter_patties]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "peanut_butter_sandwich", props.tradeDetails[index].peanut_butter_sandwich]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "samoas", props.tradeDetails[index].samoas]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "shortbread", props.tradeDetails[index].shortbread]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "smores", props.tradeDetails[index].smores]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "thanks_a_lot", props.tradeDetails[index].thanks_a_lot]);
            tradeRow.push([props.tradeDetails[index].id, props.tradeDetails[index].name, props.tradeDetails[index].city, "thin_mint", props.tradeDetails[index].thin_mint]);
        }
    }
    // console.log(propsArray);

    return (
        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th>TCM Id</th>
                    <th>TCM Name</th>
                    <th>Location</th>
                    <th>Cookie Type</th>
                    <th>Number of Cookies</th>
                    <th>Make Request</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? tradeRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td> {obj[0]}</td>
                        <td> {obj[1]}</td>
                        <td> {obj[2]}</td>
                        <td> {obj[3]}</td>
                        <td> {obj[4]}</td>
                        <td className="tblBtn" ><div tcmid={obj[0]}cookietype={obj[3]} cookieamount={obj[4]} className="waves-effect waves-light btn" onClick={(event) => {
                            //create variables and pass info from the button into those variables
                            let userOffering = event.target.getAttribute('tcmid');
                            let userRequesting = props.currentUser;
                            let cookieType = event.target.getAttribute('cookietype');
                            let cookieAmount = event.target.getAttribute('cookieamount');
                            //place those variables into object to post to /api/offer
                            let newTrade = {
                                userRequesting: userRequesting,
                                userOffering: userOffering,
                                cookieType: cookieType,
                                cookieAmount: cookieAmount
                            }
                            //post the info we have recieved from the button to route /api/offer
                            API.createTrade(newTrade);
                        }}>Request</div></td>
                        <td className="tblBtn"><div className="waves-effect waves-light btn disabled">Status</div></td>
                    </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default TradeTable



