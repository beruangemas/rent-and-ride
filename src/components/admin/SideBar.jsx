function Sidebar(){
    return(
        <div className = "sidebar"
        style = {{
            width: "200px",
            
            backgroundColor: "#ccffcc",
            color: "black",
            display: "flex",
            flexDirection: "column",

        }}>
            <h2 style = {{
                color: "#efbf04",
                textShadow: "1px 1px 2px #000000",
            }}> Rent & Ride</h2>
            <hr style = {{
                borderColor: "#000000",
                width: "100%"}}/>

            {/* Navigation Links (Dummy Links for now) */}
            <p style={{ cursor: "pointer",
                marginTop: "50px",
            }}> Dashboard</p>
            <p style={{ cursor: "pointer",
                marginTop: "50px",
            }}> Manage Bookings</p>
            <p style={{ cursor: "pointer",
                marginTop: "50px",
            }}> Manage Fleets</p>

            <div style={{ marginTop: "auto"}}>
                <hr style = {{
                    borderColor: "#000000",
                    width: "100%"
                }}/>
                
                <p style={{ cursor: "pointer"}}> Settings</p>
                <p style={{ cursor: "pointer",
                color: "black"}}> Log Out</p>
            </div>
        </div>
    )
}

export default Sidebar;