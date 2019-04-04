import React from "react";
import "./style.css";
//will pass props to populate table row with real data sometime
function ExcessRow(){
    return(
        <tr>
            <td>11111</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className="tblBtn"><div className="waves-effect waves-light btn">Transfer</div></td>
            <td className="tblBtn"><div className="waves-effect waves-light btn">Complete</div></td>
        </tr>
    )
}

export default ExcessRow



