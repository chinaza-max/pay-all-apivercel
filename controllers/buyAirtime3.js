 
 
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.Public,process.env.Secret);
const { v4 } =require('uuid');

 
 
 function buyAirtime3(req,res,next){

    const details = {
        country:"NG",
        customer: req.query.customer,
        amount: req.query.amount,
        type: "AIRTIME",
        reference: v4(),
        recurrence:false
    };

    console.log( req.query.customer,req.query.amount)

/*
    flw.Bills.create_bill(details)
        .then((response)=>{

            if(response.data){
                res.status(200).json({express:{payLoad:response.data,status:true}}) 
            }
            else{
                res.status(401).json({express:{payLoad:response.message,status:false}}) 
            }
      
        })
        .catch((err)=>{
            
            res.status(500).json({express:{payLoad:"server error",status:false}}) 
            
        })

        */
 }

 module.exports=buyAirtime3