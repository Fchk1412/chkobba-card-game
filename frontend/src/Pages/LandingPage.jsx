import React, { useState } from "react";
import background from "./assets/card-game-bg.jpg";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with:", usernameOrEmail, password);
    // Redirect or perform login logic
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      console.log("Signing up with:", usernameOrEmail, password);
      // Redirect or perform sign-up logic
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="login-container">
        <h1 className="landing-title">Welcome to Chkobba</h1>

        {/* Toggle between Login and Sign Up */}
        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        )}

        {/* Toggle between Login and Sign Up */}
        <div className="toggle-container">
          <p>
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setIsSignUp(false);
                    setUsernameOrEmail(""); // Clear fields
                    setPassword("");
                    setRepeatPassword("");
                  }}
                  className="toggle-link"
                >
                  Log In
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setIsSignUp(true);
                    setUsernameOrEmail(""); // Clear fields
                    setPassword("");
                    setRepeatPassword("");
                  }}
                  className="toggle-link"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>

        {/* Play as Guest Button */}
        <Link to="/home" className="guest-link">
          Play as Guest
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
