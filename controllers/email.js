require('dotenv').config(); 
const nodemailer=require('nodemailer');


let auth = {
    type: 'oauth2',
    user: 'chinazaogbonna10000@gmail.com',
    clientId: '5915305382-ajjjt5nkov98je8310rjbum7t8348lqr.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04QIV68VkGNjyCgYIARAAGAQSNwF-L9IrSB7JG3aPEnLdanVXFBjjEHwx2cuF0PReq8Jz6UpVoYwQQ7CpIm_dI929REUym2JZeC8',
};

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:auth
});

const sendMail=(email,subject,text,body,cb)=>{


    console.log(body)
    let mailOptions='';

         mailOptions={
            from:"chinazaogbonna10000@gmail.com",
            to:email,
            subject,
            text,
            html:`      <div style="width: 90%; margin: 0 auto;">
                                 <h5 style="text-align: center;">Pay all</h5>

                            <div style="text-align: center;">----------------------------------------- </div>
                                <h5 style="text-align: center;">tel: ${body.tel}</h5>
                                <h5 style="text-align: center;">flw_ref: ${body.flw_ref}</h5>
                                <h5 style="text-align: center;">transaction_id: ${body.transaction_id}</h5>
                                <h5 style="text-align: center;">billDetails: ${body.billDetails}</h5>
                                <h5 style="text-align: center;">amont: ${body.amont}</h5>
                                <h5 style="text-align: center;">email: ${body.email}</h5>

                            <div style="text-align: center;">----------------------------------------- </div>
                        
                            <p style="text-align: center;">your are welcome </p>
                        </div>`,
       
        }
    
    transporter.sendMail(mailOptions,function(err,data){

            if(err){
                console.log(err)
              return  cb(err,null)
            }
            else{
                return  cb(null,data)
            }
    });
    
}

module.exports=sendMail;


