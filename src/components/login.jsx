import { Button, Container, Input } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const {login, authdetails: {isloggedIn},userauth, setUserauth} = useContext(AuthContext)
    // const navigate = useNavigate()
    const Getlogin = async() => {
        try {
            const resp = await axios.post("http://localhost:3000/user/login"
                , {
                email: userauth.email,
                password: userauth.password
            })
            if(resp.data.token)
            {
                login(resp.data.token);
                localStorage.setItem("token",resp.data.token)
                navigate("/")
            }
            else
            {
                alert("Invalid Credentials")
            }

            
        } catch (error) {
            console.log(error);
        }
        
    }
    if(isloggedIn)
        {
            // navigate("/")
            console.log("isloggedIn",isloggedIn)
        }

    return (
        <>
        <Container maxW="10xl" >
            <h1>Login</h1>
            <Input placeholder='Enter Email' value={userauth.email}  onChange={(e)=>{setUserauth({...userauth, email: e.target.value})}}/>
            <Input placeholder='Enter Password' value={userauth.password} onChange={(e)=>{setUserauth({...userauth, password: e.target.value})}}/>
            <Button onClick={Getlogin}>Login</Button>
        </Container>
        </>
    )
}

export default Login