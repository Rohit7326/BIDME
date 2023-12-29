import './AddSubCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _appiurlsubcategory, _appiurluser } from '../../apl.url.user';
import { useNavigate } from 'react-router-dom';

function AddSubCateory() {
  const [file,setFile]=useState();
  const [catnm,setCatnm]=useState();  
  const [subcatnm,setSubCatnm]=useState();  
  const [output,setOutput]=useState();

  const HandleChange=(event)=>{
    setFile(event.target.files[0])
    
    console.log(event);

  }
  const HandleChanges=(event)=>{
    
    setCatnm(event.target.value)
    console.log(event);

  }
  const handleDropdown=(value)=>{
    setCatnm(value);
  }
  const HandleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catenm',catnm);
    formData.append('subcatnm',subcatnm);
    formData.append('subcaticon',file);
    const config ={
      'content-type': 'multipart/form-data'
    };
    axios.post(_appiurlsubcategory+"save", formData,config).then((res)=>{
      setCatnm('')
      setSubCatnm('')
      setFile('')
      setOutput('Categeory succesfully added.....');
    })
    setTimeout(()=>{
      setOutput('')
    },5000)
  }
  return (
<>
<div class="container-fluid px-4 testt ">
              <h2 class="mb-4 text-primary">AddCategory</h2>
              <span class="text-success pt-1">{output}</span>
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-light rounded h-100 p-4">
                            
                            <form>
                            <div className="input-group mb-3">
      <span className="input-group-text text-primary">Category Name</span>
      <input
        type="text"
        className="form-control"
        placeholder="Select an option"
        aria-label="Dropdown input"
        aria-describedby="basic-addon2"
        value={catnm}
        onChange={HandleChanges}
      />
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Options
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" onClick={() => handleDropdown('Electronic')}>
            Electronic
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => handleDropdown('Furniture')}>
            Furniture
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => handleDropdown('Clothes')}>
            Clothes
          </a>
        </li>
      </ul>
    </div>
                                <div class="mb-3">
                                    <label for="catnm" class="form-label text-primary">SubCategory Name</label>
                                    <input type="text" class="form-control"  value={subcatnm} onChange={e=>setSubCatnm(e.target.value)}
                                        aria-describedby="emailHelp"/>
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="caticonm" class="form-label text-primary">Upload File</label>
                                    <input type="file" class="form-control"   onChange={HandleChange}/>
                                </div>
                                <button onClick={HandleSubmit} type="button" class="btn btn-primary">ADD</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    </div>
    
  
</>
    );
}

export default AddSubCateory;
