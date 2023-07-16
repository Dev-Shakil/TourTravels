import nodemailer from "nodemailer";
export default async function contact(req, res) {
    const {fname,lname,email,phone,text} = req.body;
    const data = {
        fname,lname,email,phone,text
    }
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        sucure:true,
        auth:{
            user:"contact.sallusoft@gmail.com",
            pass:"megbfhhfrwxmsezi",

        }
    });
    try{
        const mail= await transporter.sendMail({
            from: email,
            to:"contact.sallusoft@gmail.com",
            subject:`Contact Form submission from ${fname}`,
            html:`
                <p>Name:${fname+lname}</p>
                <p>Email:${email}</p>
                <p>Phone:${phone}</p>
                <p>text:${text}</p>
                 
            `
        });
        console.log("Message was sent:", mail.messageId, email   );
        return res.status(200).json({message:"success"})

    }catch(e){
        console.log(e);
        res.status(500).json({
            message:"Could Not Send The Email"
        })
    }
}