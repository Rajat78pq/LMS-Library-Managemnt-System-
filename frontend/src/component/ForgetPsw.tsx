import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/login.css'; // Import your CSS file here
import { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';


function ForgetPsw (){
    const [forgetEmail, setfrogetEmail]= useState('');
  

    const gmailSend =()=>{
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message send"
      });
    }

    
    const emailForget =async(e:any)=>{
      gmailSend();
        e.preventDefault()
        try{
            const respons = await Axios.post(`http://localhost:2000/forget`,{Email:forgetEmail});

            if(respons.data.success){
                Swal.fire({
                    title: "Message has been send",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  });
            }
        }catch(err){
            console.log(`Frontend Error is ${err}`);
        }
    }

    return (
        <div className="login-container">
        <div className="main-container">
          <div className="branding">
            <div className="logo">CSE</div>
            <h1>Elibrary</h1>
          </div>
          <div className="ug">
            <p>
              Enter Login email, check the mail for OTP & complete the
              verification process.
            </p>
          </div>
          <div className="main-login">
            <label htmlFor="email">Email</label>
            <br />
            <div className="input-box">
              <input
              onChange={(e)=>{setfrogetEmail(e.target.value)}}
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <button onClick={emailForget} className="btn login-btn" type="submit">
            <span className="span-login-btn">Send Mail</span>
            </button>
          </div>
          <div className="or">or</div>
          <div className="btn sign-up-btn">
            {/* Use Link component for navigation */}
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    );
}

export default ForgetPsw;
