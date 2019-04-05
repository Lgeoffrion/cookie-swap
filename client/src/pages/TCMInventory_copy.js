// import React, { Component } from "react";
// import LoginNavbar from "../components/LoginNavbar"
// import MainWrapper from "../components/MainWrapper"
// import Sidebar from "../components/Sidebar"
// // import ExcessCookieBody from "../components/ExcessCookieBody"
// import SideBtn from "../components/SideBtn"
// import ExcessTable from "../components/ExcessTable"
// import ExcessRow from "../components/ExcessRow"

// class TCMInventory extends Component {
//     // Take from database and pass to state as troopInv
//     state = {
//         troopInv:{}
//     };
    
//     render(){
//         var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
//         console.log("usernfo",userInfo);
//         return (
//             <>
//                 <div className='row'>
//                     <div className="col col l7 push-l4 s12">
//                     {/* <div>{userInfo}</div> */}

//                     </div></div>
//                     {/* Navbar passes a prop which will be the navbar title */}
//                     <LoginNavbar 
//                         title={'Excess Cookie Inventory'}
//                         ahref={'/'}
//                         page={'tcm'} 
//                     />
//                     {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
//                     tabs from the Navbar then swap which wrapper is seen based off this id*/}
//                     <MainWrapper id="excessinventory">
//                         {/* Sidebar which will take SideBtn as children */}
//                         <Sidebar>
//                             {/* pass SideBtn with name and link props to populate sidebar */}
//                             <SideBtn 
//                             name="button"
//                             />
//                         </Sidebar>
//                         {/* Table for excess cookie data, will pull from database and 
//                         pass props through state to populate table
//                         Data will be passed through state and props to here, could use separate 
//                         component for table and thead then use props.children to fill with map
//                         of the rows */}
//                         <ExcessTable>
//                             <ExcessRow/>
//                         </ExcessTable>
//                     </MainWrapper>
//                     {/* Wrapper for invetory of logged in troop, passes a prop which ids the wrapper 
//                     tabs from the Navbar then swap which wrapper is seen based off this id */}
//                     <MainWrapper id="yourinventory">
//                         {/* Sidebar which will take SideBtn as children */}
//                         <Sidebar>
//                             {/* pass SideBtn with name and link props to populate sidebar */}
//                             <SideBtn onClick={() => {
//                                 //onclick for when you click ??this button code goes here
//                             }}
//                             name="button"
//                             />
//                         </Sidebar>
//                     </MainWrapper>
//             </>

//         )
//     }

// }

// export default TCMInventory