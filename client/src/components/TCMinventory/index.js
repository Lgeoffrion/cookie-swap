import React, { Component } from "react";
import "./style.css";


function InventoryTable(props) {
    // console.log("Props: ", props);
    // console.log("props.tradeDetails: ", props.tradeDetails);
    // console.log("Trade Table of 0: ", props.tradeDetails);
   var inventoryRow = [];


   //displays cookie inventorys of the individual logged in
   if (props.tradeDetails)
    {
        inventoryRow.push(["Caramel Chocolate Chip",props.tradeDetails["caramel_chocolate_chip"],
        <form><input type="text" id="input_text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Lemonades", props.tradeDetails["lemonades"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Peanut Butter Patties", props.tradeDetails["peanut_butter_patties"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Peanute Butter Sandwich", props.tradeDetails["peanut_butter_sandwich"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Samoas", props.tradeDetails["samoas"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Shortbread", props.tradeDetails["shortbread"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Smores", props.tradeDetails["smores"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Thanks-A-Lots", props.tradeDetails["thanks_a_lot"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);

        inventoryRow.push(["Thin Mints", props.tradeDetails["thin_mint"],
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Add+</a></form>,
        <form><input type="text" class="input1" placeholder="Amount" /><a class="waves-effect waves-light btn-small">Remove-</a></form>, 
        <form><input type="text" width="10px" placeholder="Amount"/><a class="waves-effect waves-light btn-small">Place Up For Trade</a></form>]);
        
}

    // console.log("test", props);

    return (
        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th>Cookie Type</th>
                    <th>Number of Cookies</th>
                    <th>Add To Inventory</th>
                    <th>Remove From Inventory</th>
                    <th>Place Boxes Up for Trade</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? inventoryRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td> {obj[0]}</td>
                        <td> {obj[1]}</td>
                        <td class="inventoryButton"> {obj[2]}</td>
                        <td class="inventoryReduceButton"> {obj[3]}</td>
                        <td class="tradeButton"> {obj[4]}</td>
                   </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default InventoryTable



