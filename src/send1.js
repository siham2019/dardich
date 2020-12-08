import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import  './chat.css';
import axios from 'axios'

function Send1() {


   const goData=(e)=>{
     e.preventDefault()
     const u={
      body:{name:"dalal dido",
      msg:e.target.elements.msg.value,
      time:Date.now(),
      send:true
    }};
     axios.post("http://localhost:2020/msg/new",u)

     .catch(err=>{
       console.log(err)
     })
   }
    return(<div className="send1">
    <IconButton>
    <EmojiEmotionsIcon />
    </IconButton>

      <form onSubmit={goData} className="df">
         <input type="text" placeholder="write a message" name="msg" className="c" />
          <IconButton type="submit">
              <SendIcon />
         </IconButton>
      </form>
  
  </div>);
}
export default Send1;