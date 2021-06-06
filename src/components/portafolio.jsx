import { Card } from "./card"
import projectData from '../assets/projects.json';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import { useEffect, useState } from "react";
import useChangeLenguage from "../hooks/useChangeLanguage";

export default function Portafolio(){

    const [count, setCount] = useState(0);
    const [fade, setFade] = useState('animate-fadeIn');
   const {t} = useChangeLenguage();

    const makeSwitch = (direction) => {
        if(direction === 'left'){
            if(count > 0){
              
                setFade('opacity-0');
                setCount(count - 1);         
            } else {
                return;
            }
        } else {
            if(count < projectData.length - 1){
               
                setFade('opacity-0');
                setCount(count + 1); 
            } else{
                return;
            }
        }

    } 

    useEffect(()=>{
        if(fade == 'opacity-0'){
            setFade('animate-card-fadeIn')
        }
    },[count])
 

    const projectsMap = projectData.map((project, key) => {
        return(
          
                 <Card
                 name = {project.name}
                 desc = {project.desc}
                 tec =  {project.tec}
                 link = {project.link}
                 git =  {project.git}
                 />
          
        )
    })
    return(
    
    <div className='flex justify-center h-screen pt-20 md:items-center'>
        <div className='mt-14   md:mt-0'>
        
        <div className="flex flex-row">
        <button onClick={()=>makeSwitch('left')} type='button' className='self-center   h-12 rounded-full text-3xl m-3 p-2 flex items-center justify-center outline-none focus:outline-none   dark:text-white transition transform hover:scale-125 '><FaChevronLeft/></button>
        <span className={` m-0 p-0 ${fade}`}>
        <Card
            image = {projectData[count].image}
             name = {projectData[count].name}
             desc = {projectData[count].desc}
             tec = {projectData[count].tec}
             link = {projectData[count].link}
             git = {projectData[count].git}
             />
        </span>
    
         <button onClick={()=>makeSwitch('right')} className='self-center   h-12 rounded-full   text-3xl m-3 p-2 flex items-center justify-center outline-none focus:outline-none   dark:text-white  transition transform hover:scale-125 '><FaChevronRight/></button>
         </div>
        
        </div>

</div>
     
       
       
    )
}