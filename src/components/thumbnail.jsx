import useChangeLenguage from "../hooks/useChangeLanguage"

export const Thumbnail = () => {
    const { t } = useChangeLenguage()
    return(
        <div className='flex justify-center items-center h-full h-screen dark:bg-black dark:text-white '>
            <div className="flex flex-col animate-fadeIn ">

            <h1 className='text-center text-7xl md:text-9xl'>Alberto Valdez</h1>
            <h3 className='text-center  text-3xl    md:text-5xl'>{t("thumbnail.desc")}</h3>
            <div className="flex justify-center ">
            <button type='button' className='px-4 py-2 border-black border-2 dark:border-0  dark:bg-blue-700 mt-5  w-2/4 md:w-1/4 dark:text-white rounded font-semibold  transition duration-200'>{t("thumbnail.buttom-desc")}</button>
            </div>
          
            </div>
            
        </div>
    )
}