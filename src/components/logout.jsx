import { useContext } from "react";
import { AuthContext } from "../context/Authcontext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "@chakra-ui/react"

const Logout = () => {

    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const Getlogout = async() => {
        try {
            await axios.get("http://localhost:3000/user/logout",{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            localStorage.removeItem("token")
            logout();
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Button onClick={Getlogout}>Logout</Button>
        </>
    )

}

export default Logout