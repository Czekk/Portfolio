
import styled from "styled-components";

export const ContactBg = styled.div`
    display: flex;
    justify-content: center;
    
    background: #F4EDEA;
    width: 100%;
    height: 91vh;
`
export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    items-align: center;
    padding: 10px 20px;
    margin-top: 30px;
    width: 80%;
    height: 90%;
    // flex-wrap: wrap;
    position: relative;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px grey;
    
    @media screen and (max-width: 768px) {
        width: 97%;
    }
`

export const ContactH1 = styled.h1`
    color: #12263A;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid silver;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    items-align: center;
    flex-direction: column;
    padding; 5px;
    position: relative;
    flex-wrap: wrap;
`
export const Label = styled.label`
    color: #12263A;
    margin: 20px;
    font-weight: bold;
    font-size: 24px;
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin: 10px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40%;
    background: #F4EDEA;
    margin-top: 20px;
    padding: 5px 10px;
    font-size: 20px;
    color: #12263A;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;
    position: relative;
    z-index: 99;

    &:focus {
        box-shadow: 1px 1px 1px 1px grey;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        height: 35px;
    }
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 15vh;
    font-size: 20px;
    color: #12263A;
    background: #F4EDEA;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;

    &:focus {
        box-shadow: 1px 1px 1px 1px grey;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        height: 100px;
    }
`
export const BtnWrapper = styled.div`
    width: 100%;
    top: -25px;
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: center;
    items-align: center;
    position: relative;

    @media screen and (max-width: 768px) {
        top: 5px;
    }
`
export const Button = styled.input`
    border-radius: 10px;
    width: 35vw;
    Height: 40px;
    margin: auto;
    background: #12263A;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border: none;
    z-index: 99;
    

    &:hover {
        background: #F4EDEA;
        color: #12263A;
        cursor: pointer;
    }

    &: disabled {
        background: silver;
        color: grey;
    }
`