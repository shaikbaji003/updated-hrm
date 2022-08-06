import * as React from 'react';
import Usersdata from "./Usersdata.json"


const Users: React.FunctionComponent<{}> = () => {
    const [userData,setUserData]=React.useState([Usersdata.usersdata])
    // console.log(Usersdata.usersdata)
  return (
    <div>
        <h1>helloo</h1>
        {/* {
            userData.map((user:any)=>{
                return <h1>{user.id}</h1>
            })
        }
         */}
    </div>
  )
};

export default Users;
