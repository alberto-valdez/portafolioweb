import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useChangeLenguage(){
    const [t, i18n] = useTranslation("global");
    let initialLenguage =  window.localStorage.getItem('translation')
    const [idiom, setIdiom] = useState(window.localStorage.getItem('translation'));
    const idioma = idiom === 'es' ?  'en' : 'es';

    useEffect(()=>{
        window.localStorage.setItem('translation', idiom);
        i18n.changeLanguage(idiom);
    },[idiom])

    useEffect(()=>{
            if(initialLenguage === null){
               setIdiom('es')
            }
    }, [])
    
    return { t, setIdiom, idioma, idiom }

}