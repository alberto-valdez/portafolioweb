import useChangeLenguage from "../hooks/useChangeLanguage"
import pdf from '../assets/cv.pdf'
export const Thumbnail = () => {
    const { t } = useChangeLenguage()

   const downloadCV = () =>{
       document.getElementById('downloadPdf');
 
   }

    return(
        <div className='flex justify-center items-center h-full h-screen  dark:text-white '>
            <div className="flex flex-col animate-fadeIn ">

            <h1 className='text-center text-7xl md:text-9xl'>Alberto Valdez</h1>
            <h3 className='text-center  text-3xl    md:text-5xl'>{t("thumbnail.desc")}</h3>
            <div className="flex justify-center ">
              <a href={pdf} download='AlbertoValdezCV.pdf' type='button' id='downloadPdf' className='px-4 py-2 border-black border-2 dark:border-0  dark:bg-blue-700 mt-5  w-2/4 md:w-1/4 dark:text-white rounded font-semibold  flex justify-center transition duration-200'>{t("thumbnail.buttom-desc")}</a>
            </div>
          
            </div>
            
        </div>
    )
}