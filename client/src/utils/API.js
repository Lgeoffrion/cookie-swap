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
  validateSUMLogin : function(userInfo)
  {
    return axios.post("/api/sum/login",userInfo);
  },
  validateTCMLogin : function(userInfo)
  {
    return axios.post("/api/tcm/login",userInfo);
  },
  tcmCreate : function(tcm) {
    return axios.post("/api/addtcm",tcm)
  }
};
