import React, { useState } from "react";
import "./loginModal.css";

function LoginModal(props) {
  const [isLogin, setisLogin] = useState(true);
  
  const handleClose = () => {
    props.onClose();
  };
  const SignUpFun = ()=>{
    setisLogin(false);
  }
  const SignIn = ()=>{
    setisLogin(true);
  }
  return (
    <div className="modal login-modal">
      <div className="modal-content login-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div>
          <button onClick={SignIn}>SignIn</button>
          <button onClick={SignUpFun}>SignUp</button>
        </div>
        {isLogin?<Login/>:<Signup/>}
      </div>
    </div>
  );
}

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
  };
  return(
    <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
  )
}

function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    console.log("hello")
  };
  return(
    <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleEmailChange}
            placeholder="Username"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Confirm Password"
          />
          <button type="submit">Sign Up</button>
        </form>
  )
}

export default LoginModal;
