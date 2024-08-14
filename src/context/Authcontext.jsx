import { createContext, useState } from "react"

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [userauth, setUserauth] = useState({
        email: "",
        password: ""
    })
    const [authdetails, setAuthdetails] = useState({isloggedIn: false, token: null})

    const login = (token) => {
        setAuthdetails({isloggedIn: true, token: token})
        setUserauth({email: "", password: ""})
    }


    const logout = () => {
        setAuthdetails({isloggedIn: false, token: null})
    }

    return(
        <AuthContext.Provider value={{authdetails, login, logout, userauth, setUserauth,email,password,setemail,setpassword}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider