import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function ChangePass() {
    const [newPassword, setnewPassword] = useState('');
    const [conformPassword, setconformPassword] = useState('');  
    
    const resetPassword = async(e:any)=>{
      e.preventDefault();
     try{
      if(newPassword == '' || conformPassword == ''){
        Swal.fire({
          icon: "error",
          title: "Please Enter Password",
          text: "You not Enter any Password!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }

      else if(newPassword == conformPassword){
        const respons = await Axios.put(`http://localhost:2000/update`,{Password:newPassword});
        if(respons.data.success){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Password is reset",
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      }else{
        Swal.fire({
          icon: "error",
          title: "ReEnter the Password",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
     }catch(err){
      console.error(`my error is : ${err}`);
     }
    }


  return (
    <div className="login-container">
    <div className="main-container">
      <div className="branding">
        <div className="logo">CSE</div>
        <h1>Elibrary</h1>
      </div>
      <div className="main-login">
        <form>
          <label htmlFor="New Password">New Password</label>
          <br />
          <div className="input-box">
            <input
            onChange={(e)=>{setnewPassword(e.target.value)}}
              type="password"
              name="psw"
              id="email"
              placeholder="Enter New Password"
              required
            />
          </div>
          <label htmlFor="Confirm Password">Confirm Password</label>
          <br />
          <div className="input-box">
            <input
            onChange={(e)=>{setconformPassword(e.target.value)}}
              type="password"
              name="psw"
              id="psw"
              placeholder="Confirm password"
              required
            />
          </div>
          <button onClick={resetPassword} className="btn login-btn" type="submit">
            <span className="span-login-btn">Reset Password</span>
          </button>
        </form>
        <div className="or">or</div>
        <div className="btn sign-up-btn">
        {/* Use Link component for navigation */}
        <Link to="/">Go to Login</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ChangePass;