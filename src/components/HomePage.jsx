
export default function HomePage(){
    return(
    <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100%", 
        padding: "40px",
        textAlign: "center"
    }}>
      <h1 style={{ 
        fontSize: "48px", 
        marginBottom: "10px",
         }}>Welcome to Rent & Ride</h1>
      <p style={{ 
        fontSize: "20px", 
        color: "#555",
         }}>Book the perfect motorbike for 
        your next adventure.</p>
    </div>
    )
}