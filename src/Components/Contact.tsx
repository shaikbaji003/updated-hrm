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

import CancelIcon from '@mui/icons-material/Cancel';
import { OptionUnstyled } from '@mui/base';
import Tabledata from './Tabledata'
import Contact from "./Contact.json"



function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [users, setUsers] = React.useState(Contact);
  const [deleteId,setDeleteID]=React.useState(0);
  const [deletemes,setDeleteMes]=React.useState("")
  const deleteid=(id:any)=>{
    setDeleteID(id)

}
React.useEffect(()=>{
    if(deleteId!==0 && deletemes==="no"){
      setDeleteID(0)
        setDeleteMes("")
        console.log("delete is running"+deleteId+deletemes)
    }
    if(deleteId!==0 && deletemes==="yes"){
        // setFilteredData(filtedData.filter((e)=>e.id!==deleteId))
        setUsers(users.filter((e:any)=>e.id !==deleteId))
        setDeleteID(0)
        setDeleteMes("")
        console.log("delete is running"+deleteId+deletemes)
    }
},[deleteId]) 



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>city</TableCell>
            <TableCell align='center'>phone</TableCell>
            <TableCell align='center'>website</TableCell>

            <TableCell align='center'>options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
           return <Tabledata deleteid={deleteid} deletemes={setDeleteMes} contact={user}/>
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

