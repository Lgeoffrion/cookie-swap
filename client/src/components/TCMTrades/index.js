import React, { Component } from "react";
import "./style.css";


function TradeTable(props) {
    console.log("TCM Props Name: ", props.tcmInfo);
    console.log("props.tradeDetails: ", props.tradeDetails);
    // console.log("Trade Table of 0: ", props.tradeDetails);
   var tradeRow = [];


   //displays trades for the individual that is logged in
for (var index in props.tradeDetails) {
    // console.log("TCM Props Name: ", props.tcmInfo[index].name);
    tradeRow.push([
         // props.tradeDetails[index].tcmID_giver, 
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].name,
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].city,
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].troop,
        // props.tradeDetails[index].tcmID_taker, 
        props.tcmInfo[props.tradeDetails[index].tcmID_taker].name,
        props.tcmInfo[props.tradeDetails[index].tcmID_taker].city,
        props.tcmInfo[props.tradeDetails[index].tcmID_taker].troop,
        props.tradeDetails[index].cookie_type, 
        props.tradeDetails[index].cookie_amount
    ]);

}


    // console.log("test", props);

    return (
        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th>Cookie Giver</th>
                    <th>Location</th>
                    <th>Giver Troop#</th>
                    <th>Cookie Reciever</th>
                    <th>Location</th>
                    <th>Reciever Troop#</th>
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
                        <td class="name"> {obj[4]}</td>
                        <td class="number"> {obj[5]}</td>
                        <td class="name"> {obj[6]}</td>
                        <td class="number"> {obj[7]}</td>
        
                   </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default TradeTable



