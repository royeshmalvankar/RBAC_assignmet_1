import { useEffect, useState } from "react";
import axios from "axios"
import { AuthContext } from "../context/Authcontext"
import { useContext } from "react"


const Library = () => {
    const [books,setBooks] = useState([])
    const {authdetails} = useContext(AuthContext)
    const {token} = authdetails

    useEffect(() => {
        getBooks()
    },[])
   
    const getBooks = async() => {
         
    try {
        const resp = await axios.get("http://localhost:3000/book/view",{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(resp.data.books);
        setBooks(resp.data.books)
    } catch (error) {
        console.log(error);   
    }
    }
    return (
        <div>
            <h1>Library</h1>
            <ul>
                {
                    books.map((book,index)=>(
                        <ul key={index} style={{textAlign:"left"}}>{index+1}.{book.title}
                            <li style={{color:"red",textAlign:"right"}}>{book.author}</li>
                            <li  style={{color:"red",textAlign:"right"}}>{book.dateCreated}</li>
                            <li  style={{color:"red",textAlign:"right"}}>{book.createdBy}</li>
                        </ul>

                    ))
                }
            </ul>

        </div>
    )
}

export default Library