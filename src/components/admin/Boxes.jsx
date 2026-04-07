export default function Boxes(){
    return (
        <div style = {{display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center", alignItems: "center" }}>
    {/*Pending approval wireframe box*/}
    <div style = {{
      border: `2px solid black`,
      borderRadius: `8px`,
      padding: `20px`,
      width: `250px`,
      backgroundColor: `#f8f9fa`
    }}>
    
    <h3 style={{ margin: `0 0 10px 0`}}>Pending Approval</h3>
    <p style= {{ fontSize: `32px`, fontWeight: `bold`, margin: `0`}}> 5 </p>
    </div>

    {/*Active rentals wireframe box*/}
    <div style = {{
      border: `2px solid black`,
      borderRadius: `8px`,
      padding: `20px`,
      width: `250px`,
      backgroundColor: `#f8f9fa`,
    }}>
    <h3 style={{ margin: `0 0 10px 0`}}>Active Rentals</h3>
    <p style = {{ fontSize: `32px`, fontWeight: `bold`, margin: `0`}}> 3</p>
    </div>

    {/*Total fleet size wireframe box*/}
    <div style = {{
      border: `2px solid black`,
      borderRadius: `8px`,
      padding: `20px`,
      width: `250px`,
      backgroundColor: `#f8f9fa`
    }}>
    <h3 style={{ margin: `0 0 10px 0`}}>Total Fleet Size</h3>
    <p style = {{ fontSize: `32px`, fontWeight: `bold`, margin: `0`}}> 4 </p>
    </div>

    </div>
    )
}