import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './sidebar.css';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import IconButton from '@material-ui/core/IconButton';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="Topsidebar">
         
        <div className="avatar"></div>
         <h3>yassmin hadj</h3>
         <IconButton>
           <SettingsRoundedIcon/>
         </IconButton>

       </div>
       <div className="search">
         <SearchIcon/> 
        <input type="text"  placeholder="search"/>
       </div>
       <div className="rooms">
          <div className="msg">

            <div className="avatar2"></div>
             <div className="fg">
                <h5>dalal karima</h5>
                <p>i'm not okay</p>
             </div>
        

          </div>
          <div className="msg a">

           <div className="avatar2"></div>
            <div className="fg">
                <h5>dalal dida</h5>
                <p>i'm not okay</p>
            </div>
           

          </div>
          <div className="msg">

          <div className="avatar2"></div>
            <div className="fg">
              <h5>dalal dida</h5>
              <p>i'm not okay</p>
            </div>
            </div>
            <div className="msg">

           <div className="avatar2"></div>
            <div className="fg">
               <h5>dalal dida</h5>
               <p>i'm not okay</p>
             </div>
            </div>
            <div className="msg">

            <div className="avatar2"></div>
             <div className="fg">
                <h5>dalal karima</h5>
                <p>i'm not okay</p>
             </div>
        

          </div>
          <div className="msg">

            <div className="avatar2"></div>
             <div className="fg">
                <h5>dalal karima</h5>
                <p>i'm not okay</p>
             </div>
        

          </div>
          <div className="msg">

            <div className="avatar2"></div>
             <div className="fg">
                <h5>dalal karima</h5>
                <p>i'm not okay</p>
             </div>
        

          </div>
       </div>
       
      
    </div>

  );
}

export default Sidebar;
