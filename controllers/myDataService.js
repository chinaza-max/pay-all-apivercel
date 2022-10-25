





function myDataService(req,res,next){
    let service=[{service:"MTN (SME) DATA",name:"MTN_SME", networkCode:"mtn_sme_data"},
    {service:"MTN (CG) DATA",name:"MTN_CG", networkCode:"mtn_gifting_data"},  
    {service:"GLO (CG) DATA",name:"GLO", networkCode:"glo_data"},
    {service:"9MOBILE (CG) DATA",name:"9MOBILE", networkCode:"9mobile_data"}, 
    {service:"AIRTEL (CG) DATA",name:"AIRTEL", networkCode:"airtel_data"}  ]

res.status(200).json({express:{payLoad:service,status:true}}) 
}   




module.exports=myDataService