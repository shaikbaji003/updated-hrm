// import Dashboard from '@mui/icons-material/Dashboard';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import DeletePopup from './Components/DeletePopup';
import Employee from './Components/Employee';
import Jobs from './Components/Jobs';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Users from './Components/Users';
import Temp from './Components/Temp';

function App() {
  return (
    <div className="App">
  
  <Navbar />
  {/* <Users/> */}
  <Temp/>

  {/* <Dashboard /> */}
  {/* <DeletePopup /> */}
  {/* <Jobs />
  <Employee />
  <Contact /> */}
  {/* <Employee/> */}
  <Contact/>
  <Employee/> 
  <Footer />
    </div>
  );
}

export default App;
