const express=require("express")
const router=express.Router();
const csrfProtection=require("../controllers/csrfProtection")
const buyData=require("../controllers/buyData")
const buyData2=require("../controllers/buyData2")
const buyAirtime3=require("../controllers/buyAirtime3")
const sendEmail=require("../controllers/handleEmail")
const Tokens = require('csrf')
const Cookie = require('cookie')

let tokens=new Tokens()


router.get('/api/buyData',buyData,(req, res)=>{})
router.get('/api2/buyData2',buyData2,(req, res)=>{})
router.get('/api3/buyAirtime3',buyAirtime3,(req, res)=>{})
router.get('/api/sendEmailA',sendEmail,(req, res)=>{})


//this route protect all form submission 
router.get('/form2',function (req, res) {

    let secret = tokens.secretSync()
    let token = tokens.create(secret)

    res.setHeader('Set-Cookie', Cookie.serialize('csrfSecret',secret, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
    })); 

    return  res.status(200).json({express:{payLoad:token,status:true}})    
   
})




module.exports=router;