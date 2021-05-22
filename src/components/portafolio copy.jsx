import { Card } from "./card"
import projectData from '../assets/projects.json';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import { useEffect, useState } from "react";
import useChangeLenguage from "../hooks/useChangeLanguage";

export default function PortafolioCopy(){

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
                 tec = {project.tec}
                 />
          
        )
    })
    return(


      
    <div className='flex w-full min-h-screen  justify-center items-center'>

    <div className="flex flex-col md:flex-row   w-full max-w-4xl animate-fadeIn">
        <div className='flex flex-col  justify-around space-y-8 '>
            <div>
            <h1 className='text-4xl tracking-wide font-bold'>{t("portfolioText.title")}</h1>
            </div>
            <div>
                <div className='inline-flex '>
                <h2 className='flex flex-wrap items-center text-xl'>{t("portfolioText.desc1")}</h2>
                </div>
                <div className='inline-flex '>
                <h2 className='flex flex-wrap items-center text-xl mt-3'>{t("portfolioText.desc2")}</h2>
                </div>
            </div>
        </div>

        <div>
        <div className='flex justify-center  md:w-96  animate-fadeIn'>
        <div className={`flex flex-col mt-9 w-full  md:w-80 md:mt-0 `} >
        <div className="flex flex-row md:w-96 ">
        <button onClick={()=>makeSwitch('left')} type='button' className='self-center   h-12 rounded-full text-3xl m-3 p-2 flex items-center justify-center outline-none focus:outline-none   dark:text-white transition transform hover:scale-125 '><FaChevronLeft/></button>
        <span className={` m-0 p-0 ${fade}`}>
        <Card
             name = {projectData[count].name}
             desc = {projectData[count].desc}
             tec = {projectData[count].tec}
             />
        </span>
    
         <button onClick={()=>makeSwitch('right')} className='self-center   h-12 rounded-full   text-3xl m-3 p-2 flex items-center justify-center outline-none focus:outline-none   dark:text-white  transition transform hover:scale-125 '><FaChevronRight/></button>
         </div>
        </div>

        </div>
        
        </div>
{/* 
        <div  className='flex flex-col  '>
           <div>
            <h1 className='text-4xl tracking-wide font-bold'>{t("portfolioText.title")}</h1>
            </div>
           
                <div className='inline-flex '>
                <h2 className='flex flex-wrap items-center text-xl'>{t("portfolioText.desc1")}</h2>
                </div>
                <div className='inline-flex '>
                <h2 className='flex flex-wrap items-center text-xl mt-3'>{t("portfolioText.desc2")}</h2>
                </div>

    </div> */}
    </div>

</div>
     
       
       
    )
}