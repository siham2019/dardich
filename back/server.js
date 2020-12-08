 const express = require('express')
const app = express()
const Msg=require("./model")
const cors=require("cors");
const port = process.env.PORT ||2020
const bodyp = require('body-parser').urlencoded({
  extended:true
});
const pusher=require("./sd")

app.use(cors())


app.get('/msg', (req, res) => {
         
        Msg.findMsg().then((d)=>{
          
            res.send(d);
        }).catch((err)=>{
            console.log(err);
        })
      }
    )
app.use(express.json())
app.post('/msg/new',bodyp, (req, res) => {
        
          Msg.newMsg(req.body.body).then((d)=>{
                 
                 pusher.pushEvent(d)
              }).catch((err)=>{
              console.log(err);
           })
      }
    )

app.listen(port, () => console.log(`Example app listening on port port!`))