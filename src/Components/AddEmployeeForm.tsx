import * as React from 'react';
import { Email } from "@mui/icons-material";
import { Button, Card, Container, TextField } from "@mui/material";
import  { useState } from "react";


const AddEmployeeForm: React.FunctionComponent<{employee:any;setedit:any;addFunc:any}> = ({employee,setedit,addFunc}) => {
    const [name, setName] = useState(employee.first_name);
  const [lastName,setLastname]=useState(employee.last_name)
  const[email,setEmail]=useState(employee.email)
  const [role,setRole]=useState(employee.roleId);
  const arr=["https://randomuser.me/api/portraits/men/75.jpg","https://randomuser.me/api/portraits/women/1.jpg","https://randomuser.me/api/portraits/men/0.jpg","https://randomuser.me/api/portraits/men/76.jpg","https://randomuser.me/api/portraits/men/64.jpg","https://randomuser.me/api/portraits/men/75.jpg","https://randomuser.me/api/portraits/women/88.jpg","https://randomuser.me/api/portraits/women/84.jpg"]
  let n=arr.length

  const save = () => {
    // eslint-disable-next-line array-callback-return
    // data.map((e: any) => {
    //   if (e.id === userData.id) {
    //     e["login"] = name;
    //     return e;
    //   }
    // });
    // setExpanded(false);
    employee["id"]=Math.random()
    employee["first_name"]=name
    employee["last_name"]=lastName
    employee["email"]=email
    employee['roleId']=role
    employee['picture']['large']=arr[Math.round(Math.random()*n)]
    setedit(false)
    addFunc(employee)
      
  };
  return(
    <>
    <div className='add_form_data'>

   
        <Card className="edit_card">
        <Container>
          <div className="edit">
            <form>
              Name:
              <TextField
                className="textFeild"
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br></br>
              lastname:
              <TextField
                className="textFeild"
                type="text"
                variant="outlined"
                value={lastName}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
              <br></br>
              Email:
              <TextField
                className="textFeild"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                variant="outlined"
              />
              <br></br>
              Role:
              <TextField
                className="textFeild"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
                variant="outlined"
              />
              
              <br></br>
              <br></br>
              <Button
                variant="contained"
                onClick={() => {
                  save();
                }}
                className="btn"
              >
                Save
              </Button>
            </form>
          </div>
        </Container>
      </Card>
      </div>
    </>
  ) ;
};

export default AddEmployeeForm;
