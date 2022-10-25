
const sendMail=require("./email.js")



function handleEmail(req,res,next){


    console.log("try to send email")
    let obj={
        tel:req.query.tel,
        flw_ref:req.query.flw_ref,
        transaction_id:req.query.transaction_id,
        billDetails:req.query.billDetails,
        amont:req.query.amont,
        email:req.query.email,
    }
    let email="customerservicepayall@gmail.com"
    let subject=req.query.serviceType
    let body=obj

    sendMail(email,subject,"payAll",body,(err,data)=>{
        if(err){
            return  res.status(500).json({express:{payLoad:"encounter error sending email",status:false}})
        }
        else{
            con.release();
            return  res.status(200).json({express:{payLoad:"your qoute has been sent you will get a response shortly via email or check your for more detail",status:true}})
        }
      })
}

module.exports=handleEmail