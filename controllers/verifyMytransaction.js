const axios = require('axios');


function VerifyMytransaction(req,res,next){
    
    axios.get('https://client.paytev.com/api/v1/balance', {
        params: {
        "api-token":process.env.apiKey,
        "format":"json"
        }
      })
      .then(function (response) {

        if(req.query.amount<response.data.balance){
            res.status(200).json({express:{payLoad:"process request",status:true}})
        }
        else{
            res.status(401).json({express:{payLoad:"cant process request ",status:false}})
        }
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({express:{payLoad:"server error",status:false}})

      })
}




module.exports = VerifyMytransaction;