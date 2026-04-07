
export default function Button({text}){
    return(
        <button style={{
            padding: "10px 20px",
            backgroundColor: "#eed9c4",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        }}>
            {text}
        </button>
    )
}