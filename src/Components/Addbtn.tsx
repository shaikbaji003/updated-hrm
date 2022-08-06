import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';

const Addbtn: React.FunctionComponent<{addbtn:any}> = ({addbtn}) => {
  return(
    <div className='add_icon'>
        <IconButton color="secondary" aria-label="add an alarm" onClick={()=>{addbtn(true)}}>
        <PersonAddAlt1SharpIcon />
        </IconButton>

    </div>
  ) ;
};

export default Addbtn;
