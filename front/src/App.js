
import './App.css';
import Link, { Route, Routes } from 'react-router-dom'
import Header from './component/HeaderComponent/Header';
import Nav from './component/NavComponent/Nav';
import Home from './component/HomeCompnent/Home';
import About from './component/AboutComponent/About';
import Service from './component/ServiceComponent/Service';
import Contact from './component/ContactComponent/Contact';
import Register from './component/RegisterCompnent/Register';
import Login from './component/LoginComponent/Login';
import Footer from './component/FooterComponent/Footer'
import Admin from './component/AdminComponent/Admin';
import ManageUser from './component/ManageUserComponent/ManageUser';
import AddCateory from './component/AddCategoryComponent/AddCategory';
import User from './component/UserComponent/User';
import Logout from './component/LogoutComponent/Logout';


const App = () => {

  return (
    <>
     {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style={{width: "3rem", height: "3rem"}}></div>
    </div> */}
    {/* Spinner End */}
   <Header/>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/manageuser' element={<ManageUser/>}/>
    <Route path='/addcategory' element={<AddCateory/>}/>
    <Route path='/user' element={<User/>}/>
   </Routes>
   <Footer/>

    


   


   


   


    


   


    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

    </>
  )
};

export default App;

