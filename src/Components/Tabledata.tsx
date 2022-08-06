import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Fab, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { OptionUnstyled } from '@mui/base';
import EditIcon from '@mui/icons-material/Edit';
import DeletePopup from './DeletePopup';


const Tabledata: React.FunctionComponent<{contact:any;deletemes:any;deleteid:any}> = ({contact,deletemes,deleteid}) => {
    const [options,setOptions]=React.useState(false)
    const [editopt,setEditOpt]=React.useState(false)
    // const [deletemes,setDeleteMes]=React.useState("")
    const [name,setname]=React.useState(contact.name)
    const [email,setEmail]=React.useState(contact.email)
    const[address,setAddress]=React.useState(contact.address.city)
    const [phone,setPhoen]=React.useState(contact.phone)
    const [website,setWebsite]=React.useState(contact.website)
    const deleteFunc=(id:number)=>{
      deleteid(id)
      setOptions(false)
      console.log("delete function is running from table data "+ id )
    }
    let arr=[deleteFunc,contact.id]
    const savedata=()=>{
      contact["name"]=name
      contact["email"]=email
      contact["address"]["city"]=address
      contact["phone"]=phone
      contact["website"]=website
      setOptions(false)
        setEditOpt(false)
    }
  return(
    <>
         {editopt===false && <TableRow
        key={contact.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {editopt ===false && <TableCell component='th' scope='row'>
          {contact.name}
         
        </TableCell>}
        {/* {editopt &&   <input type='text' value={contact.name  }></input> } */}
        <TableCell align='center'>{contact.email}</TableCell>
        <TableCell align='center'>{contact.address.city}</TableCell>
        <TableCell align='center'>{contact.phone}</TableCell>
        <TableCell align='center'>{contact.website}</TableCell>
        <TableCell align='center'>
        {options ===false && <IconButton aria-label="settings" onClick={()=>{setOptions(true)}} >
            <MoreVertIcon />
          </IconButton>}
        {options && <div><IconButton aria-label="settings" onClick={()=>{setOptions(false)}}>
          <CancelIcon/>
          
          </IconButton>
          {editopt===false && <div className='options' >
            <Fab color="secondary" size="small" aria-label="edit" onClick={()=>{setEditOpt(true)}} >
              <EditIcon />
            </Fab>
            
            <DeletePopup deleteMes={deletemes} arr={arr} />
            
            </div>}
           
          </div>}
        </TableCell>
      </TableRow>}
      {editopt &&
      <TableRow>
        <TableCell>
          <TextField value={name} onChange={(e)=>{setname(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={phone} onChange={(e)=>{setPhoen(e.target.value)}}></TextField>
        </TableCell>
        <TableCell>
          <TextField value={website} onChange={(e)=>{setWebsite(e.target.value)}}></TextField>
        </TableCell>  
        <button onClick={()=>{savedata()}}>save</button>
      </TableRow>
    
      }
      </>
  ) ;
};

export default Tabledata;
