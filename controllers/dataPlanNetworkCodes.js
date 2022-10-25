

function dataPlanNetworkCodes(req,res,next){

    let dataPlanNetworkCodes=[{networkCode:"mtn_gifting_data",networkName:"MTN Gifting"},
                              {networkCode:"mtn_sme_data",networkName:"MTN SME"},
                              {networkCode:"glo_data",networkName:"GLO"},
                              {networkCode:"9mobile_data",networkName:"9mobile"},
                              {networkCode:"airtel_data",networkName:"Airtel"}]	
        
    res.status(200).json({express:{payLoad:dataPlanNetworkCodes,status:true}}) 

}   

module.exports = dataPlanNetworkCodes;

