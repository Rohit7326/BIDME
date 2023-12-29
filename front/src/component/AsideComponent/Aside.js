







import React from 'react'

const Aside = () => {
  return (
    <>
    
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

    <div>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
    <h1>dashboard</h1>
  </div>
</div>
</div>


    {/* <div class="container-fluid">


    <div class="row flex-nowrap">
        <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-dark" style={{marginTop:"58px"}}>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:"red",margin:"1px 0px 0px 220px"}}></button>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" >
        

                <a  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                    
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
 </div>   */}




     
      
</>
  )
}

export default Aside



















// import './Aside.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUser,
//   faBell,
//   faBars,
//   faHashtag,
//   faEnvelope,
//   faLock,
//   faMessage
// } from '@fortawesome/free-solid-svg-icons';
// function Aside(){
  

  
//     return(
//         <>
//             <div className='aside bg-primary'>
//               <div class="sidebar">
//             {/* <nav class="navbar bg-primary "> */}
//                 <Link  class="navbar-brand  mb-3">
//                     <h3 class="text-danger">DASHMIN</h3>
//                 </Link>
//                 <div class="d-flex align-items-center">
//                     <div class="position-relative">
//                         <img class="rounded-circle" src="assets1/img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
//                         <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
//                     </div>
//                     <div class="ms-3">
//                         <h6 class="mb-0">Jhon Doe</h6>
//                         <span>Admin</span>
//                     </div>
//                 </div>
//                 <div class="navbar-nav w-100">
//                     <Link  class="nav-item nav-link active text-white"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
//                     <div class="nav-item dropdown">
//                         <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</Link>
//                         <div class="dropdown-menu ">
//                             <Link  class="dropdown-item ">Buttons</Link>
//                             <Link  class="dropdown-item ">Typography</Link>
//                             <Link  class="dropdown-item ">Other Elements</Link>
//                         </div>
//                     </div>
//                     <Link  class="nav-item nav-link "><i class="fa fa-th me-2"></i>Widgets</Link>
//                     <Link  class="nav-item nav-link "><i class="fa fa-keyboard me-2"></i>Forms</Link>
//                     <Link  class="nav-item nav-link "><i class="fa fa-table me-2"></i>Tables</Link>
//                     <Link  class="nav-item nav-link "><i class="fa fa-chart-bar me-2"></i>Charts</Link>
//                     <div class="nav-item dropdown">
//                         <Link  class="nav-link dropdown-toggle " data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</Link>
//                         <div class="dropdown-menu ">
//                             <Link  class="dropdown-item ">Sign In</Link>
//                             <Link class="dropdown-item ">Sign Up</Link>
//                             <Link  class="dropdown-item ">404 Error</Link>
//                             <Link  class="dropdown-item ">Blank Page</Link>
//                         </div>
//                     </div>
//                 </div>
//             {/* </nav> */}
//         </div>
//               </div>
//         </>
//     );
// }
// export default Aside;