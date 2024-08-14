import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import axios from "axios";

const Register = () => {
    const {email, setemail,password,setpassword} =useContext(AuthContext);
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            let response =  await axios.post(`http://localhost:3000/user/register`,{name,email,password,role})
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div className="signup">
            <h1>Signup</h1>
                <div className="form">
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <br />
                    <label htmlFor="">Role</label>
                    <br />
                    <select name="role" id="" value={role} onChange={(e)=>setrole(e.target.value)} >
                        <option value="">Select Role</option>
                        <option value="CREATOR">Creator</option>
                        <option value="VIEWER">Viewer</option>
                        <option value="VIEW_ALL">View All</option>
                    </select>
                    <button onClick={handleSubmit}>Register</button>
                </div>
        </div>
        </>
    )
}

export default Register