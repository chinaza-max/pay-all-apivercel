const axios = require('axios');


function getBalanceAdmin(req,res,next){



    axios.get('https://client.paytev.com/api/v1/balance', {
        params: {
        "api-token":process.env.apiKey,
        "format":"json"
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

