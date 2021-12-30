import React from 'react'
import { ContactBg, ContactCard, ContactH1, Form, Label, Input,TextArea, BtnWrapper, Button } from './ContactSectionElements'

const ContactSection = () => {
    return (
        <>
            <ContactBg>
                <ContactCard>
                    <ContactH1>Contact me</ContactH1>
                    <Form>
                        <Label>Name: <Input type= 'text' autoFocus/></Label>
                        <Label>Email: <Input type= 'email'/></Label>
                        <Label>Message: <TextArea/></Label>
                        <BtnWrapper><Button type ='submit' value='Send' /></BtnWrapper>
                    </Form>

                </ContactCard>
            </ContactBg>
        </>
    )
}

export default ContactSection