import { FaRegCompass, FaGithub  } from "react-icons/fa";
import useChangeLenguage from "../hooks/useChangeLanguage";

export const Card = ({name, desc, tec}) => {
    const {t} = useChangeLenguage();
    return(
        <div className='bg-white border text-black   shadow-lg  rounded-lg overflow-hidden'>
            <img src="https://64.media.tumblr.com/e5dd8c532a270999dcc3a58a7bae50ac/c7d011b458087487-cd/s1280x1920/c94a59cfdfdd8deba010d0d8ab9d323eb3ff0c0d.jpg" alt="" />
            <div className='p-6'>
            <h3 className='text-center text-xl font-semibold'>{name}</h3>
            <h4 className='text-center '>{t(desc)}</h4>
            <h4 className='text-center '>{tec}</h4>
            <div className='pt-8 flex justify-evenly'>
                <button className='text-3xl'><FaRegCompass/></button>
                <button className='text-3xl'><FaGithub/></button>
            </div>
            </div>    
        </div>
    )
}