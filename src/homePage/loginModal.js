import React, { useState } from "react";
import "./loginModal.css";

function LoginModal(props) {
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

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="modal login-modal">
      <div className="modal-content login-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Login</p>
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
      </div>
    </div>
  );
}

export default LoginModal;
