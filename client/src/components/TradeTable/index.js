import React, { Component } from "react";
import CookieName from "../../utils/CookieName";

// import "./style.css";
//will pass props to populate table row with real data sometime

function TradeTable(props) {
  var tradeRow = [];

  //   Several if conditionals to rewrite the name of the cookie as its brought in
  // Some attempts, like indNumber=index, to save the index number so you can then...
  //  put it into a data-value for the form to receive but... I can't figure that out.

  for (var index = 0; index < props.tradeDetails.length; index++) {
    let curCookie = props.tradeDetails[index].cookie_type;
    if (props.tradeDetails[index].id != props.currentUser) {
      let indNumber = index;
      tradeRow.push([
        props.tradeDetails[index].name,
        props.tradeDetails[index].troop,
        props.tradeDetails[index].city,
        CookieName.cookieNamer(curCookie),
        props.tradeDetails[index].cookie_amount,
        <form>
          {" "}
          <a
            data-value={[indNumber]}
            className="waves-effect waves-light btn-small"
            onClick={e => props.claimFormSubmit(e)}
          >
            Claim
          </a>
        </form>,
        <a className="waves-effect waves-light btn disabled">Status</a>
      ]);
    }
  }

  return (
    <table className="tradecol striped">
      <thead>
        <tr>
          <th>TCM Name</th>
          <th>TCM Troop</th>
          <th>Location</th>
          <th>Cookie Type</th>
          <th>Number of Cookies</th>
          <th>Claim Swap</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.tradeDetails ? (
          tradeRow.map((obj, index) => (
            <tr key={obj[0] + index}>
              <td> {obj[0]}</td>
              <td> {obj[1]}</td>
              <td> {obj[2]}</td>
              <td> {obj[3]}</td>
              <td> {obj[4]}</td>
              <td> {obj[5]}</td>
              <td> {obj[6]}</td>
              {/* <td className="tblBtn" ><div tcmid={obj[0]}cookietype={obj[3]} cookieamount={obj[4]} className="waves-effect waves-light btn" onClick={(event) => {
                            //create variables and pass info from the button into those variables
                            let userOffering = event.target.getAttribute('tcmID_giver');
                            let userRequesting = props.currentUser;
                            let cookieType = event.target.getAttribute('cookietype');
                            let cookieAmount = event.target.getAttribute('cookieamount');
                            let tradeID = event.target.getAttribute('id');
                            //place those variables into object to post to /api/offer
                            let newTrade = {
                                tradeID: tradeID,
                                userRequesting: userRequesting,
                                userOffering: userOffering,
                                cookieType: cookieType,
                                cookieAmount: cookieAmount
                            }
                        }}>Claim</div></td> */}
              {/* <td className="tblBtn"><div className="waves-effect waves-light btn" onClick={props.claimFormSubmit}>Claim</div></td> */}
              {/* <td className="tblBtn"><div className="waves-effect waves-light btn disabled">Status</div></td> */}
            </tr>
          ))
        ) : (
          <tr>
            <td />
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TradeTable;
