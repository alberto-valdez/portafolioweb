import { FaRegCompass, FaGithub  } from "react-icons/fa";
import useChangeLenguage from "../hooks/useChangeLanguage";

export const Card = ({name, desc, tec, link, git, image}) => {
    const {t} = useChangeLenguage();
    console.log(link)
    return(
        <div className='bg-white border text-black   shadow-lg  rounded-lg overflow-hidden'>
            <img src={image} alt="" className='h-45 md:h-96 w-auto'/>
            <div className='p-6'>
            <h3 className='text-center text-xl font-semibold'>{name}</h3>
            <h4 className='text-center '>{t(desc)}</h4>
            <h4 className='text-center '>{tec}</h4>
            <div className='pt-8 flex justify-evenly'>
                <button className='text-3xl'><a href={`${link}`} target="_blank"><FaRegCompass/></a></button>
                <button className='text-3xl'><a href={`${git}`} target="_blank"><FaGithub/></a></button>
                
            </div>
            </div>    
        </div>
    )
}