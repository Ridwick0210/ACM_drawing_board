import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import './Landing.css'
import bg from "./assets/image.jpg"

export default function Landing() {
    
    const navigate = useNavigate([])

    return (
        <>
        <div className = "landing" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Welcome!!!</h1>
        <div className = "login">
        <GoogleLogin 
        onSuccess={(credentialResponse) => {
            console.log(credentialResponse )
            navigate('/drawing-board')
        }}
        onError={() => console.log("LOgin failed")}
        /></div>
        </div>
        </>
    );
}