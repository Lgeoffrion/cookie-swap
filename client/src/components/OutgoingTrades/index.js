import React, { Component } from "react";
import CookieName from "../../utils/CookieName";
import "./style.css";


function TradeTable2(props) {
   var tradeRow = [];
   const tradeDetails = props.tradeDetails;
   const tcmInfo = props.tcmInfo;

   //displays trades for the individual that is logged in
for (let index in props.tradeDetails) {
  
    let index2 = tradeDetails[index].tcmID_giver - 1;
    let index3 = tradeDetails[index].tcmID_taker - 1;
    let curCookie = tradeDetails[index].cookie_type;

    tradeRow.push([
        tcmInfo[index2].name,
        tcmInfo[index2].city,
        tcmInfo[index2].troop,
        tcmInfo[index3].name,
        tcmInfo[index3].city,
        tcmInfo[index3].troop,
        CookieName.cookieNamer(curCookie), 
        tradeDetails[index].cookie_amount,
        <a data-value={[tradeDetails[index].id, index2, index3]} className="waves-effect waves-light btn" onClick={props.cancelFormSubmit}> Cancel</a>,
    ])
}

    return (

        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th className="tablebody">Cookie <br/>Giver</th>
                    <th className="tablebody">Location</th>
                    <th className="tablebody">Giver <br/>Troop <br/>Number</th>
                    <th className="tablebody">Cookie <br/>Reciever</th>
                    <th className="tablebody">Location</th>
                    <th className="tablebody">Reciever <br/>Troop <br/>Number</th>
                    <th className="tablebody">Cookie <br/>Type</th>
                    <th className="tablebody">Amount <br/>of Boxes</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? tradeRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td className="namesize"> {obj[0]}</td>
                        <td className="namesize"> {obj[1]}</td>
                        <td className="numbersize"> {obj[2]}</td>
                        <td className="namesize"> {obj[3]}</td>
                        <td className="namesize"> {obj[4]}</td>
                        <td className="numbersize"> {obj[5]}</td>
                        <td className="namesize"> {obj[6]}</td>
                        <td className="numbersize"> {obj[7]}</td>
                        <td className="buttonsize"> {obj[8]}</td>
                   </tr>
                   
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
        
    );
}

export default TradeTable2


