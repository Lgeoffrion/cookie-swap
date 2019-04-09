import axios from "axios";

// ***********
//defaults still need to be updated with correct info and function names
// ***********

export default {
  // get TCMS user information with the matching Id
  getYourInventory: function(id) {
    return axios.get("/api/tcms/" + id);
  },
  // get all open trades with your ID from the Trades table
  myOpenTrades: function(id) {
    return axios.get("/api/yourOpenTrades/"+ id);
  },
  // get all outgoing trades with your ID from the Trades table
  myOutgoingTrades: function(id) {
    return axios.get("/api/outgoingtrades/"+ id);
  },
  // get all incoming trades with your ID from the Trades table
  myIncomingTrades: function(id) {
    return axios.get("/api/incomingtrades/"+ id);
  },
  // get all users 
  getTCMS: function(){
    return axios.get("/api/tcms");
  },
  // get All Open Trades from the Trade
  getOpenSwaps: function() {
    return axios.get("/api/trades");
  },
  // send in Sum Email id and Password to check for Login validation
  validateSUMLogin: function(userInfo) {
    return axios.post("/api/sum/login", userInfo);
  },
  // send in TCM Email id and Password to check for Login validation
  validateTCMLogin: function(userInfo) {
    return axios.post("/api/tcm/login", userInfo);
  },
  // Once request is made, create Trade in trade table
  createTrade: function(newTrade) {
    return axios.put("/api/claim", newTrade);
  },
  // Add a new TCM to the TCM table
  tcmCreate : function(tcm) {
    return axios.post("/api/addtcm",tcm)
  },
  // Add a new TCM to the TCM table
  tcmProfileUpdate : function(id,tcm) {
    return axios.post(" /api/update_tcm/" + id,tcm);
  },
  tcmProfilePwdUpdate : function(id,pwds) {
    return axios.post(" /api/update_pwd_tcm/"+ id, pwds );
  },
  // Add the number of cookies in the inventory
  addCookies: function(cookies) {
    return axios.put("/api/add", cookies);
  },
  // Remove number of Cookies in the Inventory
  subCookies: function(cookies) {
    return axios.put("/api/sub", cookies);
  },
  // Once Request is made to swap cookies, take data from TCM table and update Trade table
  swapCookies: function(swap) {
    return axios.post("api/offer", swap);
  },
  // Once request is made, create Trade in trade table
  claimCookies: function(claim) {
    // let prom = axios.post("api/claim", claim)

    return axios.post("api/claim", claim);
  },
  // Cancel a cookie trade you are involved in
  cancelSwap: function(cancel) {
    return axios.put("api/cancel", cancel)
  },
  // Confirm a cookie trade you are involved in completes
  completeSwap: function(complete) {
    return axios.put("api/complete", complete)
  }
};
