import React, { Component } from "react";
import "./style.css";


function InventoryTable(props) {
    // console.log("Props: ", props);
    // console.log("props.tradeDetails: ", props.tradeDetails);
    // console.log("Trade Table of 0: ", props.tradeDetails);
   var inventoryRow = [];
    console.log(props.tradeDetails);

   //displays cookie inventorys of the individual logged in
   if (props.tradeDetails)
   {
    inventoryRow.push(["Caramel Chocolate Chip",props.tradeDetails["caramel_chocolate_chip"],
    <form><input value={props.add} onChange={props.addInputChange} name="caramel_chocolate_chip" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="caramel_chocolate_chip" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["caramel_chocolate_chip"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="caramel_chocolate_chip" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["caramel_chocolate_chip"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Lemonades", props.tradeDetails["lemonades"],
    <form><input value={props.add} onChange={props.addInputChange} name="lemonades" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="lemonades" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["lemonades"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="lemonades" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["lemonades"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Peanut Butter Patties", props.tradeDetails["peanut_butter_patties"],
    <form><input value={props.add} onChange={props.addInputChange} name="peanut_butter_patties" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="peanut_butter_patties" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["peanut_butter_patties"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="peanut_butter_patties" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["peanut_butter_patties"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Peanut Butter Sandwich", props.tradeDetails["peanut_butter_sandwich"],
    <form><input value={props.add} onChange={props.addInputChange} name="peanut_butter_sandwich" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="peanut_butter_sandwich" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["peanut_butter_sandwich"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="peanut_butter_sandwich" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["peanut_butter_sandwich"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Caramel Delights", props.tradeDetails["samoas"],
    <form><input value={props.add} onChange={props.addInputChange} name="samoas" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="samoas" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["samoas"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="samoas" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["samoas"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Shortbread", props.tradeDetails["shortbread"],
    <form><input value={props.add} onChange={props.addInputChange} name="shortbread" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="shortbread" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["shortbread"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="shortbread" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["shortbread"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Smores", props.tradeDetails["smores"],
    <form><input value={props.add} onChange={props.addInputChange} name="smores" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="smores" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["smores"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="smores" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["smores"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Thanks-A-Lots", props.tradeDetails["thanks_a_lot"],
    <form><input value={props.add} onChange={props.addInputChange} name="thanks_a_lot" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="thanks_a_lot" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["thanks_a_lot"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="thanks_a_lot" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["thanks_a_lot"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);

    inventoryRow.push(["Thin Mints", props.tradeDetails["thin_mint"],
    <form><input value={props.add} onChange={props.addInputChange} name="thin_mint" type="text" id="input_text" placeholder="Amount" /><a class="waves-effect waves-light btn-small" onClick={props.addFormSubmit}>Add+</a></form>,
    <form><input value={props.sub} onChange={props.subInputChange} name="thin_mint" type="text" class="input1" placeholder="Amount" /><a currnum={props.tradeDetails["thin_mint"]} class="waves-effect waves-light btn-small" onClick={props.subFormSubmit}>Remove-</a></form>, 
    <form><input value={props.swap} onChange={props.swapInputChange} name="thin_mint" type="text" width="10px" placeholder="Amount"/><a currnum={props.tradeDetails["thin_mint"]} class="waves-effect waves-light btn-small" onClick={props.swapFormSubmit}>Place Up For Trade</a></form>]);
    
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



