import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css';
import { alpha, CardContent, Fab, InputBase, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import DeletePopup from "./DeletePopup"
// import Users from './Users.json';
// import './Users.json';








const Dashboard: React.FunctionComponent<{user:any,deleteid:any,deleteMes:any}> = ({user,deleteid,deleteMes}) => {
  




  // eslint-disable-next-line no-empty-pattern
  // console.log(Users);
  const deleteFunc=(id:number)=>{
    deleteid(id)
    
  }
  let arr=[deleteFunc,user.id]
  return (

    <>
    {/*  */}
          
    
    <Card className='card'>
      <CardHeader
  
        action={
          // <IconButton onClick={()=>deleteFunc(user.id)} aria-label="settings">
            <DeletePopup  arr={arr} deleteMes={deleteMes}/>
          // </IconButton>
        }
        
       
        // title={`${user.name.title}.${user.name.first} ${user.name.last}`}
        // subheader="September 14, 2016" 
      />
      
        <CardContent>

        <img src={user.picture.large} className='image'/>
        <div className='font'>
        <Typography variant='h6' className='font'>{`${user.name.title}.${user.name.first} ${user.name.last}` }</Typography>
        <Typography variant='h6' className='font'>{user.email}</Typography>
        </div>
        </CardContent>
     
      

    </Card>
   
    </>
  );
}
export default Dashboard;


