import  { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk,useUser } from '@clerk/clerk-react'
// import { userauthorcontextobj } from '../../contexts/UserAuthorcontext'
import { userauthorcontextobj } from '../../contexts/UserAuthorcontext'

function Header() {
const {signOut} =useClerk()
const {isSignedIn,user,isLoaded}=useUser();
 const {currentuser,setcurrentuser} = useContext(userauthorcontextobj)
const navigate=useNavigate()

async  function handlesignout(){
    await signOut()
    localStorage.removeItem("currentuser");
    setcurrentuser(null)
    navigate('/')
}

  return (
    <div>
   <nav className='header d-flex justify-content-between'> 
    <div className='d-flex justify-content-centre'>
<Link to='/'> Logo </Link>
    </div>
   <ul className='text-white d-flex justify-content-centre list-unstyled header-links'>

{
    !isSignedIn?
    <>
    <li> 
            <Link to=''>Home</Link>
        </li>
        <li> 
            <Link to='signin'>Signin</Link>
        </li>
        <li> 
            <Link to='signup'>SignUp</Link>
        </li>
    </> :
    <div className='user-button d-flex gap:40px'>
        <div style={{position:'relative'}}>
            <img src={user.imageUrl} width='40px' className='rounded-circle mt-2 me-4' alt=""/>
            {/* <p className='role' style={{position:'absolute', top:"0px", right:"-20px"}}>{currentuser.role}</p> */}
        <p className='mb-0 user-name text-black'>{user.firstName}</p>
        </div>



        <div className='p-10'>

        <button className='btn btn-danger mt-2 me-2' onClick={handlesignout}>Signout </button>
        </div>
    </div>
}



    
    </ul>
   </nav>
    </div>
  )
}

export default Header
