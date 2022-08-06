import { Email } from "@mui/icons-material";
import { Button, Card, Container, TextField } from "@mui/material";
import React, { useState } from "react";
// import "./Editform.css";
import './EditemployeeForm.css';

const Editform: React.FunctionComponent<{
  // setExpanded: any;
  // userData: any;
  // data: any;
  // arr: any;
  setedit:any;
  employee:any;
}> = ({setedit,employee}) => {
  const [name, setName] = useState(employee.first_name);
  const [lastName,setLastname]=useState(employee.last_name)
  const[email,setEmail]=useState(employee.email)
  const [role,setRole]=useState(employee.roleId);
  
  const save = () => {
    // eslint-disable-next-line array-callback-return
    // data.map((e: any) => {
    //   if (e.id === userData.id) {
    //     e["login"] = name;
    //     return e;
    //   }
    // });
    // setExpanded(false);
    employee["first_name"]=name
    employee["last_name"]=lastName
    employee["email"]=email
    employee['roleId']=role
    setedit(false)
    return employee
      
  };

  return (
    <>
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
    </>
  );
};

export default Editform;