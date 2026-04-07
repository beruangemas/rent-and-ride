
import './App.css'
import UserTable from './components/admin/UserTable'
import Boxes from './components/admin/Boxes'
import SideBar from './components/admin/SideBar'
import NavBar from './components/admin/NavBar'
import Button from './components/Button'
import HomePage from './components/HomePage'
import { useState } from 'react'

export default function App (){
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar open/close state
  const [currentPage, setCurrentPage] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    // main container for the dashboard
    <div style = {{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      
    }}>
    
    {/*NavBar component*/}
    <NavBar
      toggleSidebar={toggleSidebar}
      isAdminView={true}
      isUserView={false}
    />

    <div style={{
      flex: 1,
      display: "flex",
    }}>

    {/* Only show sidebar if on the Admin page*/}
    {currentPage === "admin" && isSidebarOpen && <SideBar />}
    
    {/*Main content area*/}
    <div style = {{ 
      padding: `40px`, 
      fontFamily: `sans-serif`,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}>
        
        {/*Page Router */}
      {currentPage === "home" ? (
        <HomePage />
      ) : (
        <div style={{ 
          padding: "40px", 
          display: "flex", 
          flexDirection: "column", 
          flex: 1 }}>
        <h1> Rent & Ride Admin </h1>
    
    {/*Boxes component*/}
    <Boxes/>

    {/*User table component*/}
    <UserTable/>

    <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "auto",

      }}>
        <Button text="Add New Bike"/>
        <Button text="Log Maintenance"/>
      </div>
    </div>
      )}
    
      {/*Main content area*/}

      {/*Temporary Dev Buttons to switch between Home and Admin views*/}
      <div style={{
        position: "fixed",
        bottom: "10px",
        left: "10px",
        display: "flex",
        gap: "10px",
      }}>
        <button onClick = {() => setCurrentPage("home")} > View Homepage</button>
        <button onClick = {() => setCurrentPage("admin")} > View Admin</button>
      </div>
      
    </div>
    
    </div>
    <div style={{
      height: "50px",
      backgroundColor: "#50c878",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "gold",
      textShadow: "1px 1px 2px black",
      fontSize: "18px",
    }}>
      &copy; 2024 Rent & Ride. All rights reserved.
      </div>
    </div>
  )
}