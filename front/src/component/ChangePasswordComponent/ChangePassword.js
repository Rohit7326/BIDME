import './ChangePassword.css';
// import  { useEffect } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faMobileAlt, faVenusMars, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { _appiurluser } from '../../apl.url.user';

const ChangePassword = () => {
  const navigate=useNavigate();
 const [newpassword,setNewPassword]=useState();
 const [confirmpassword,setConfirmPassword]=useState();
 const [output,setOutput]=useState();

  
  const HandleSubmit = ()=>{
    
    const userDetail ={"password": confirmpassword};
      console.log(userDetail)

      if(newpassword===confirmpassword)
      {
        let wc= window.confirm("Are you want sure chsnge your Password.....")
        if(wc===true)
          {
            let _id = localStorage.getItem('_id');
            const userDetails={condition_obj:{_id:_id}, content_obj:userDetail};
            axios.patch(_appiurluser+"update",userDetails).then((response)=>{
             navigate('/admin');
            }).catch((err)=>{
        
            }); 
          }
      else{
        alert('your password not changed');
       
      }
    }
    else{
      setOutput(" Password did not matched.....");
    }
   setTimeout(()=>{
    setOutput('')
   },3000);
      
    
   
  }
  return (
    <>
      <div class="card text-center" style={{width: "300px"}}>
    <div class="card-header h5 text-white bg-primary">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
           Enter your New Password
        </p>
        <div class="form-outline">
            <input type="password" id="typeEmail" class="form-control my-3" placeholder='New Password' value={newpassword} onChange={e=>setNewPassword(e.target.value)}/>
            
        </div>
        <div class="form-outline">
            <input type="password" id="typeEmail" class="form-control my-3" placeholder='Confirm Password' value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)}/>
            <span class='text-danger'>{output}</span>
            
        </div>
        <button type='button' class="btn btn-primary w-100" onClick={HandleSubmit}>Reset password</button>
        
    </div>
</div>
    </>
  );
}

export default ChangePassword;
