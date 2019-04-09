import React, { Component } from "react";
import CookieName from "../../utils/CookieName";
import "./style.css";


function TradeTable2(props) {
   var tradeRow = [];

   

   //displays trades for the individual that is logged in
for (var index in props.tradeDetails) {
  
    let index2 = props.tradeDetails[index].tcmID_giver - 1;
    let index3 = props.tradeDetails[index].tcmID_taker - 1;
    let curCookie = props.tradeDetails[index].cookie_type;

    tradeRow.push([
        props.tcmInfo[index2].name,
        props.tcmInfo[index2].city,
        props.tcmInfo[index2].troop,
        props.tcmInfo[index3].name,
        props.tcmInfo[index3].city,
        props.tcmInfo[index3].troop,
        CookieName.cookieNamer(curCookie), 
        props.tradeDetails[index].cookie_amount,
        <a data-value={[props.tradeDetails[index].id, index2, index3]} class="waves-effect waves-light btn" onClick={props.cancelFormSubmit}> Cancel</a>,
    ])
}

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
                   </tr>
                   
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
        
    );
}

export default TradeTable2


