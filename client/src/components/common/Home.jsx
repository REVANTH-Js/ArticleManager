import { useContext, useEffect, useState } from 'react'
import { userauthorcontextobj } from '../../contexts/UserAuthorcontext'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { currentuser, setcurrentuser } = useContext(userauthorcontextobj)

  const { isSignedIn, user, isLoaded } = useUser()
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // console.log("isSignedIn :", isSignedIn)
   console.log("User isss :", user)
  // console.log("isLolded :", isLoaded)



  async function onSelectRole(e) {
    //clear error property
    setError('')
    const selectedRole = e.target.value;
    // console.log(selectedRole),
    currentuser.role = selectedRole
    console.log(currentuser.role)


    let res = null;
    try {
      if (selectedRole === 'author') {
        res = await axios.post('http://localhost:3000/author-api/author', currentuser)
        let { message, payload } = res.data;
        // console.log(message, payload)
        if (message === 'author') {
          setcurrentuser({ ...currentuser, ...payload })
          //save user to localstorage
          localStorage.setItem("currentuser",JSON.stringify(payload))
          navigate(`/author-profile/${payload.email}/articles`);
          


        } else {
          setError(message);
          setcurrentuser({});
          localStorage.removeItem("currentuser");
          return;
        }
      }
      if (selectedRole === 'user') {
        console.log(currentuser)
        res = await axios.post('http://localhost:3000/user-api/user', currentuser)
        let { message, payload } = res.data;
        console.log(message)
        if (message === 'user') {
          setcurrentuser({ ...currentuser, ...payload })
           //save user to localstorage
           localStorage.setItem("currentuser",JSON.stringify(payload))
          
      
        } else {
          setError(message);
          setcurrentuser({});
          localStorage.removeItem("currentuser");
        }
      }
    } catch (err) {
      setError(err.message);
      setcurrentuser({});
      localStorage.removeItem("currentuser");
    }
  }


  useEffect(() => {
    if (isSignedIn=== true) {
      setcurrentuser({
        ...currentuser,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        profileImageUrl: user.imageUrl,
      });
    }
  }, [isLoaded])



  useEffect(() => {
    console.log("useEffect ran", { currentuser, isSignedIn, error }); 
    if (!isSignedIn) return; 
    if (currentuser?.role === "user" && error.length === 0) {
      console.log("user")
      navigate(`/user-profile/${currentuser.email}/articles`);

     
    }
    if (currentuser?.role === "author" && error.length === 0) {
      console.log('......../author-profile/' + currentuser.email + '/articles');
      console.log('i came up to hereeee')
      navigate(`/author-profile/${currentuser.email}/articles`);

    }
  }, [currentuser, isSignedIn, error]);



  return (
    <div className='container'>
      {
        isSignedIn === false && <div>
          <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam neque consequatur nemo, enim expedita alias nobis iste obcaecati, eum dolor deserunt voluptatum odio aperiam, officiis sequi voluptates molestias atque sint?</p>
          <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam neque consequatur nemo, enim expedita alias nobis iste obcaecati, eum dolor deserunt voluptatum odio aperiam, officiis sequi voluptates molestias atque sint?</p>
          <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam neque consequatur nemo, enim expedita alias nobis iste obcaecati, eum dolor deserunt voluptatum odio aperiam, officiis sequi voluptates molestias atque sint?</p>

        </div>
      }

      {
        isSignedIn === true &&
        <div>
          <div className='d-flex justify-content-evenly align-items-center bg-info p-3'>
            <img src={user.imageUrl} width="100px" className='rounded-circle' alt="" />
            <p className="display-6">{user.firstName}</p>
            <p className="lead">{user.emailAddresses[0].emailAddress}</p>
          </div>
          <p className="lead">Select role</p>
          {error.length !== 0 && (
            <p
              className="text-danger fs-5"
              style={{ fontFamily: "sans-serif" }}
            >
              {error}
            </p>
          )}
          <div className='d-flex role-radio py-3 justify-content-center'>

            <div className="form-check me-4">
              <input type="radio" name="role" id="author" value="author" className="form-check-input" onChange={onSelectRole} />
              <label htmlFor="author" className="form-check-label">Author</label>
            </div>
            <div className="form-check">
              <input type="radio" name="role" id="user" value="user" className="form-check-input" onChange={onSelectRole} />
              <label htmlFor="user" className="form-check-label">User</label>
            </div>
          </div>
        </div>



      }
    </div>
  )
}

export default Home