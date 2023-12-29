import { Navigate } from "react-router-dom";
function Logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  localStorage.removeItem('_id');
  return (
    <>
      <Navigate to='/'/>
    </>
    );
}

export default Logout;
