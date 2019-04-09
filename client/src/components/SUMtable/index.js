import React from "react";
import "./style.css";
//recieves props from SUMlanding state and generates rows
function SUMtable(props){
    return (
        <div className="col s10 offset-s1" id="SUMtable">
            <table className="striped">
                <thead>
                    <tr>
                        <th>TROOP #</th>
                        <th>COOKIE MANAGER</th>
                        <th>LOCATION</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th></th>
                        <th>CDL</th>
                        <th>GF</th>
                        <th>LEM</th>
                        <th>PBP</th>
                        <th>PBS</th>
                        <th>SB</th>
                        <th>SM</th>
                        <th>TAL</th>
                        <th>TM</th>
                    </tr>
                </thead>

                <tbody>

                    {props.troops.map(troop => (
                    <tr key={troop.id}>
                        <td>{troop.troop}</td>
                        <td>{troop.name}</td>
                        <td>{troop.city}</td>
                        <td>{troop.email}</td>
                        <td>{troop.phone}</td>
                        <td className="grey lighten-1" id="invSpace"></td>
                        <td>{troop.samoas}</td>
                        <td>{troop.caramel_chocolate_chip}</td>
                        <td>{troop.lemonades}</td>
                        <td>{troop.peanut_butter_patties}</td>
                        <td>{troop.peanut_butter_sandwich}</td>
                        <td>{troop.shortbread}</td>
                        <td>{troop.smores}</td>
                        <td>{troop.thanks_a_lot}</td>
                        <td>{troop.thin_mint}</td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default SUMtable



