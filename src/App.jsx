
import './App.css'
import UserTable from './components/admin/UserTable'
import Boxes from './components/admin/Boxes'
import SideBar from './components/admin/SideBar'
import NavBar from './components/admin/NavBar'
import Button from './components/admin/Button'


export default function App (){
  return (
    // main container for the dashboard
    <div style = {{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      
    }}>
    
    {/*NavBar component*/}
    <NavBar/>

    <div style={{
      flex: 1,
      display: "flex",
    }}>

    {/*Sidebar component*/}
    <SideBar/>
    
    {/*Main content area*/}
    <div style = {{ 
      padding: `40px`, 
      fontFamily: `sans-serif`,
      display: "flex",
      flexDirection: "column",
      }}>
  
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
      {/*Main content area*/}
      
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