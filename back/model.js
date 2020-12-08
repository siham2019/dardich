const mongoose = require("mongoose");

const DB_URL = 'mongodb://localhost:27017/chat2';

const MsgSchema = mongoose.Schema({
    name: String,
    msg: String,
    time: Number,
    send: Boolean,
 
});

const Msg = mongoose.model("msg", MsgSchema);

exports.newMsg = (data)=>{
     return new Promise((res,rej)=>{
        mongoose.connect(DB_URL).then(()=>{
            let y= new Msg({
                ...data,
                send:true
            })
           return y.save()
           
        }).then(()=>{ mongoose.disconnect(); res(data)}).catch(err=>{
           rej(err);
        })
     })
}

exports.findMsg = async()=>{
    try {
        await mongoose.connect(DB_URL)
        let m=await Msg.find({})
        mongoose.disconnect()
         return m;
    } catch (error) {
        return error;
    }
}
