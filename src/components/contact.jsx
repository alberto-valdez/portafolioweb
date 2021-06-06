import  {FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaEnvelope} from "react-icons/fa";
import useChangeLenguage from "../hooks/useChangeLanguage";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const Contact = () => {
    const {t} = useChangeLenguage();
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState('¡Listo! Me pondré en contacto contigo lo antes posible.');
    function sendEmail(e) {
        e.preventDefault();
      
            emailjs.sendForm('gmailcontact', 'template_nraaxrm', e.target, 'user_xNcDkZtozhBP21lbou7Rn')
              .then((result) => {
                setIsOpen(true)
                e.target.reset();   
              }, (error) => {
                setIsOpen(true)
                setResult('Lo siento, parece que algo salió mal');
              });
             
      }
    return (

        <div className='flex w-full min-h-screen justify-center items-center pt-10 lg:pt-0'>

                <div className='flex flex-col  md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full max-w-4xl p-8 mt-12 md:mt-0 animate-fadeIn'>
                <div className='flex flex-col   justify-around space-y-8 md:mr-20 '>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>{t("contact.title")}</h1>
                        <p className='pt-2 dark:text-gray-100 text-sm'>{t("contact.desc")}</p>
                    </div>
                    <div>
                        <div className='inline-flex space-x-2'>
                        <h2 className="flex flex-wrap items-center text-xl"><i className='mr-1'><FaEnvelope/></i> albertovaldez.dev@gmail.com</h2>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-2xl'>
                        <a href="https://twitter.com/albertovaldezd4"  target="_blank"><span className='mr-1 mt-2'><FaTwitter/></span></a>
                        <a href="https://www.instagram.com/albertovaldez3/"  target="_blank"><span className='mr-1 mt-2'><FaInstagram/></span></a>
                        <a href="https:www.github.com/alberto-valdez"  target="_blank"><span className='mr-1 mt-2'><FaGithub/></span></a>
                        <a href="https://www.linkedin.com/in/alberto-valdez-dev13/"  target="_blank"><span className='mr-1 mt-2'><FaLinkedinIn/></span></a>
                    </div>
                </div>

                <div>
                    <div className='bg-white text-black rounded-xl shadow-lg p-8 '>
                            <form action="" onSubmit={sendEmail} className='flex flex-col space-y-4 md:w-80'>
                             
                                   
                              
                                <div>
                                <label className='text-sm'>{t("contact.input1")}</label>
                                    <input type="text" placeholder={t("contact.placeholder1")} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' name='name'  required/>
                                </div>
                    
                                <div>
                                <label className='text-sm'>Email</label>
                                    <input type="email" placeholder='e-mail' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' name='email' required/>
                                </div>
                                <div>
                                <label className='text-sm'>{t("contact.input2")}</label>
                                    <textarea  placeholder={t("contact.placeholder2")} rows='4' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' name='message' required></textarea>
                                </div>
                                <button type='submit' className='inline-block bg-gray-200 font-bold rounded-md px-6 py-2'>{t("contact.buttom")}</button>
                               
                               { isOpen ? (  <span>
                                    <h1 className='text-sm text-blue-700'>{result}</h1>
                                </span>

                               ) : (
                                <span>
                             
                                  </span>
                               )

                               }
                              
                            </form>
                    </div>
                </div>

                <div>

                </div>

                </div>
               
        </div>
    )
}