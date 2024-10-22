// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom' ;
// import RootLayout from './RootLayout'; 
// import Home from './components/home/Home';
// import Register from './components/register/Register';
// import Login from './components/login/Login';
// import UserProfile from './components/userProfile/UserProfile';
// import General from './components/forms/General';
// import Diabetes from './components/forms/Diabetes';
// import Heartattack from './components/forms/Heartattack';
// import Eyesight from './components/forms/Eyesight';
// import Cancer from './components/forms/Cancer';
// import Prescription  from './components/forms/prescriptions/Prescription';
// import Alarm from './components/forms/alarms/Alarm';
// import Healthlogs from './components/forms/healthlogs/Healthlogs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'

// function App() {
//   const browserRouter=createBrowserRouter([
//     {
//       path:"/",
//       element:<RootLayout />,
//       children:[
//         {
//           path:"/",
//           element:<Home />
//         },
//         {
//           path:"/register",
//           element:<Register />
//         },
//         {
//           path:"/login",
//           element:<Login />
//         },
//         {
//           path:`/user-profile/${JSON.parse((localStorage.getItem('user'))).username}`,
//           element:<UserProfile />,
//           children:[
//             {
//                path:"general",
//               element:< General/>
//             },
//             {
//               path:"diabetes",
//               element:< Diabetes/>
//             },
//             {
//               path:"heartattack",
//               element:< Heartattack/>
//             },
//             {
//               path:"eyesight",
//               element:< Eyesight/>
//             },
//             {
//               path:"cancer",
//               element:< Cancer/>
//             },
//             {
//               path:"prescriptions",
//               element:< Prescription/>
//             },
//             {
//               path:"alarms",
//               element:< Alarm/>
//             },
//             {
//               path:"healthlogs",
//               element:< Healthlogs/>
//             }
//           ]
//         }
//       ]
//     }
//   ])

//   return (
//     <div className="app">
//       <RouterProvider router={browserRouter} />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import UserProfile from './components/userProfile/UserProfile';
import General from './components/forms/General';
import Diabetes from './components/forms/Diabetes';
import Heartattack from './components/forms/Heartattack';
import Eyesight from './components/forms/Eyesight';
import Cancer from './components/forms/Cancer';
import Prescription from './components/forms/prescriptions/Prescription';
import Alarm from './components/forms/alarms/Alarm';
import Healthlogs from './components/forms/healthlogs/Healthlogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {user && (
          <Route path={`/user-profile/${user.username}`} element={<UserProfile />}>
            <Route path="general" element={<General />} />
            <Route path="diabetes" element={<Diabetes />} />
            <Route path="heartattack" element={<Heartattack />} />
            <Route path="eyesight" element={<Eyesight />} />
            <Route path="cancer" element={<Cancer />} />
            <Route path="prescriptions" element={<Prescription />} />
            <Route path="alarms" element={<Alarm />} />
            <Route path="healthlogs" element={<Healthlogs />} />
          </Route>
        )}
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
