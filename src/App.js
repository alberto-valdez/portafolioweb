import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Navbar } from './components/navbar';
import { NotFound } from './components/notFound';
import Portafolio from './components/portafolio';
import { Thumbnail } from './components/thumbnail';
import useDarkMode from './hooks/useDarkMode';



function App() {
  useDarkMode();
  return (
    <div className='dark:bg-black dark:text-white  transition duration-500 animate-fadeIn antialiased'>
      
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
