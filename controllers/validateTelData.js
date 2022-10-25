


const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.Public,process.env.Secret);




function validateTelData(req,res,next){

    const details = {}
    if(req.query.network.toLowerCase() =="mtn"){
            
            details.item_code="AT099"
            details.code="BIL099"
            details.customer=req.query.customer
        
    }
    else if(req.query.network.toLowerCase() =="9mobile"){
        
        details.item_code="AT103"
        details.code="BIL103"
        details.customer=req.query.customer
    }
    else if(req.query.network.toLowerCase() =="airtel"){
        
        details.item_code="AT100"
        details.code="BIL100"
        details.customer=req.query.customer
    }
    
    else if(req.query.network.toLowerCase() =="glo"){


        details.item_code="AT102"
        details.code="BIL102"
        details.customer=req.query.customer
    }
    
    flw.Bills.validate(details)
    .then((response)=>{
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

        res.status(500).json({express:{payLoad:"error from server",status:false}}) 

    })
    



}



module.exports=validateTelData