import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function Userprofile() {
  return (
  
       <div className='user-profile'>

<ul className='d-flex justify-content-around list-unstyled fs-3'>
  <li className='nav-item'>
    <Link to='articles' className="nav-link"> Articles</Link>
  </li>
  
</ul>
<div className="mt-5">
  <Outlet/>
</div>

</div>
    
  )
}

export default Userprofile
