
import { createContext,useEffect,useState } from 'react'
export const userauthorcontextobj = createContext({
  currentuser: {},
  setcurrentuser: () => {}
});



function UserAuthorcontext({children}) {
    let [currentuser,setcurrentuser]=useState({
firstName:'',
lastName:'',
email:'',
profileImageUrl:'' ,
role:''
})

useEffect(() => {
  const userInStorage = localStorage.getItem('currentuser');
  if (userInStorage) {
    setcurrentuser(JSON.parse(userInStorage))
  }
}, [])


  return (
    <div>
        <userauthorcontextobj.Provider value={{currentuser,setcurrentuser}}>
            {children}
        </userauthorcontextobj.Provider>

     
      
    </div>
  )
}

export default UserAuthorcontext
