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
  myOpenTrades: function(id) {
    console.log("/api/yourOpenTrades/"+ id)
    return axios.get("/api/yourOpenTrades/"+ id);
  },
  myOutgoingTrades: function(id) {
    console.log("/api/outgoingtrades/"+ id)
    return axios.get("/api/outgoingtrades/"+ id);
  },
  myIncomingTrades: function(id) {
    console.log("/api/incomingtrades/"+ id)
    return axios.get("/api/incomingtrades/"+ id);
  },
  getTCMS: function(){
    return axios.get("/api/tcms");
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
    return axios.post("/api/offer", newTrade)
  },
  tcmCreate : function(tcm) {
    return axios.post("/api/addtcm",tcm)
  }
};
