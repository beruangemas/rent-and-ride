export default function UserTable() {
    return (
        <div style = {{ 
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            border: "2px solid black",
            borderRadius: "8px",
            padding: "20px",}}>
                <h3 style = {{
                    margin: " 0 0 15px 0",
                    fontSize: "24px",
                    fontWeight: "bold",
                }}> User Awaiting Approval </h3>

                {/* User details and approval buttons */}
                <table style = {{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center"
                }}>
                    <thead>
                        <tr style = {{
                            backgroundColor: "#f8f9fa",
                            borderBottom: "2px solid black",
                        }}>
                            <th style = {{
                                padding: "10px"}}> Name </th>
                            <th style = {{
                                padding: "10px"}}> Document Status</th>
                            <th style = {{
                                padding: "10px"}}> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style = {{
                                padding: "10px",
                                borderBottom: "1px solid #ccc"
                            }}> User 1</td>
                            <td style = {{
                                padding: "10px",
                                borderBottom: "1px solid #ccc"
                            }}> Uploaded</td>
                            <td style = {{
                                padding: "10px",
                                borderBottom: "1px solid #ccc"
                            }}>
                                <button style = {{
                                    padding: "5px 10px",
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px"
                                }}>Approve</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}