import './ContactSection.css';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';
import { IconCheck, IconExclamationCircle } from '@tabler/icons-react';
import { useForm } from "react-hook-form";

function ContactSection() {

  const [loading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    setIsLoading(true);
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result);
          setIsSubmitted(true);
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
          setErrorSubmit(true);
      });
  };

  return (
    <>
       <section className="plan-section">
          <div className="plan-container__title">
            <h2>Contact</h2>
            {!isSubmitted ? (
            <div className="form-container">
               <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                 <label>Nom</label>
                 <input
                 type='text'
                placeholder='Votre nom'
                  {...register("user_name", {
                    required: true,
                    pattern: /^[A-Za-zèéêëôàáâä -]+$/i,
                    maxLength: 20
                  })}
                />
                {errors?.user_name?.type === "required" && <p className="text-error">Ce champs est requis.</p>}
                    {errors?.user_name?.type === "pattern" && (
                        <p className="text-error">Caractères alphabétiques uniquement.</p>
                    )}
                    {errors?.user_name?.type === "maxLength" && (
                        <p className="text-error">Veuillez raccourcir votre nom.</p>
                    )}
                <label>Adresse email</label>
                <input
                type='email'
                placeholder='Votre email'
                  {...register("user_email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/i
                  })}
                />
                {errors?.user_email?.type === "required" && <p className="text-error">Ce champs est requis.</p>}
                    {errors?.user_email?.type === "pattern" && (
                        <p className="text-error">Adresse email invalide.</p>
                    )}
                <label>Demande</label>
                <textarea
                placeholder='Votre demande'
                  {...register("message", {
                    required: true,
                    pattern: /^[A-Za-zèéêëôàáâä1234567890!@%&()-_+=;:'",.?/ -]+$/i,
                    maxLength: 200
                  })}
                />
                {errors?.message?.type === "required" && <p className="text-error">Ce champs est requis.</p>}
                    {errors?.message?.type === "pattern" && (
                        <p className="text-error">Caractères alphabétiques uniquement.</p>
                    )}
                    {errors?.message?.type === "maxLength" && (
                        <p className="text-error">Limite des caractères autorisés atteinte.</p>
                    )}
                    <button className='submitContact' type="submit">{!loading ? <div className='centerDiv'><div className='loader'></div></div> : 'Envoyer'}</button>
            </form>
            </div>
      ) : errorSubmit ? (
        <div>
          <IconExclamationCircle size={28} color='red' />
          <h1>Une erreur est survenue lors de l'envoi.</h1>
          <h1>Veuillez réessayer dans un moment.</h1>
        </div>
      ) : (
        <div>
          <IconCheck size={38} color='green' />
          <h1>Votre message a bien été envoyé.</h1>
        </div>
      )}
          </div>
      </section>
    </>
  );
}

export default ContactSection;
