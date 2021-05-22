
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/about';

import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { NotFound } from './components/notFound';
import Portafolio from './components/portafolio';

import { Thumbnail } from './components/thumbnail';
import useDarkMode from './hooks/useDarkMode';



function App() {
  useDarkMode();
  

  return (
    <div className='dark:bg-black dark:text-white  transition duration-500 animate-fadeIn antialiased'>
      
      {/* <div className=''>
        <Thumbnail/>   
      </div>

      <div className='js-show-on-scroll'>
        <About/>   
      </div>

     
      <div className='flex justify-center js-show-on-scroll'>
        <Portafolio/>   
      </div>
     
      <div className='h-4/5  flex justify-center items-center flex-col js-show-on-scroll '>
        <Contact/>
      </div>

      <div className='js-show-on-scroll'>
        <Footer/>
      </div> */}

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Thumbnail}/> 
        <Route exact path='/home' component={Thumbnail}/> 
        <Route exact path='/about' component={About}/> 
        <Route exact path='/portfilio' component={Portafolio}/> 
        <Route exact path='/contact' component={Contact}/> 
        <Route  component={NotFound}/>
      </Switch>
 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
