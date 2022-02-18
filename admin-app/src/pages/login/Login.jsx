import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="main">
      <div className="mainPanel">
        <div className="center">
          <span className="logo1">Monaadmin</span>
          <h1>ADMIN PANEL</h1>
          <p>Control panel login</p>
        </div>
        <div className="panel">
          <div className="icon_container">
            <i class="fa fa-user icon" />
            <input
              style={{ padding: 10, width: 320, outline: "none" }}
              className="input"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="icon_container">
            <i class="fa fa-key icon" />
            <input
              style={{ padding: 10, width: 320, outline: "none" }}
              className="input"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleClick}
            style={{
              padding: 10,
              width: 120,
              marginLeft: 45,
              marginTop: 45,
              borderRadius: 25,
              border: "1px solid white",
              fontSize: 15,
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
