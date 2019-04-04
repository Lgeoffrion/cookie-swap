import axios from "axios";

// ***********
//defaults still need to be updated with correct info and function names
// ***********

export default {
  // Gets all saved books
  getInventory: function() {
    return axios.get("/api/tcms");
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
  }

};
