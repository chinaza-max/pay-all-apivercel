const axios = require('axios');



function getAirTimedata(req,res,next){


    axios.get('https://api.flutterwave.com/v3/bill-categories?airtime=1', {
        'headers': {
            'Authorization': `Bearer ${process.env.Secret}`,
            'Content-Type': 'application/json'
          }
      })
      .then(function (response) {
        
            let airTimeData=[]
            let airTimeDataObj={}
            let array=response.data.data
            //console.log(array)


            for(let i=0; i<array.length; i++){
              if(!airTimeDataObj[array[i]["biller_code"]]){
                airTimeDataObj[array[i]["biller_code"]]=true
                airTimeData.push(array[i])
              }

              if(i==array.length-1){
               
                airTimeData=airTimeData.filter(check);

                function check(obj) {

                    if(obj.biller_code=="BIL099"){
                      obj.name=obj.short_name
                    }

                    if(obj.name=="MTN NIGERIA"){
                      obj.network="MTN"
                    }
                    else if(obj.name=="AIRTEL NIGERIA"){
                      obj.network="AIRTEL"
                    }
                    else if(obj.name=="GLO NIGERIA"){
                      obj.network="GLO"
                    }
                    else if(obj.name=="9MOBILE NIGERIA"){
                      obj.network="9MOBILE"
                    }
                    return  obj.name.includes("NIGERIA");
                }

                res.status(200).json({express:{payLoad:airTimeData,status:true}}) 
              }
            }



      })
      .catch(function (error) {
        console.log(error);
      })


}


module.exports=getAirTimedata