import React, { Component } from "react";
import "./style.css";


function OpenTradeTable(props) {
   var tradeRow = [];


   //displays open trades for the individual that is logged in
for (var index in props.tradeDetails) {
    let index2 = props.tradeDetails[index].tcmID_giver - 1;

    tradeRow.push([
        props.tcmInfo[index2].name,
        props.tcmInfo[index2].city,
        props.tcmInfo[index2].troop,
        props.tradeDetails[index].cookie_type, 
        props.tradeDetails[index].cookie_amount,
        <a class="waves-effect waves-light btn"> Cancel</a>
    ]);

}


    // console.log("test", props);

    return (
        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th>Your Name</th>
                    <th>Your Location</th>
                    <th>Your Troop#</th>
                    <th>Cookie Type</th>
                    <th>Amount of Boxes</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? tradeRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td class="name"> {obj[0]}</td>
                        <td class="name"> {obj[1]}</td>
                        <td class="number"> {obj[2]}</td>
                        <td class="name"> {obj[3]}</td>
                        <td class="number"> {obj[4]}</td>
                        <td class="number"> {obj[5]}</td>
                   </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default OpenTradeTable



