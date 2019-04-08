import React, { Component } from "react";
import "./style.css";


function TradeTable(props) {
    console.log("props.tcmInfo: ", props.tcmInfo);
    console.log("props.tradeDetails: ", props.tradeDetails);
    // console.log("Trade Table of 0: ", props.tradeDetails);
   var tradeRow = [];


   //displays trades for the individual that is logged in
for (var index in props.tradeDetails) {
    // console.log("TCM Props Name: ", props.tcmInfo[index].name);
    let index2 = props.tradeDetails[index].tcmID_giver - 1;
    let index3 = props.tradeDetails[index].tcmID_taker - 1;
    console.log("what is it: ", index2);
    tradeRow.push([

        props.tcmInfo[index2].name,
        props.tcmInfo[index2].city,
        props.tcmInfo[index2].troop,
   
        props.tcmInfo[index3].name,
        props.tcmInfo[index3].city,
        props.tcmInfo[index3].troop,
        props.tradeDetails[index].cookie_type, 
        props.tradeDetails[index].cookie_amount,
        <a class="waves-effect waves-light btn"> Cancel</a>,
        <a class="waves-effect waves-light btn">Complete Trade</a>
    ])
}


console.log("traderow: ",tradeRow );

    return (

        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th class="tablebody">Cookie <br/>Giver</th>
                    <th class="tablebody">Location</th>
                    <th class="tablebody">Giver <br/>Troop <br/>Number</th>
                    <th class="tablebody">Cookie <br/>Reciever</th>
                    <th class="tablebody">Location</th>
                    <th class="tablebody">Reciever <br/>Troop <br/>Number</th>
                    <th class="tablebody">Cookie <br/>Type</th>
                    <th class="tablebody">Amount <br/>of Boxes</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? tradeRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td class="namesize"> {obj[0]}</td>
                        <td class="namesize"> {obj[1]}</td>
                        <td class="numbersize"> {obj[2]}</td>
                        <td class="namesize"> {obj[3]}</td>
                        <td class="namesize"> {obj[4]}</td>
                        <td class="numbersize"> {obj[5]}</td>
                        <td class="namesize"> {obj[6]}</td>
                        <td class="numbersize"> {obj[7]}</td>
                        <td class="buttonsize"> {obj[8]}</td>
                        <td class="buttonsize"> {obj[9]}</td>
                   </tr>
                   
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
        
    );
}

export default TradeTable



