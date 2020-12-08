import React from 'react';
import  './chat.css';
function Chatb(props) {
  return  (
    <div>
      
      {
        props.msg.send?
        (<div className="m">
            <h6>{props.msg.name}</h6>
            <p className="recieved">{props.msg.msg}</p>
            <p className="r">{props.msg.time}</p>
        </div>):
        ( <div className="m">
              <h6 className="s">{props.msg.name}</h6>
              <p  className="sended">{props.msg.msg}</p>
              <p className="r s">{props.msg.time}</p>
          </div>)
      }
     
     
  {/*   <div className="m">
      <h6>dalila dida</h6>
     <p className="recieved">hello world</p>
     <p className="r">18:00</p>
    </div> */}

  {/*    
    <div className="m">
      <h6 className="s">yassmin hadj</h6>
     <p  className="sended">hello ssjsjsjsj</p>
     <p className="r s">19:00</p>
    </div> */}
  
  </div>
   
 );
}
export default Chatb;