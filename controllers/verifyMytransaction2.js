const axios = require('axios');


function verifyMytransaction2(req,res,next){
    
      axios.get('https://topupkonnect.com/api/walletinfo', {
        headers:{
          "X-API-KEY":process.env.apiKey2,
          "user_id":1014
        }
        })
        .then(function (response) {

          
          if(req.query.amount<response.data.data.wallet){
            res.status(200).json({express:{payLoad:"process request",status:true}})
          }
          else{
            //res.status(200).json({express:{payLoad:"process request",status:true}})
            res.status(401).json({express:{payLoad:"cant process request ",status:false}})
          }
        })
        .catch(function (error) {
          console.log(error);
          res.status(500).json({express:{payLoad:"server error ",status:false}})

        })
}




module.exports = verifyMytransaction2;