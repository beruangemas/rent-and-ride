import Card from '../components/shared/Card'
import UserTable from '../components/admin/UserTable'
import Button from '../components/Button'

export default function AdminPage(){
    
    return(
        <>
        {/* Main container for the admin dashboard */}
        
    <div style={{ 
          padding: "40px", 
          display: "flex", 
          flexDirection: "column", 
          flex: 1 }}>
        <h1> Rent & Ride Admin </h1>
    
        {/*The admin cards*/}
        <div style = {{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "30px",
        }}>
            <Card title="Pending Approvals" value="5" />
            <Card title="Active Rentals" value= "3" />
            <Card title="Total Fleet Size" value="4" />
        </div>

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
    </>
    )
}