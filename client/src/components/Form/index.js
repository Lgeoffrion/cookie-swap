import React from "react";

export function Input(props) {
  return (
    <div className="row">
        <div class="input-field col s6">
             <input type="text" 
             {...props}
            //  value={props.value} onChange={props.onChange} 
            />
             <label for={props.label}>{props.label}</label>
        </div>
    </div>
  );
}

export function PasswordInput(props) {
    return (
      <div className="row">
          <div class="input-field col s6">
               <input type="password" 
               {...props}
              //  value={props.value} onChange={props.onChange} 
              />
               <label for={props.label}>{props.label}</label>
          </div>
      </div>
    );
  }



