import React from 'react';
import Send1 from './send1';
import  './chat.css';
import Chatb from './chatb'
import Bullet from './bullet';
import Call from './call';
import axios from 'axios'
import push from 'pusher-js'

 

function Chat() {
 const [message, setmessage] = React.useState([])
 
 let pusher = new push('02c98f4bdf348259ada2', {
  cluster: 'eu'
});
 pusher.logToConsole = true;
 let channel = pusher.subscribe('contact');
 channel.bind('submit', function(data) {
   setmessage([...message,data])
  });

  const getMessage=()=>{
    axios.get("http://localhost:2020/msg")
    .then((d)=>{
       const data=d.data;
      setmessage(data)
    }).catch((err)=> console.log("ffffd"))
  }
  React.useEffect(()=>{
    getMessage();
  },[])
 return (
    <div className="chat">
      <div className="header">

            <Bullet />
            <Call />
       
      </div>
      <div className="chatb">
          {
            
            message.map((m,index)=> <Chatb key={index}
             msg={{name:m.name,msg:m.msg,
              time:m.time,send:m.send}} />)
          }
     </div>
      <Send1 />
   
    </div>
  );
}

export default Chat;
