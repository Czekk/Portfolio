import React, {useRef } from 'react'
import { ContactBg, ContactCard, ContactH1, Form, Label, Input,TextArea, BtnWrapper, Button } from './ContactSectionElements'
import {useForm, ValidationError} from '@formspree/react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactSection = () => {
    const [state, handleSubmit] = useForm("xbjwlkpz");
    const formRef = useRef();
    const handleField= () => {
            formRef.current.reset();
    };
    const notify = toast.success('Thank you for contacting! I will get back to you soon.', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'sucess01'
        });

    return (
        <>
            <ContactBg>
                <ContactCard>
                    <ContactH1>Contact me</ContactH1>
                    {state.succeeded?<ToastContainer/>:null}
                    <Form onSubmit={handleSubmit} preventDefault ref={formRef}>
                        <Label>Name: <Input id="name" name="name" type= 'text'/></Label>
                        <ValidationError prefix="Name" field="name" errors={state.errors}/>
                        <Label htmlFor="Email">Email: <Input id="email" name="email" type= 'email'/></Label>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <Label>Message: <TextArea id="message"name="message"/></Label>
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        <BtnWrapper><Button type ='submit' value="send" onclick={setTimeout(handleField, 5000)} disabled={state.submitting}/></BtnWrapper>
                    </Form>

                </ContactCard>
            </ContactBg>
        </>
    )
}

export default ContactSection