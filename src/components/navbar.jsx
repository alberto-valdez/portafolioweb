import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import useChangeLenguage from '../hooks/useChangeLanguage';
import useDarkMode from '../hooks/useDarkMode';
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const list = [
    { i: 'ES' },
    { i: 'EN' }
]
  

export const Navbar = () => {
     const {setTheme, colortheme, theme} = useDarkMode();
     const {t, setIdiom, idioma, idiom} = useChangeLenguage();
     const [selected, setSelected] = useState(list[0])
       const [enabled, setEnabled] = useState(false)

       const themeCheck = () => {
        setEnabled(!enabled)
        setTheme(colortheme)
       }
    return(
        <nav className='flex bg-white dark:bg-black pt-3 h-auto flex-col  justify-between items-center h-16 fixed inset-x-0 px-8 dark:text-white sm:flex-row sm:mt-0  transition  duration-500' >

            <div className="pr-8 md:block">
            <NavLink activeStyle={{
             color: "gray"
            }} to='/home' className='p-4'>{t("navbar.item1")}</NavLink>
            <NavLink activeStyle={{
             color: "gray"
            }}  to='/about' className='p-4'>{t("navbar.item2")}</NavLink>
            <NavLink activeStyle={{
             color: "gray"
            }}  to='/portfilio' className='p-4'>{t("navbar.item3")}</NavLink>
            <NavLink activeStyle={{
             color: "gray"
            }}  to='/contact' className='p-4'>{t("navbar.item4")}</NavLink>
            </div>

            <div className="flex items-center">

         
                <div className='p-4'>
    <div className="flex items-center  "  onClick={()=>setTheme(colortheme)} >
      <Switch
        checked={enabled}
        onChange={setEnabled} >
            <span className={`block bg-white rounded-full shadow p-2 h-8 w-14 mb-2 lg:mb-0 transition  duration-1000  ${theme !== 'dark' ? 'flex justify-end' : 'flex justify-start'}`}>
                {theme !== 'dark'  ? (<span className='text-black block h-full text-yellow-400   transition  duration-1000'><FaSun/></span>):(<span className='text-black block h-full text-blue-300 transition  duration-1000'><FaMoon/></span>)}
            </span>
           
      </Switch>
    </div>
                </div>
         

            
            <div className="p-4">
                   <select className='bg-transparent dark:text-white mb-2 lg:mb-0 outline-none focus:outline-none' onChange={()=>setIdiom(idioma)} defaultValue={idiom} name="" id="">
                       <option value='es' selected>ES</option>
                       <option value="en">EN</option>
                   </select>
                </div>
         
            
            </div>
           

           
            {/* <button onClick={()=>setTheme(colortheme)}  className='text-blue-600 dark:text-white'>theme</button>
            <button  onClick={()=>setIdiom(idioma)}  className='text-blue-600 dark:text-white'>Cambiar idioma</button> */}
        </nav>
    )
}