import Card from '@mui/material/Card';
import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css';
import { CardContent, Fab, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import Employee from './Employee.json'
import DeletePopup from './DeletePopup';
import EditemployeeForm from './EditemployeeForm';





const EmployeeCard: React.FunctionComponent<{employee:any;deleteid:any;deletemes:any}> = ({employee,deleteid,deletemes}) => {
    const roles=Employee.roles
    
    const [icons,setIcons]=React.useState(false);
    const [edit,setEdit]=React.useState(false);
    const name=`${employee.first_name} ${employee.last_name}`
    const deletefunc=(id:any)=>{
      deleteid(id)
      setIcons(false)
      
  }
  let arr=[deletefunc,employee.id]
    function findroles(employee:any){

        let obj=roles.find((e)=>{
            return e.id===parseInt(employee.roleId)
        })
        return obj?.name
       
    }
    let role=findroles(employee)
    const editIcon=()=>{
      setEdit(true)
      setIcons(false)
    }
   
  return (
<>



    <div className='card_container'>


        {icons && <div className='options' >
        <Fab color="secondary" size="small" aria-label="edit" onClick={()=>{editIcon()}}>
          <EditIcon />
        </Fab>
        <Fab color="secondary" size="small" aria-label="delete">
            <DeletePopup deleteMes={deletemes} arr={arr} />
        </Fab>
        </div>}
    
    {edit===false && <Card className='card'>
        
      <CardHeader
  
        action={
          <IconButton aria-label="settings" onClick={()=>{setIcons(!icons)}}>
            <MoreVertIcon />
          </IconButton>
        }
        
      />
      <CardContent>
        < img src={employee.picture.large} className='image'/>
        {/* <Typography variant='h5'>{employee.id}</Typography> */}

        <div className='font'>
        <Typography variant='h5' className='font'>{name}</Typography>
        <Typography variant='h5' className='font'>{employee.email}</Typography>
        <Typography variant='h5' className='font'>{role}</Typography>
        </div>
      </CardContent>
      
     
    </Card>}
      {edit && <EditemployeeForm employee={employee} setedit={setEdit}/>}
    </div>
    </>
  );
};

export default EmployeeCard;
