const axios = require('axios');


function getBalanceAdmin(req,res,next){

  console.log("response")


    axios.get('https://topupkonnect.com/api/walletinfo', {
      headers:{
        "X-API-KEY":process.env.apiKey2,
        "user_id":1014
      }
      })
      .then(function (response) {

        res.status(200).json({express:{payLoad:response.data,status:true}}) 
      })
      .catch(function (error) {
        console.log(error);
      })


}   

module.exports = getBalanceAdmin;

