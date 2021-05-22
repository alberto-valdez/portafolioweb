import useChangeLenguage from "../hooks/useChangeLanguage"

export const About = () => {
    
    
    const{t} = useChangeLenguage();

    return (

        <div className='dark:text-white  flex w-full min-h-screen justify-center items-center  px-20 '>
        <div className='flex flex flex-col  md:flex-row md:flex-wrap  mt-24  md:px-40 justify-evenly animate-fadeIn'>
            <div className='flex justify-center'>
                <img className='w-auto h-3/4  md:w-96 md:h-auto ' src="https://www.stylesofman.com/wp-content/uploads/2020/05/black-denim-trucker-jacket-outfit.jpg?ezimgfmt=rs:354x556/rscb87/ng:webp/ngcb87" alt="" />
            </div> 

            <div className='px-4 mb-20 md:w-2/3'>
            <h1 className='font-bold text-4xl tracking-wide '>{t("about.about")}</h1>
                <h3 className='pt-6 text-justify'>{t("about.desc1")}</h3>
                <h3 className='pt-6 text-justify'>{t("about.desc2")}</h3>
                <h3 className='pt-6 text-justify'>{t("about.desc3")}</h3>
            </div>
            
        </div>
        </div>
      
    )
}