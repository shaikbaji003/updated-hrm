import * as React from 'react';
import Dashboard from './Dashboard';
import SearchAppBar from './Searchbar';
import Usersdata from './Usersdata.json'


const Temp: React.FunctionComponent<{}> = (props) => {
    const [userData,setUserData]=React.useState(Usersdata.usersdata)
    const [filtedData,setFilteredData]=React.useState(Usersdata.usersdata);
    const [deleteId,setDeleteID]=React.useState(0);
    const [deletemes,setDeleteMes]=React.useState("")
    const [search,setSearch]=React.useState('')

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
            setFilteredData(filtedData.filter((e)=>e.id!==deleteId))
            setUserData(userData.filter((e)=>e.id!==deleteId))
            setDeleteID(0)
            setDeleteMes("")
            console.log("delete is running"+deleteId+deletemes)
        }
    },[deleteId]) 
    React.useEffect(()=>{
        setFilteredData(userData.filter((e)=>{
            let name=e.name.first+e.name.last
            return (name.toLowerCase().includes(search.toLowerCase()))
        }))
    },[search])
   


  return (
    <div className='list'>
    <SearchAppBar setSearch={setSearch}/>
    <div className='flex'>
    {
        filtedData.map((user)=>{
            return <Dashboard user={user} deleteid={deleteid} deleteMes={setDeleteMes}/>
        })
    }
    </div> 
    </div>
  );
  
};

export default Temp;
