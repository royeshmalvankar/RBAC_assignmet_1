import { Button } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"
import Logout from "./logout"
import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"


const Navbar = () => {
    const {authdetails} = useContext(AuthContext)
    const {isloggedIn} = authdetails
    return (
        <div>
         {!isloggedIn && <ChakraLink  as={ReactRouterLink} to={"/login"}><Button>Login</Button></ChakraLink>}
         {!isloggedIn && <ChakraLink  as={ReactRouterLink} to={"/register"}><Button>Register</Button></ChakraLink>}
         {isloggedIn && <ChakraLink  as={ReactRouterLink} to={"/logout"}><Logout/></ChakraLink>}
        </div>
    )
}

export default Navbar