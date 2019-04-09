import React, { Component } from "react";
import "./style.css";
import CookieName from "../../utils/CookieName";


function OpenTradeTable(props) {

   var tradeRow = [];
   const tradeDetails = props.tradeDetails;
   const tcmInfo = props.tcmInfo;


   //displays open trades for the individual that is logged in
for (let index in tradeDetails) {
   let index2 = tradeDetails[index].tcmID_giver - 1;
   let curCookie = tradeDetails[index].cookie_type;

    tradeRow.push([
        tcmInfo[index2].name,
        tcmInfo[index2].city,
        tcmInfo[index2].troop,
        CookieName.cookieNamer(curCookie), 
        tradeDetails[index].cookie_amount,
        <a data-value={[tradeDetails[index].id, index2]} className="waves-effect waves-light btn" onClick={props.cancelFormSubmit}> Cancel</a>
    ]);

}


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
                        <td className="name"> {obj[0]}</td>
                        <td className="name"> {obj[1]}</td>
                        <td className="number"> {obj[2]}</td>
                        <td className="name"> {obj[3]}</td>
                        <td className="number"> {obj[4]}</td>
                        <td className="number"> {obj[5]}</td>
                   </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default OpenTradeTable



