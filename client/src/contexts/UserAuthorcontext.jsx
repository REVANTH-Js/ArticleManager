
import { createContext,useState } from 'react'
export const userauthorcontextobj = createContext();



function UserAuthorcontext({children}) {
    let [currentuser,setcurrentuser]=useState({
firstName:'',
lastName:'',
email:'',
role:'',
profileImageUrl:'' })
  return (
    <div>
        <userauthorcontextobj.Provider value={{currentuser,setcurrentuser}}>
            {children}
        </userauthorcontextobj.Provider>

     
      
    </div>
  )
}

export default UserAuthorcontext
