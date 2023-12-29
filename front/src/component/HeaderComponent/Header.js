import './Header.css';
import {useState} from 'react';
import { useEffect } from 'react';
import Auth from '../AuthComponent/Auth';
function Header() {
	const [header, setHeader] = useState();
    useEffect(()=>{
        if(localStorage.getItem('token')!==undefined && localStorage.getItem('role')==='user')
        {
            setHeader(
            <>
                <div class="container-fluid bg-dark text-light px-0 py-2">
                    <div class="row gx-0 d-none d-lg-flex">
                       <div class="col-lg-7 px-5 text-start">
                           <div class="h-100 d-inline-flex align-items-center me-4">
                             <span class="fa fa-phone-alt me-2"></span>
                             <span>+012 345 6789</span>
                           </div>
                           <div class="h-100 d-inline-flex align-items-center">
                             <span class="far fa-envelope me-2"></span>
                             <span>info@example.com</span>
                           </div>
                       </div>
                       <div class="col-lg-5 px-5 text-end">
                           <div class="h-100 d-inline-flex align-items-center mx-n2">
                             <a class="btn btn-link text-light" href=""><i class="fab fas fa-user"></i></a>
                             <span>User</span>
                            </div>
                       </div>
                   </div>
                </div>
            </>)
        }else if(localStorage.getItem('token')!==undefined && localStorage.getItem('role')==='admin')
        {
            setHeader(
            <>
                <div class="container-fluid bg-dark text-light px-0 py-2">
                    <div class="row gx-0 d-none d-lg-flex">
                       <div class="col-lg-7 px-5 text-start">
                           <div class="h-100 d-inline-flex align-items-center me-4">
                             <span class="fa fa-phone-alt me-2"></span>
                             <span>+012 345 6789</span>
                           </div>
                           <div class="h-100 d-inline-flex align-items-center">
                             <span class="far fa-envelope me-2"></span>
                             <span>info@example.com</span>
                           </div>
                       </div>
                       <div class="col-lg-5 px-5 text-end">
                           <div class="h-100 d-inline-flex align-items-center mx-n2">
                             <a class="btn btn-link text-light" href=""><i class="fab fas fa-users"></i></a>
                             <span>Admin</span>
                            </div>
                       </div>
                   </div>
                </div>
            </>)
        }else{
            setHeader(
            <>
                <div class="container-fluid bg-dark text-light px-0 py-2">
                   <div class="row gx-0 d-none d-lg-flex">
                      <div class="col-lg-7 px-5 text-start">
                          <div class="h-100 d-inline-flex align-items-center me-4">
                              <span class="fa fa-phone-alt me-2"></span>
                              <span>+012 345 6789</span>
                          </div>
                          <div class="h-100 d-inline-flex align-items-center">
                              <span class="far fa-envelope me-2"></span>
                              <span>info@example.com</span>
                         </div>
                      </div>
                      <div class="col-lg-5 px-5 text-end">
                          <div class="h-100 d-inline-flex align-items-center mx-n2">
                              <span>Follow Us:</span>
                              <a class="btn btn-link text-light" href=""><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-link text-light" href=""><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-link text-light" href=""><i class="fab fa-linkedin-in"></i></a>
                              <a class="btn btn-link text-light" href=""><i class="fab fa-instagram"></i></a>
                          </div>
                      </div>
                   </div>
               </div>
            </>)
        }
    })
	
  return (
    <>
    <Auth/>
    {header}
    </>
  );
}
export default Header;
