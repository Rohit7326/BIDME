import './AddCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _appiurlcategory} from '../../apl.url.user';
import { useNavigate } from 'react-router-dom';

function AddCateory() {
  const [file,setFile]=useState();
  const [catnm,setCatnm]=useState();
  const [output,setOutput]=useState();

  const HandleChange=(event)=>{
    setFile(event.target.files[0])
    console.log(event);

  }
  const HandleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm',catnm);
    formData.append('caticonm',file);
    const config ={
      'content-type': 'multipart/form-data'
    };
    axios.post(_appiurlcategory+"save", formData,config).then((res)=>{
      setCatnm('')
      setFile('')
      setOutput('Categeory succesfully added.....');
    })
    setTimeout(()=>{
      setOutput('')
    },5000)
  }
  return (
<>
<div class="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src=" assets/img/carousel-2.jpg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="display-5 text-center mb-5">ADD CATEGORY!!!</h1>
                        <div class="row g-3">
                        <span>{output}</span>
                            <div class="col-sm-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-light border-0" id="text" placeholder="Gurdian Category Name" value={catnm} onChange={e=>{setCatnm(e.target.value)}}/>
                                    <label for="gmail">Categeory Name</label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-floating">
                                    <input type="file" class="form-control bg-light border-0" id="file" placeholder="Add File" value={file} onChange={HandleChange}/>
                                    
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button class="btn btn-primary py-3 px-4" onClick={HandleSubmit} type="button">ADD</button>
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

export default AddCateory;
