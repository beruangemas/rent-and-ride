function Sidebar({isAdminView}){
    return(
        <div
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

            <p style={{ cursor: "pointer",
                marginTop: "50px",
            }}> Dashboard</p>

            {/* Conditional rendering: Show different links for Admin vs User */}
            {isAdminView ? (
                <>
            {/* Navigation Links (Dummy Links for now) */}
            
            <p style={{ cursor: "pointer",
                marginTop: "20px",
            }}> Manage Bookings</p>
            <p style={{ cursor: "pointer",
                marginTop: "20px",
            }}> Manage Fleets</p>
            
            </> ) : (
                <>
                {/* User View Links */}
                <p style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                }}> Bookings</p>

                <p style={{
                    cursor: "pointer",
                    paddingLeft: "15px",
                    fontSize: "14px",
                    color: "#ccc",
                    margin: "5px 0",
                }}> - Active bookings</p>

                <p style={{
                    cursor: "pointer",
                    paddingLeft: "15px",
                    fontSize: "14px",
                    color: "#ccc",
                    margin: "5px 0",
                }}> - History</p>

                <p style={{
                    cursor: "pointer",
                    marginTop: "10px",
                }}> Refer a Friend</p>

                
                </>
            )
        }
                <>
                <p style={{
                    cursor: "pointer",
                    marginTop: "10px",
                }}> Help / Support </p>
                </>

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