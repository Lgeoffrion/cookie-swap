import axios from "axios";

// ***********
//defaults still need to be updated with correct info and function names
// ***********

export default {
  // Gets all saved books
  getYourInventory: function(id) {
    console.log("/api/tcms/"+ id)
    return axios.get("/api/tcms/"+ id);
  },
  getTCMS: function(){
    return axios.get("/api/tcms");
  },
  getOpenSwaps: function(){
    return axios.get("/api/trades");
  },
  validateSUMLogin : function(userInfo)
  {
    return axios.post("/api/sum/login",userInfo);
  },
  validateTCMLogin : function(userInfo)
  {
    return axios.post("/api/tcm/login",userInfo);
  },
  createTrade: function(newTrade)
  {
    return axios.put("/api/claim", newTrade)
  },
  tcmCreate : function(tcm) {
    return axios.post("/api/addtcm",tcm)
  },
  addCookies: function(cookies) {
    return axios.put("/api/add", cookies)
  },
  subCookies: function(cookies) {
    return axios.put("/api/sub", cookies)
  },
  swapCookies: function(swap) {
    return axios.post("api/offer", swap)
  },
  claimCookies: function(claim) {
    return axios.post("api/claim", claim)
  }
};
