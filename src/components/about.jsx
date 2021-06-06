import useChangeLenguage from "../hooks/useChangeLanguage"
import profile  from '../assets/albert.jpeg';
export const About = () => {
    
    
    const{t} = useChangeLenguage();

    return (

        <div className='dark:text-white  flex w-full min-h-screen justify-center xl:flex-row items-center flex-col pb-4 pt-40 xl:pt-0 pb-10'>
            <div >
                <img className='rounded-full h-64  w-auto lg:h-72 animate-fadeIn' src={profile} alt="" />
            </div>

            <div className='px-1 xl:px-20 w-full md:mt-10 lg:w-2/4 animate-fadeIn' >
            <div>
            <h1 className='font-bold text-4xl tracking-wide px-3'>{t("about.about")}</h1>
            </div>

            <div className='px-3'>
                <h3 className='pt-6 text-justify'>{t("about.desc1")}</h3>
            </div>

            <div className='px-3 pt-3'>
                <h3 className='pt-6 text-justify'>{t("about.desc2")}</h3>
            </div>

            <div className='px-3 pt-3'>
                <h3 className='pt-6 text-justify'>{t("about.desc3")}</h3>
            </div>
            </div>
            


        </div>
      
    )
}