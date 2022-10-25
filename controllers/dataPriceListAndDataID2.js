const axios = require('axios');


function dataPriceListAndDataID2(req,res,next){
    let config = {'Authorization': 'MY-API-KEY'};
    axios.get('https://topupkonnect.com/api/getplan?network=01', {
        headers:{
            "X-API-KEY":process.env.apiKey2
        }
      })
      .then(function (response) {

            let dataPriceListAndDataIDV=response.data.data
          

           dataPriceListAndDataIDV=dataPriceListAndDataIDV.filter(check);

            function check(obj) {

                    if(obj.package_id=="210"){
                        obj.dataType="Gifting"
                        obj.validity="30 days"
                        obj.price=115
                        obj.network ="MTN"
                    }
                    else if(obj.package_id=="155"){
                        obj.dataType="Gifting"
                        obj.validity="30 days"
                        obj.price=230
                        obj.network ="MTN"
                    }
                    else if(obj.package_id=="156"){
                        obj.dataType="Gifting"
                        obj.validity="30 days"
                        obj.price=460
                        obj.network ="MTN"
                    }
                    else if(obj.package_id=="157"){
                        obj.dataType="Gifting"
                        obj.validity="30 days"
                        obj.price=690
                        obj.network ="MTN"
                    }
                    else if(obj.package_id=="159"){
                        obj.dataType="Gifting"
                        obj.validity="30 days"
                        obj.price=1150
                        obj.network ="MTN"
                    }

                return  obj.package_name.startsWith("CORPORATE");
            }
            dataPriceListAndDataIDV=dataPriceListAndDataIDV.reverse()
     

           res.status(200).json({express:{payLoad:dataPriceListAndDataIDV,status:true}}) 
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({express:{payLoad:error,status:false}}) 
      })             	
    
}  

module.exports = dataPriceListAndDataID2;



