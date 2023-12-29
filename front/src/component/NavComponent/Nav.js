import './Nav.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Nav() {
  const navigate = useNavigate('');
  const [nav, setNav] = useState();

  const handelLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Conform!',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/logout');
        Swal.fire({
          title: 'Logout!',
          text: 'Logout succesfully.',
          icon: 'success',
        });
      }
    });
  };
  useEffect(() => {
    if (
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('role') === 'user'
    ) {
      setNav(
        <>
          <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a
              href="index.html"
              class="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
              <h1 class="m-0">BID ME </h1>
            </a>
            <button
              type="button"
              class="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a class="nav-item nav-link active">
                  <Link to="/">Home</Link>{' '}
                </a>
                <a class="nav-item nav-link">
                  <Link to="/about">About</Link>
                </a>
                <a class="nav-item nav-link">
                  <Link to="/service">Services</Link>
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu bg-light m-0">
                    <a href="feature.html" class="dropdown-item">
                      Features
                    </a>
                    <a href="quote.html" class="dropdown-item">
                      Free Quote
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a class="nav-item nav-link">
                  <Link to="/contact">Contact</Link>
                </a>

                <a class="nav-item nav-link" onClick={handelLogout}>
                  Logout
                </a>
              </div>
              <a
                href=""
                class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
              >
                Get A Quote<i class="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
        </>
      );
    } else if (
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('role') === 'admin'
    ) {
      setNav(
        <>
          <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a
              href="index.html"
              class="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
              <h1 class="m-0">BID ME</h1>
            </a>
            <button
              type="button"
              class="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a class="nav-item nav-link active">
                  <Link to="/">Home</Link>{' '}
                </a>
                <a class="nav-item nav-link">
                  <Link to="/manageuser">ManageUser</Link>
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </a>
                  <div class="dropdown-menu bg-light m-0">
                    <a href="feature.html" class="dropdown-item">
                      <Link to="/addcategory">Add Category</Link>
                    </a>
                    <a href="quote.html" class="dropdown-item">
                      <Link to="/addsubcategory">Add Sub Category</Link>
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Account Setting
                  </a>
                  <div class="dropdown-menu bg-light m-0">
                    <a class="dropdown-item">
                      <Link to="/epadmin">Edit Profile</Link>
                    </a>
                    <a class="dropdown-item">
                      <Link to="/cpadmin">Change Password</Link>
                    </a>
                    <a class="dropdown-item" onClick={handelLogout}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">
                Get A Quote<i class="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
        </>
      );
    } else {
      setNav(
        <>
          <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a
              href="index.html"
              class="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
              <h1 class="m-0">Gardener</h1>
            </a>
            <button
              type="button"
              class="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a class="nav-item nav-link active">
                  <Link to="/">Home</Link>{' '}
                </a>
                <a class="nav-item nav-link">
                  <Link to="/about">About</Link>
                </a>
                <a class="nav-item nav-link">
                  <Link to="/service">Services</Link>
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu bg-light m-0">
                    <a href="feature.html" class="dropdown-item">
                      Features
                    </a>
                    <a href="quote.html" class="dropdown-item">
                      Free Quote
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a class="nav-item nav-link">
                  <Link to="/contact">Contact</Link>
                </a>
                <a class="nav-item nav-link">
                  <Link to="/register">Register</Link>
                </a>
                <a class="nav-item nav-link">
                  <Link to="/login">Login</Link>
                </a>
              </div>
              <a
                href=""
                class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
              >
                Get A Quote<i class="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
        </>
      );
    }
  });

  return <>{nav}</>;
}
export default Nav;
