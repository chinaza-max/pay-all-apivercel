const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY  );

function verifyMytransaction3(req,res,next){
    

  const fetchBal = async () => {

    try {

      const payload = {
          "currency": "NGN",
      }
      const response = await flw.Misc.bal_currency(payload)

      if(req.query.amount<response.data.available_balance){
        res.status(200).json({express:{payLoad:"process request",status:true}})
      }
      else{
        //res.status(200).json({express:{payLoad:"process request",status:true}})

        res.status(401).json({express:{payLoad:"cant process request ",status:false}})
      }




  } catch (error) {
      console.log(error)
      res.status(500).json({express:{payLoad:"server error",status:false}})

  }

}
fetchBal();

}




module.exports = verifyMytransaction3;