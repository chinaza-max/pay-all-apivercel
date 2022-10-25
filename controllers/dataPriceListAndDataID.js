

function dataPriceListAndDataID(req,res,next){

    const myNetwork=req.query.network
    const myDataType=req.query.dataType

    let dataPriceListAndDataIDV=[
                                {dataID:"E500MB",Network:"9mobile",Size:"500MB",dataType:"Gifting",validity:"1 month",price:450},
                                {dataID:"E1.5GB",Network:"9mobile",Size:"1.5GB",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E2GB",Network:"9mobile",Size:"2.0GB",dataType:"Gifting",validity:"1 month",price:1100},
                                {dataID:"E3GB",Network:"9mobile",Size:"3.0GB",dataType:"Gifting",validity:"1 month",price:1400},
                                {dataID:"E4.5GB",Network:"9mobile",Size:"4.5GB",dataType:"Gifting",validity:"1 month",price:1850},

                                {dataID:"M500MBS",Network:"MTN",Size:"500MB",dataType:"SME",validity:"1 month",price:130},
                                {dataID:"M1GBS",Network:"MTN",Size:"1.0GB",dataType:"SME",validity:"1 month",price:224},
                                {dataID:"M3GBS",Network:"MTN",Size:"2.0GB",dataType:"SME",validity:"1 month",price:448},
                                {dataID:"M3GBS",Network:"MTN",Size:"3.0GB",dataType:"SME",validity:"1 month",price:672},
                                {dataID:"M5GBS",Network:"MTN",Size:"5.0GB",dataType:"SME",validity:"1 month",price:1120},
                                {dataID:"M10GBS",Network:"MTN",Size:"10.0GB",dataType:"SME",validity:"1 month",price:2240},

                                {dataID:"G1.34GB",Network:"GLO",Size:"1.34GB",dataType:"Gifting",validity:"1 month",price:450},
                                {dataID:"G2.9GB",Network:"GLO",Size:"2.9GB",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"G4.1GB",Network:"GLO",Size:"4.1GB",dataType:"Gifting",validity:"1 month",price:1300},
                                {dataID:"G5.8GB",Network:"GLO",Size:"5.8GB",dataType:"Gifting",validity:"1 month",price:1700},
                                {dataID:"G7.7GB",Network:"GLO",Size:"7.7GB",dataType:"Gifting",validity:"1 month",price:2200},
                                {dataID:"G10.0GB",Network:"GLO",Size:"10.0GB",dataType:"Gifting",validity:"1 month",price:2600},
                                {dataID:"G20.0GB",Network:"GLO",Size:"20.0GB",dataType:"Gifting",validity:"1 month",price:4500},
                                
                                {dataID:"M500MBG",Network:"MTN",Size:"500.0MB",dataType:"Gifting",validity:"1 month",price:140},
                                {dataID:"M1GBG",Network:"MTN",Size:"1.0GB",dataType:"Gifting",validity:"1 month",price:250},
                                {dataID:"M2GBG",Network:"MTN",Size:"2.0GB",dataType:"Gifting",validity:"1 month",price:500},
                                {dataID:"M3GBG",Network:"MTN",Size:"3.0GB",dataType:"Gifting",validity:"1 month",price:750},
                                {dataID:"M5GBG",Network:"MTN",Size:"5.0GB",dataType:"Gifting",validity:"1 month",price:1270},
                                {dataID:"M10GBG",Network:"MTN",Size:"10.0GB",dataType:"Gifting",validity:"1 month",price:2500},
                                {dataID:"M15GBG",Network:"MTN",Size:"15.0GB",dataType:"Gifting",validity:"1 month",price:3750},
                                {dataID:"M40GBG",Network:"MTN",Size:"40.0GB",dataType:"Gifting",validity:"1 month",price:10000},
                                {dataID:"M75GBG",Network:"MTN",Size:"75.0GB",dataType:"Gifting",validity:"1 month",price:18750},
                                {dataID:"M100GBG",Network:"MTN",Size:"100.0GB",dataType:"Gifting",validity:"1 month",price:25000},

                                {dataID:"A100MB",Network:"AIRTEL",Size:"100MB",dataType:"Gifting",validity:"7 days",price:70},
                                {dataID:"A300MB",Network:"AIRTEL",Size:"300MB",dataType:"Gifting",validity:"7 days",price:130},
                                {dataID:"A500MB",Network:"AIRTEL",Size:"500MB",dataType:"Gifting",validity:"7 days",price:200},
                                {dataID:"A1GB",Network:"AIRTEL",Size:"1GB",dataType:"Gifting",validity:"30 days",price:300},
                                {dataID:"A2GB",Network:"AIRTEL",Size:"2GB",dataType:"Gifting",validity:"30 days",price:600},
                                {dataID:"A5GB",Network:"AIRTEL",Size:"5GB",dataType:"Gifting",validity:"30 days",price:1500}]	
        

        
    dataPriceListAndDataIDV=dataPriceListAndDataIDV.filter(check);

    function check(obj) {
        return obj.Network.toLowerCase() == myNetwork.toLowerCase() && obj.dataType.toLowerCase() == myDataType.toLowerCase();
    }

                        
        res.status(200).json({express:{payLoad:dataPriceListAndDataIDV,status:true}}) 

}  

module.exports = dataPriceListAndDataID;



/*

{dataID:"M500MBG",Network:"MTN",Size:"500.0MB",dataType:"Gifting",validity:"1 month",price:140},
                                {dataID:"M1GBG",Network:"MTN",Size:"1.0GB",dataType:"Gifting",validity:"1 month",price:250},
                                {dataID:"M2GBG",Network:"MTN",Size:"2.0GB",dataType:"Gifting",validity:"1 month",price:500},
                                {dataID:"M3GBG",Network:"MTN",Size:"3.0GB",dataType:"Gifting",validity:"1 month",price:750},
                                {dataID:"M5GBG",Network:"MTN",Size:"5.0GB",dataType:"Gifting",validity:"1 month",price:1270},
                                {dataID:"M10GBG",Network:"MTN",Size:"10.0GB",dataType:"Gifting",validity:"1 month",price:2500},
                                {dataID:"M15GBG",Network:"MTN",Size:"15.0GB",dataType:"Gifting",validity:"1 month",price:3750},
                                {dataID:"M40GBG",Network:"MTN",Size:"40.0GB",dataType:"Gifting",validity:"1 month",price:10000},
                                {dataID:"M75GBG",Network:"MTN",Size:"75.0GB",dataType:"Gifting",validity:"1 month",price:18750},
                                {dataID:"M100GBG",Network:"MTN",Size:"100.0GB",dataType:"Gifting",validity:"1 month",price:25000},*/