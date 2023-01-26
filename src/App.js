import React, { useRef } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import "./components/styles/layout.css"
import "./components/styles/index.css"
import GetStart from './components/get_started/GetStart';
import Navbar from './components/Navbar';
import About from './components/About';
import Lower from './components/Lower';
import './components/styles/framework.css'
import SignUpPage from './components/SignUpPage';
function App() {
  const homeRef = useRef(null); //represents main section
  const aboutRef = useRef(null); //represents about section
  const contactRef = useRef(null); //represents how to use section

  return (
    <>

      <BrowserRouter>
        <Navbar homeRsef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
        <Routes>
          <Route key="home" exact path='/' element={
            <section className='Landing-page'>
              <Home homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
              <About homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
              <Lower homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
            </section>}
          />
          <Route key="signup" exact path='/signup' element={
            <SignUpPage />
          } />
          <Route key="login" exact path='/login' element={
            <section className='Landing-page'>

              <GetStart />
            </section>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
