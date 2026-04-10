import Card from '../components/shared/Card'

export default function UserPage(){

    return(
        <div style ={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "20px",
        }}>
            {/*Notification banner */}
            <div style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#e2e3e5",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "bold",
            }}> Notification Banner
            </div>
            
            {/* Welcome message */}
            <div style={{
                width: "100%",
                padding: "20px",
                backgroundColor: "#d1e7dd",
                borderRadius: "8px",
                textAlign: "center",
            }}>
                <h2 style ={{
                    fontWeight: "bold",
                }}> Welcome to Ride and Rent, User</h2>
                <p style = {{
                    fontSize: "15px",
                    fontStyle: "italic",
                }}> Book the perfect motorbike for your next adventure!
                </p>
            </div>

            {/* the two big category boxes */}
            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
            }}>
                <Card 
                    title="Sports Bikes"
                    image="🏍️"
                    height = "300px"
                    bgColor = "#cce5ff"
                    border = "none"
                    onClick ={ () => alert("View Sports Bikes")}
                    />
                <Card
                    title = "Moped"
                    image = "🛵"
                    height = "300px"
                    bgColor = "#cce5ff"
                    border = "none"
                    onClick = {() => alert("View Moped")}
                />
            </div>
        </div>
    )
}