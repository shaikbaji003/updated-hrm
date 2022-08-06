import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css';
import { CardContent, Fab, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Employee from './Employee.json'
import EmployeeCard from './EmployeeCard';
import SearchAppBar from './Searchbar';
import Addbtn from './Addbtn';
import EditemployeeForm from './EditemployeeForm';
import AddEmployeeForm from './AddEmployeeForm';

// import Usersdata from './Usersdata.json'




export default function RecipeReviewCard() {
  // eslint-disable-next-line no-empty-pattern

  
const[employeedata, setEmployeedata]=React.useState(Employee.employees);
const [filtedData,setFilteredData]=React.useState(Employee.employees);
    const [deleteId,setDeleteID]=React.useState(0);
    const [deletemes,setDeleteMes]=React.useState("")
    const [search,setSearch]=React.useState('')
    const [addEmployee,setAddEmployee]=React.useState(false)
     const deleteid=(id:any)=>{
        setDeleteID(id)

    }
const new_Employee= {"id":1,"first_name":"","last_name":"","email":"","gender":"","roleId":"","picture": {
  "large": "https://randomuser.me/api/portraits/men/76.jpg",
 
}}
console.log(employeedata)
React.useEffect(()=>{
  if(deleteId!==0 && deletemes==="yes"){
      setFilteredData(filtedData.filter((e:any)=>e.id!==deleteId))
      setEmployeedata(employeedata.filter((e)=>e.id!==deleteId))
      setDeleteID(0)
      setDeleteMes("")
      console.log("delete is running"+deleteId+deletemes)
  }
},[deleteId]) 
React.useEffect(()=>{
  setFilteredData(employeedata.filter((e)=>{
      let name=e.first_name+e.last_name
      return (name.toLowerCase().includes(search.toLowerCase()))
  }))
},[search])

  const add_new_employee=(emp:any)=>{
    setEmployeedata([...employeedata,emp])
    setFilteredData([...filtedData,emp])
  }

  return (

    <>


   
    <div className='list'> 
        <div >

        
        <SearchAppBar setSearch={setSearch}/>
        <Addbtn addbtn={setAddEmployee} />
        </div>
      {addEmployee===false && <div className='flex'>
        {
          filtedData.map((employee:any)=>{
          return <EmployeeCard deleteid={deleteid} deletemes={setDeleteMes} employee={employee}/>
        })

        } 
        </div>}
        {addEmployee && <AddEmployeeForm employee={new_Employee} addFunc={add_new_employee} setedit={setAddEmployee}/>}
    </div>
    </>
    
  );
}
