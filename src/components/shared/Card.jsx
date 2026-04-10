export default function Card({ title, value, image, height = "150px", bgColor = "#ffffff",
  border = "2px solid black", onClick}){
    return (
       <div 
         onClick = {onClick}
         style= {{
          flex: "1",
          minWidth: "200px",
          height: height,
          backgroundColor: bgColor,
          border: border,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          cursor: onClick ? "pointer" : "default", //show a pointer if it's clickable
         }}>

          {/*Conditional image: For the Customer category */}
          {image && <div style = {{
            fontSize: "40px",
            marginBottom: "10px",
          }}> {image} </div>}

          {/* The title: Pending approval or Sportsbikes */}
          < div style={{
            fontSize: value ? "16px" : "24px", 
            fontWeight: "bold",
            color: "#555",
            textAlign: "center",
          }}>
            {title}
          </div>

          {/* Conditional value: for the Admin Stats */}
          {value && (
            <div style ={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1a1a1a",
              marginTop: "10px",
            }}>
              {value}
            </div>
          )}
         </div>
    );
}