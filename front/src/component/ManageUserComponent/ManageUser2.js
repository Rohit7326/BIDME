import './ManageUser.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _appiurluser } from '../../apl.url.user';
import { useNavigate } from 'react-router-dom';

function ManageUser() {
  const navigate = useNavigate();
  const [manageUser, setManageUser] = useState([]);
  useEffect(() => {
    axios
      .get(_appiurluser + 'fetch?role=user')
      .then((res) => {
        console.log(res);
        setManageUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const changeStatus = (_id, status) => {
    console.log(_id);
    if (status === 'Inactive') {
      let userInactive = {
        condition_obj: { _id: _id },
        content_obj: { Status: 0 },
      };
      axios.patch(_appiurluser + 'update', userInactive).then((res) => {
        navigate('/manageuser');
      });
    } else if (status === 'Active') {
      let userActive = {
        condition_obj: { _id: _id },
        content_obj: { Status: 1 },
      };
      axios.patch(_appiurluser + 'update', userActive).then((res) => {
        navigate('/manageuser');
      });
    } else if (status === 'delete') {
      let deleteConfirmation = window.confirm(
        'Are you sure you want to Delete?'
      );
      if (deleteConfirmation === true) {
        axios
          .delete(_appiurluser + 'delete', { data: { _id: _id } })
          .then((res) => {
            navigate('/manageuser');
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('User Not Removed....');
      }
    }
  };

  return (
    <>
      <h1 class="text-dark">Manage User</h1>
      <div className="container">
        <table className="table table-striped overflow-x-auto">
          <thead className="table_head">
            <tr>
              <th>RegId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>City</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageUser.map((row) => (
              <tr>
                <th>{row._id}</th>
                <th>{row.name}</th>
                <th>{row.email}</th>
                <th>{row.password}</th>
                <th>{row.mobile}</th>
                <th>{row.address}</th>
                <th>{row.city}</th>
                <th>{row.gender}</th>
                <th>{row.role}</th>
                <th>{row.info}</th>
                <th>
                  {row.Status === 1 && (
                    <font style={{ color: 'green' }}>Active</font>
                  )}
                  {row.Status === 0 && (
                    <font style={{ color: 'orange' }}>Inactive</font>
                  )}
                </th>
                <th>
                  {row.Status === 1 && (
                    <button
                      type="button"
                      class="btn btn-success text-light"
                      onClick={() => changeStatus(row._id, 'Inactive')}
                    >
                      changeStatus
                    </button>
                  )}
                  {row.Status === 0 && (
                    <button
                      type="button"
                      class="btn btn-success text-light"
                      onClick={() => changeStatus(row._id, 'Active')}
                    >
                      changeStatus
                    </button>
                  )}
                  <br />
                  <button
                    type="button"
                    class="btn btn-danger mt-2 text-light"
                    onClick={() => {
                      changeStatus(row._id, 'delete');
                    }}
                    color="red"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageUser;
