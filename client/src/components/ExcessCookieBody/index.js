import React from "react";
import "./style.css";

function ExcessCookieBody(){
    return(
        // Data will be passed through state and props to here, could 
        // use separate component for table and thead then use
        //  props.children to fill with map of the rows

        //The table here is just dummy filler for now
        <div className="col s8" id="excessBody">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ExcessCookieBody