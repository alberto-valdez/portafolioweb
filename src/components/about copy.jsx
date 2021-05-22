import useChangeLenguage from "../hooks/useChangeLanguage"

export const Aboutcopy = () => {
    
    
    const{t} = useChangeLenguage();

    return (

        <div className='dark:text-white  flex justify-center items-center h-full h-screen  '>
        <div className='flex justify-evenly animate-fadeIn'>
            <div className=''>
                <img className='w-full' src="https://www.stylesofman.com/wp-content/uploads/2020/05/black-denim-trucker-jacket-outfit.jpg?ezimgfmt=rs:354x556/rscb87/ng:webp/ngcb87" alt="" />

            </div>
            <div className='w-6/12 px-8'>
                <h1 className='text-3xl '>{t("about.about")}</h1>
                <h3 className='pt-6'>{t("about.desc1")}</h3>
                <h3 className='pt-6'>{t("about.desc2")}</h3>
                <h3 className='pt-6'>{t("about.desc3")}</h3>
            </div>
        </div>
        </div>
      
    )
}