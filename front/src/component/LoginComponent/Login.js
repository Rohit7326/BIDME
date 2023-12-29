import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { _appiurluser } from '../../apl.url.user';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const HandalSubmit =()=>{
    const loginDetails={"email":email,"password":password};
    axios.post(_appiurluser+'login',loginDetails).then((res)=>{
      let response = res.data.userDetails;
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('email',response.email);
      localStorage.setItem('role',response.role);
      localStorage.setItem('_id',response._id); 
      setOutput('login Succesfully...');
      setEmail('');
      setPassword('');
      response.role=='admin'?navigate('/admin'):navigate('/user');
    }).catch((err)=>{
      setOutput('login Failed...');
    })
    setTimeout(()=>{
      setOutput('');
    },3000);
  };
  return (
    <>
               <div class="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src=" assets/img/carousel-2.jpg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="display-5 text-center mb-5">LOGIN HERE!!!</h1>
                        <div class="row g-3">
                        <span>{output}</span>
                            <div class="col-sm-12">
                                <div class="form-floating">
                                    <input type="email" class="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                                    <label for="gmail">Your Email</label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control bg-light border-0" id="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                                    <label for="cage">Your Password</label>
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
    </>
  );
}
export default Login;
