


function buyData(req,res,next){
    
   
    const network=req.query.network
    const recipient=req.query.customer
    const plan_id=req.query.amount

    console.log(network,recipient,plan_id)
    
  
    axios.get('https://topupkonnect.com/api/buydata', {
      headers:{
        "X-API-KEY":process.env.apiKey2,
        "user_id":1014
      },
      data: {
        network,
        recipient,
        plan_id
      }
      })
      .then(function (response) {
        res.status(200).json({express:{payLoad:response.data,status:true}}) 
      })
      .catch(function (error) {

        console.log("error");
        console.log(error);
        res.status(599).json({express:{payLoad:"error from server",status:true}}) 

      })
      
}




module.exports=buyData