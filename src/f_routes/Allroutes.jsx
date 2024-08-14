import {Route,Routes} from "react-router-dom"
import { Container } from "@chakra-ui/react"
import Login from "../components/login"
import Register from "../components/register"
import NotFound from "../components/NotFound"
import Library from "../components/Library"
import Navbar from "../components/Navbar"
import PrivateRoute from "../privateroute/Privateroute"

const Allroutes = () => {

    return ( 
        <Container>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<PrivateRoute><Library /></PrivateRoute>} />
            {/* <Route path="/labtest" element={<PrivateRoute><LabTest/></PrivateRoute>} /> */}
            </Routes>

        </Container>
    )
}

export default Allroutes