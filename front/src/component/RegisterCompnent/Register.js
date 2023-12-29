import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _appiurluser } from '../../apl.url.user';
const Register = () => {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();

  const HandalSubmit =()=>{
    const userDetails = {"name":name,"email":email,"password":password,"mobile":mobile,"gender":gender,"address":address,"city":city};
    axios.post(_appiurluser+"registration",userDetails).then((res)=>{
      setOutput("Registration succesfully comepleted....");
      setName('');
      setEmail('');
      setPassword('');
      setMobile('');
      setGender('');
      setCity('');
      setAddress('');
    }).catch((err)=>{
      setOutput('Registration failed.....')
    });
    setTimeout(()=>{
      setOutput('');
    },3000);

  }
  return (
    <>
      {/* Start Appointment */}
       {/* Quote Start */}
    <div class="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src=" assets/img/carousel-2.jpg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="display-5 text-center mb-5">REGISTER HERE!!!</h1>
                        <div class="row g-3">
                        <span class='text-succes'>{output}</span>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-light border-0" id="gname" placeholder="Gurdian Name" value={name} onChange={e=>{setName(e.target.value)}}/>
                                    <label for="gname">Your Name</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                                    <label for="gmail">Your Email</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="password" class="form-control bg-light border-0" id="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                                    <label for="password">Your Password</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-light border-0" id="cname" placeholder="Child Name" value={mobile} onChange={e=>{setMobile(e.target.value)}}/>
                                    <label for="cname">Your Mobile</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                        <div class="form-floating">
                         <select class="form-control bg-light border-0" value={city} onChange={e=>{setCity(e.target.value)}}
                        >
                        <option value="Bhopal">Bhopal</option>
                        <option value="Indore">Indore</option>
                        <option value="Dewas">Dewas</option>
                        <option value="Khargone">Khargone</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-floating">
                      <select
                        className="form-control bg-light border-0 " value={gender} onChange={e=>{setGender(e.target.value)}}
                      >
                     
                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{height: "100px"}} value={address} onChange={e=>{setAddress(e.target.value)}}></textarea>
                                    <label for="message">Write Your Address</label>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button class="btn btn-primary py-3 px-4" onClick={HandalSubmit} type="button">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Quote End */}
      {/* End Appointment */}
    </>
  );
};

export default Register;
