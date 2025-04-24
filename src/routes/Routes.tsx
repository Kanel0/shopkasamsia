"use client";
import Dashboard from '@/pages/dashboard/Dashboard';
import Error from '@/pages/error/Error';
import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import RegisterPage from '@/pages/register/RegisterPage';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
  
  function RouteContent() {
      return (
          <>
          <Router>
           <Routes>

                {/* Home  */}
                <Route path='/' element={<HomePage/>}></Route>
             
                {/*Login  */}
                <Route path='/login' element={<LoginPage/>}></Route>

                {/*Register  */}
                <Route path='/register' element={<RegisterPage/>}></Route>
              

                {/* Dasboard */}
                <Route path='/dashboard' element={<Dashboard/>}></Route>


                {/* Profile */}
                <Route path='/profile' element={<ProfilePage/>}></Route>

        
                {/* Error page */}
                <Route path='*' element={<Error/>}></Route>


           </Routes>
          </Router>
          </>
         );
       }
  
  export default RouteContent;
  