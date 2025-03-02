import { Routes, Route } from 'react-router'; 
import './App.css';
import LandingPage from './Components/Landing-Page/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import YogPage from './Components/Yog-Page/YogPage';
import Login from './Components/Login/Login';
import CandidateForm from './Components/CandidateForm/CandidateForm';
import Community from './Components/Community/Community';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { useState } from 'react';

function App() {
  const[auth, setAuth] = useState(false)
  function handleAuth(val){
    setAuth(val)
  }
  return (
    <>
      <Navbar auth={auth} handleAuth={handleAuth}/>
      <Routes>
        <Route path="/" element={<LandingPage auth={auth}/>} />
        <Route path="/yog-page" element={<YogPage />} />
        <Route path="/login" element={<Login  auth={auth}
            handleAuth={handleAuth}/>} />
        <Route path="/candidate" element={<CandidateForm />} />
        <Route path="/community/*" element={<Community />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
