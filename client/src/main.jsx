// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider
// } from 'react-router-dom'
// import Home from './components/common/Home.jsx'
// import Rootlayout from './components/Rootlayout.jsx'
// import Signin from './components/common/Signin.jsx'
// import Signup from './components/common/Signup.jsx'
// import Userprofile from './components/user/Userprofile.jsx'
// import ArticlebyId from './components/common/ArticlebyId.jsx'
// import Postarticle from './components/author/Postarticle.jsx'
// import Articles from './components/common/Articles.jsx'
// import Authorprofile from './components/author/Authorprofile.jsx'

// const Routerobj = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Rootlayout />,
//       children: [
//         {
//           path: '/',
//           element: <Home />
//         },
//         {
//           path: 'signin',
//           element: <Signin />
//         },
//         {
//           path: 'signup',
//           element: <Signup />
//         },
//         {
//           path: 'user-profile/:email',
//           element: <Userprofile />,
//           children: [
//             {
//               path: 'articles',
//               element: <Articles />
//             },
//             {
//               path: ':articleId',
//               element: <ArticlebyId />
//             },
//             {
//               path: '',
//               element: <Navigate to="articles" />
//             }
//           ]
//         },
//         {
//           path: 'author-profile/:email',
//           element: <Authorprofile />,
//           children: [
//             {
//               path: 'articles',
//               element: <Articles />
//             },
//             {
//               path: ':articleId',
//               element: <ArticlebyId />
//             },
//             {
//               path: 'article',
//               element: <Postarticle />
//             },
//             {
//               path: '',
//               element: <Navigate to="articles" />
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   {
//     future: {
//       v7_startTransition: true
//     }
//   }
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={Routerobj} />
//   </StrictMode>
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Rootlayout from './components/Rootlayout.jsx'
import Home from './components/common/Home.jsx'
import Signin from './components/common/Signin.jsx'
import Signup from './components/common/Signup.jsx'
import Userprofile from './components/user/Userprofile.jsx'
import Authorprofile from './components/author/Authorprofile.jsx'
import Articles from './components/common/Articles.jsx'
import ArticlebyId from './components/common/ArticlebyId.jsx'
import Postarticle from './components/author/Postarticle.jsx'
import UserAuthorcontext from './contexts/UserAuthorcontext.jsx';
// import { userauthorcontextobj } from './contexts/UserAuthorContext.jsx';





const Routerobj = createBrowserRouter(
  [
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'signin', element: <Signin /> },
        { path: 'signup', element: <Signup /> },
        {
          path: 'user-profile/:email/*',
          element: <Userprofile />,
          children: [
            { path: 'articles', element: <Articles /> },
            { path: ':articleId', element: <ArticlebyId /> },
            { path: '', element: <Navigate to="articles" /> }
          ]
        },
        {
          path: 'author-profile/:email',
          element: <Authorprofile />,
          children: [
            { path: 'articles', element: <Articles /> },
            { path: ':articleId', element: <ArticlebyId /> },
            { path: 'article', element: <Postarticle /> },
            { path: '', element: <Navigate to="articles" /> }
          ]
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true
    }
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthorcontext>

    <RouterProvider router={Routerobj} />
    </UserAuthorcontext>
  </StrictMode>
)
