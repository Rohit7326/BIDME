import './EditProfile.css';
// import  { useEffect } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faMobileAlt, faVenusMars, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { _appiurluser } from '../../apl.url.user';

const EditProfile = () => {
  const [output,setOutput]=useState()
  const [name,setName]=useState('')
  const [email,setEmail]=useState()
  const [mobile,setMobile]=useState()
  const [gender,setGender]=useState()
  const [address,setAddress]=useState()
  const [city,setCity]=useState()

  useEffect(()=>{
    let id = localStorage.getItem('_id');
    console.log(id)
    
  
    
    
      axios.get(_appiurluser+`${id}`).then((res)=>{
      let obj= res.data.data
        console.log(obj.name)
         setName(obj.name);
         setMobile(obj.mobile);
         setEmail(obj.email);
         setAddress(obj.address);
         setCity(obj.city);
         setGender(obj.gender);
        
       
      })
    
  },[])
  const HandleSubmit = ()=>{
    
    const userDetail ={"name":name, "email":email,"mobile":mobile,"gender":gender,"address":address,"city":city}
      console.log(userDetail)
      // const url ="http://localhost:3001/user/registration";
      let _id=localStorage.getItem("_id");
      const userDetails={condition_obj:{_id:_id}, content_obj:userDetail};
      axios.patch(_appiurluser+"update",userDetails).then((response)=>{

        setOutput("Profile Edit Successfullly.....");
        setName("");
        setEmail("");
        setMobile("");
        setGender("");
        setAddress("");
        setCity("");
        Navigate('/admin');
      }).catch((err)=>{
        setOutput(" Profile Not Edited.....");
      });
  
      setTimeout(()=>{
        setOutput("")
      },1000)
    
   
  }
  return (
    <>
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        
      </button> */}
     
      <div class="container">
<div class="row flex-lg-nowrap">
  {/* <div class="col-12 col-lg-auto mb-3" style={{width: "200px"}}>
    <div class="card p-3">
      <div class="e-navlist e-navlist--active-bg">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link px-2 active" href="#"><i class="fa fa-fw fa-bar-chart mr-1"></i><span>Overview</span></a></li>
          <li class="nav-item"><a class="nav-link px-2" href="https://www.bootdey.com/snippets/view/bs4-crud-users" target="__blank"><i class="fa fa-fw fa-th mr-1"></i><span>CRUD</span></a></li>
          <li class="nav-item"><a class="nav-link px-2" href="https://www.bootdey.com/snippets/view/bs4-edit-profile-page" target="__blank"><i class="fa fa-fw fa-cog mr-1"></i><span>Settings</span></a></li>
        </ul>
      </div>
    </div>
  </div> */}

  <div class="col ">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <div class="row">
                <div class="col-8 col-sm-auto mb-3">
                  <div class="mx-auto" style={{width: "140px"}}>
                    <div class="d-flex justify-content-center align-items-center rounded" style={{height: "140px", backgroundColor: "rgb(233, 236, 239)"}}>
                      <span style={{color: "rgb(166, 168, 170)", font: "bold 8pt Arial"}}>140x140</span>
                    </div>
                  </div>
                </div>
                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div class="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap text-primary">Rohit Patidar</h4>
                    <p class="mb-0 text-primary">rohitpatidar@gmail.com</p>
                    {/* <div class="text-muted"><small>Last seen 2 hours ago</small></div> */}
                    <div class="mt-3">
                      <button class="btn btn-primary" type="button">
                        <i class="fa fa-fw fa-camera"></i>
                        <span>Change Photo</span>
                      </button>
                      <span>{output}</span>
                    </div>
                  </div>
                  <div class="text-center text-sm-right">
                    <span class="badge badge-secondary">administrator</span>
                    <div class="text-muted"><small>Joined 09 Dec 2017</small></div>
                  </div>
                </div>
              </div>
              <hr/>
              {/* <ul class="nav nav-tabs">
                <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
              </ul> */}
              <div class="tab-content pt-3">
                <div class="tab-pane active">
                  <form class="form" novalidate="">
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label class="text-primary">Full Name</label>
                              <input class="form-control" type="text" name="name"  value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label class="text-primary" >Mobile Number</label>
                              <input class="form-control" type="mobile" name="mobile"  value={mobile} onChange={e => setMobile(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label class="text-primary">Email</label>
                              <input class="form-control" type="email"  value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label class="text-primary">Address</label>
                              <textarea class="form-control" rows="5"  value={address} onChange={e => setAddress(e.target.value)}></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="row">
  <div class="col">
    <div class="form-group">
      <label class="text-primary">Gender</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="male" value={gender}  onChange={e => setGender(e.target.value)}/>
        <label class="form-check-label" for="female">Male</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="female" value={gender}  onChange={e => setGender(e.target.value)}/>
        <label class="form-check-label" for="male">Female</label>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="text-primary">City</label>
      <input class="form-control" type="text" name="city"  value={city}  onChange={e => setCity(e.target.value)}/>
    </div>
  </div>
</div>



                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col d-flex justify-content-end">
                        <button class="btn btn-primary" type="button" onClick={HandleSubmit}>Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="col-12 col-md-3 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <div class="px-xl-3">
              <button class="btn btn-block btn-secondary">
                <i class="fa fa-sign-out"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h6 class="card-title font-weight-bold">Support</h6>
            <p class="card-text">Get fast, free help from our friendly assistants.</p>
            <button type="button" class="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div> */}
    </div>

  </div>
</div>
</div>

      
             {/* <div className="row lg-1 align-items-center mt-5 ">
            <h2 class="mb-2 text-primary">Edit Profile Here!!!</h2>
              <form className="custom-form">
              
                        <div className="card-body ">
                          <span style={{color:"red",fontSize:"20px"}}>{output}</span>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faUser} className="me-2" />
                              Name
                            </label>
                              <input type="text" className="form-control custom-placeholder" id="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                         
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                              Email
                            </label>
                            <input type="email" className="form-control custom-placeholder" id="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)}/>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="password" className="form-label " style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faLock} className="me-2" />
                              Password
                            </label>
                            <input type="password" className="form-control custom-placeholder" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="mobile" className="form-label" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
                              Mobile Number
                            </label>
                            <input type="tel" className="form-control custom-placeholder" id="mobile" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)}/>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="gender" className="form-label d-block" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faVenusMars} className="me-2" />
                              Gender
                            </label>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input custom-placeholder" type="radio" name="gender" id="male" value="male"  onChange={e => setGender(e.target.value)} />
                              <label className="form-check-label" htmlFor="male" style={{ fontSize: '20px' }}>Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input custom-placeholder" type="radio" name="gender" id="female" value="female" onChange={e => setGender(e.target.value)}/>
                              <label className="form-check-label" htmlFor="female" style={{ fontSize: '20px' }}>Female</label>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="address" className="form-label" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                              Address
                            </label>
                            <input type="text" className="form-control custom-placeholder" id="address" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="city" className="form-label" style={{ fontSize: '20px' }}>
                              <FontAwesomeIcon icon={faCity} className="me-2" />
                              City
                            </label>
                            <input type="text" className="form-control custom-placeholder" id="city" placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
                          </div>

                          <button type="button" className="btn btn-primary w-100" data-bs-dismiss="modal" onClick={HandleSubmit}>Register</button>
                        </div>
              </form>
            </div>  */}
         
    </>
  );
}

export default EditProfile;
