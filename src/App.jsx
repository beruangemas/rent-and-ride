
import './App.css'
import SideBar from './components/shared/SideBar'
import NavBar from './components/shared/NavBar'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
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
      isAdminView={currentPage === "admin"}
      isUserView={currentPage === "user"}
    />

    <div style={{
      flex: 1,
      display: "flex",
    }}>

    {/* Only show sidebar if on the Admin page*/}
    {currentPage === "admin" && isSidebarOpen && <SideBar isAdminView={true} isUserView={false} />}
    {currentPage === "user" && isSidebarOpen && <SideBar isAdminView={false} isUserView={true} />}

    <div style = {{ 
      padding: `40px`, 
      fontFamily: `sans-serif`,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}>
        
        {/* New Page Router */}
      {currentPage === "home" ? (
        <HomePage />
      ) : currentPage === "admin" ? (
        <AdminPage />
      ) : (
        <UserPage />
      )}

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
        <button onClick = {() => setCurrentPage("user")} > View User</button>
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