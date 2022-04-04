import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(props){
    const [state, handleSubmit] = useForm("xgedkvnn");
    function handleClick(){
        if (state.succeeded) {
            Store.addNotification({
                title: "Your message has been sent",
                message: "We'll get back to you soon",
                type: "success",
                insert: "bottom",
                container: "bottom-left",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
        }
    }


    return (
        <div className="md:w-[1/2]">
            <h1 className="mt-10 subheading-text text-center text-2xl mb-8 text-cyan-600">Got a Question?</h1>
            <form action="https://formspree.io/f/xgedkvnn"
                  method="POST"
                  onSubmit={handleSubmit}>
                <div className="flex flex-col items-center w-full body-text">
                    <div className="sm:grid-cols-2 sm:grid w-full lg:w-10/12 xl:w-8/12">
                        <div className="flex flex-col sm:w-10/12">
                            <input className="mb-3 border-2 p-2 rounded-md 
                                            focus:outline-none focus:border-slate-600" type="text" id="firstname" name="firstname" placeholder="first name" required/>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <input className="mb-3 border-2 p-2 rounded-md focus:outline-none 
                                            focus:border-slate-800" type="text" id="lastname" name="lastname" placeholder="last name" required/>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <input className="mb-3 border-2 p-2 rounded-md 
                                                focus:outline-none focus:border-slate-600" type="email" name="email" placeholder="email" required/>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <textarea className="h-full w-full border-2 p-2 rounded-md focus:outline-none focus:border-slate-600" id="message" name="message" placeholder="What do you want to say?" required/>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className="mt-10" onClick={handleClick} type="submit" disabled={state.submitting}>Submit</button>
                </div>
            </form>
        </div>
)}