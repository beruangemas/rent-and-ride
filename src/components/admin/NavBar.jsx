import {Menu} from 'lucide-react';

export default function NavBar({toggleSidebar, isAdminView, isUserView}) {
    return(
        <div style={{
            height: "100px",
            backgroundColor: "#50c878",
            borderBottom: "2px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            gap: "10px",
        }}>
            {/* Left Side */}
            {/* Conditional rendering: If isAdminView is true, show the hamburger
             menu for mobile view */}
            <div >
                {isAdminView ? (
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                }}>
                    <Menu color = "gold" size={32}/>
                </button>
                ) : (
                    <h2 style = {{
                        color: "gold",
                        textShadow: "1px 1px 2px black",
                    }}>
                        Rent & Ride
                    </h2>
                )}
            </div>

                {/* Right Side */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}>
                {/* Conditional rendering: If isUserView or isAdminView is true,
                show the date/time and profile icon */}
                {(isUserView || isAdminView) ? (
                    <>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end"
                    }}>
                    <p style={{
                        margin: "0",
                        fontWeight: "bold",
                    }}> Date </p>
                    <p style={{
                        marginTop: "0",
                        fontWeight: "bold",
                    }}> Time </p>
                    </div> 

            {/* Dummy profile icon */}
            <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
            }}>
                A
            </div>
            </> ) : (
                <Button text="Login/Signup"/>
            )}
                
            </div>
        </div>
    )
}