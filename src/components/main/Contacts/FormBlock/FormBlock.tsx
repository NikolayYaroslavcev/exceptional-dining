import React, { useRef, FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import sFormBlock from './FormBlock.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const FormBlock = () => {
    const form: RefObject<HTMLFormElement> = useRef(null);

    const notify = () => toast;

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_p3sf21e', 'template_l2h5rzn', form.current, 'yv7IHX1u6pmh6qGkN')
                .then((result: any) => {
                    toast.success(('Ваш запрос отправлен. Большое спасибо, я свяжусь с вами в ближайшее время.'), {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(result.text);
                })
                .catch((error: any) => {
                    console.log(error.text);
                    toast.error((error.text), {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    toast.error('message error');
                    alert('message error');
                });

            e.currentTarget.reset();
        } else {
            console.error("Form reference is null");
            // Handle the case when form.current is null
        }
    };

    return (
        <div className={sFormBlock.formBlock}>
            <form ref={form} className={sFormBlock.form} onSubmit={sendEmail}>
                <input className={sFormBlock.input} aria-required="true" aria-invalid="false" placeholder="Name * "
                       type="text" name="user_name" required/>
                <input className={sFormBlock.input} aria-required="true" aria-invalid="false" placeholder="Email *"
                       type="email" name="user_email" required/>
                <textarea className={sFormBlock.inputTextarea} aria-required="true" placeholder="Subject *"
                          name="message"/>
                <input onClick={notify} className={sFormBlock.formBlockButton} type="submit" value="Get in touch"/>
            </form>
            <ToastContainer/>
        </div>
    );
};
