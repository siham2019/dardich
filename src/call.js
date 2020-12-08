import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import  './chat.css';
import IconButton from '@material-ui/core/IconButton';

function Call() {
    return(
        <div className="call">
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
           <VideoCallIcon/>
        </IconButton>
         <IconButton>
           <HelpOutlineIcon/>
         </IconButton>
       
      </div>
    );
}
export default Call;