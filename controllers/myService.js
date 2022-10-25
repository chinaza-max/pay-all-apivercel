

function myService(req,res,next){

    let service=[{service:"Buy data",name:"data"},
                {service:"Buy airtime",name:"airtime"},  
                {service:"Pay electricity bill",name:"electricity"},
                {service:"Buy cable subscription",name:"cable subscription"}  ]
            
    res.status(200).json({express:{payLoad:service,status:true}}) 

}   



module.exports=myService