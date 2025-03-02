import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const Login = ({ auth, handleAuth }) => {
  const [signup, setSignup] = useState({ email: "", password: "" });
  const [profileKey, setProfileKey] = useState(null);

  useEffect(() => {
    async function checkProfileKey() {
      const storedProfileKey = localStorage.getItem('profileKey');
      const storedSignup = localStorage.getItem('signup');
      if (storedProfileKey) {
        try {
      
          const res = await axios.get(
            `https://yoga-website-2a1bc-default-rtdb.firebaseio.com/profile/${storedProfileKey}.json`
          );
          if (res.data) {
            setProfileKey(storedProfileKey);
            handleAuth(true);
          } else {
            localStorage.removeItem('profileKey');
            setProfileKey(null);
          }
        } catch (error) {
          console.error("Error verifying profileKey:", error);
          localStorage.removeItem('profileKey');
          setProfileKey(null);
        }
      }
      if (storedSignup) {
        try {
          setSignup(JSON.parse(storedSignup));
        } catch (err) {
          console.error("Error parsing stored signup data", err);
        }
      }
    }
    checkProfileKey();
  }, [handleAuth]);

 
  useEffect(() => {
    localStorage.setItem('signup', JSON.stringify(signup));
  }, [signup]);

  useEffect(() => {
    if (profileKey) {
      localStorage.setItem('profileKey', profileKey);
    } else {
      localStorage.removeItem('profileKey');
    }
  }, [profileKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profileKey) {
      alert("You are already signed in. Please sign out to sign in again.");
      return;
    }
    try {
      const response = await axios.post(
        "https://yoga-website-2a1bc-default-rtdb.firebaseio.com/profile.json",
        signup
      );
      if (response.data && response.data.name) {
        setProfileKey(response.data.name);
        alert("Sign in successful");
        handleAuth(true);
      } else {
        alert("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Error signing in. Please try again.");
      handleAuth(false);
    }
  };

  const handleSignOut = async () => {
    if (!profileKey) return;
    try {
      await axios.delete(
        `https://yoga-website-2a1bc-default-rtdb.firebaseio.com/profile/${profileKey}.json`
      );
      setProfileKey(null);
      alert("Sign out successful");
      handleAuth(false);
    } catch (error) {
      console.error("Sign out error:", error);
      alert("Error signing out. Please try again.");
      handleAuth(true);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h3 className={styles.logo}>Mindful Stretch</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.heading}>Sign-In</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              className={styles.input}
              name="email"
              value={signup.email}
              onChange={handleChange}
              placeholder="Enter your email or mobile number"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              name="password"
              value={signup.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
    
        {profileKey && (
          <div className={styles.signOutSection}>
            <button onClick={handleSignOut} className={styles.button}>
              Sign Out
            </button>
          </div>
        )}
        <div className={styles.helpLinks}>
          <a href="#" className={styles.link}>
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
