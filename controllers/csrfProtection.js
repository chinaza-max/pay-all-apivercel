const Cookie = require('cookie')
const Tokens = require('csrf')


let tokens=new Tokens()

function csrfProtection(req,res,next){

    let cookies=Cookie.parse(req.headers.cookie || '');
    let secret=cookies.csrfSecret
    let token=req.body.csrftoken||req.query.csrftoken

  //  console.log("receive")
   //console.log(cookies)
 // console.log(token)
 /*  console.log("receive")
*/

    if(Object.keys(cookies).length == 0 && cookies.constructor === Object||cookies==""){
        return  res.status(403).json({express:{payLoad:'unauthorize access',status:false}})
    }
    else{

        if (tokens.verify(secret, token)) {
            next(); 
        }       
        else{
            res.status(403).json({express:{payLoad:'invalid token!',status:false}})
        }
    }
    
}

module.exports=csrfProtection;