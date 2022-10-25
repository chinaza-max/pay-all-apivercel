
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.Public,process.env.Secret);

/** const details = {
        item_code:req.query.item_code,
        code: req.query.code,
        customer:req.query.customer,
    }; */


function validateNumber3(req,res,next){


    const details = {
        item_code:req.query.item_code,
        code: req.query.code,
        customer:req.query.customer,
    };


    flw.Bills.validate(details)
    .then((response)=>{


      //  console.log(response.data)

        if(response.data){
            if(req.query.network.toLowerCase() ==response.data.name.toLowerCase()){
                res.status(200).json({express:{payLoad:response.data,status:true}}) 
            }
            else{
                res.status(401).json({express:{payLoad:"input  mismatch  check your number",status:false}}) 
            }
    
        }
        else{
            res.status(401).json({express:{payLoad:"your data is not correct ",status:false}}) 
        }
        
    })
    .catch((e)=>{
        console.log(e)
        res.status(500).json({express:{payLoad:"server error",status:false}}) 

    })

}



module.exports=validateNumber3