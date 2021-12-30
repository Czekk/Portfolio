import { FiChevronsDown } from "react-icons/fi";
import styled from "styled-components";

export const ProjectsBg = styled.div`
    background: #F4EDEA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 91vh;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1024px) {
        // font-size: 24px;
        // padding: 5Px 24px;
        // margin-top: 20px;
        // margin-bottom: 0px;
        height: 273vh;
    }

    @media screen and (max-width: 768px) {
        height: 100%;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
    }
`
export const ProjectsH1 = styled.h1`
    // display: flex;
    // justify-content: center;
    // items-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #12263A;
    text-align: center;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    marging-bottom: 0px;
    outline: none;
    border: none;
    position: relative;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        padding: 5Px 24px;
        margin-top: 20px;
        margin-bottom: 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
        padding: 5Px 18px;
    }
`
export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    background: #F4EDEA;
    border-top: 1px solid grey;
    outline: none;
    width: 100%;
    height: 100%;
    position: relative;
`
export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 10px 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px grey;
    width: 350px;
    height: 320px;
    z-index: 9999;

    @media screen and (max-width: 1024px) {
        // font-size: 24px;
        // padding: 5Px 24px;
        // margin-top: 0px;
        // margin-bottom: 20px;
        height: 70vh;
        width: 40vw;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 78vh;
    }

`
export const CardImg = styled.img`
    height: 50%;
    width: 100%;
    z-index: 999;
`

export const ProjectTitle = styled.h2`
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    text-decoration: underline;
    color: #12263A;
    width: 100%;
    height: 5%;
    margin: 5px 0px;
    z-index: 999;
`
export const ProjectsP = styled.p`
    text-align: left;
    margin-top: 5px;
    font-size: 12px;
    color: #12263A;
    width: 100%;
    height: 20%;
`
export const ViewBtn = styled.button`
    border-radius: 5px;
    display: flex;
    background: #12263A;
    color: #fff;
    padding: 5px;
    margin: 0px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    border: none;
    box-shadow: 2px 2px 2px 2px lightgrey;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 999;
    bottom: 0;

    &: hover{
        Background: #F4D1AE;
        color: #12263A;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        padding: 3px;
        height: 5%;
        margin: 10px 30px;
        font-size: 16px;
        font-weight: regular;
        box-shadow: 1px 1px 1px 1px lightgrey;
        transition: all 0.2s ease-in-out;
    }
`
export const GithubBtn = styled.button`
border-radius: 5px;
display: flex;
background: #12263A;
color: #fff;
padding: 5px;
margin-top: 5px;
white-space: nowrap;
font-size: 14px;
font-weight: bold;
outline: none;
border: none;
box-shadow: 2px 2px 2px 2px lightgrey;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
z-index: 999;

&: hover{
    Background: #F4D1AE;
    color: #12263A;
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {
    padding: 3px;
    height: 5%;
    margin: 5px 30px;
    font-size: 16px;
    font-weight: regular;
    box-shadow: 1px 1px 1px 1px lightgrey;
    transition: all 0.2s ease-in-out;
}
`
export const AboutMeBtn = styled.button`
    display: flex;
    justify-content: center;
    position: sticky;
    border-radius: 50px;
    margin: 20px 20px;
    padding: 5px 5px;
    height: 30px;
    width: 10%;
    float: right;
    bottom: 20px;
    right: -10px;
    background: #fff;
    color: #12263A;
    font-size: 18px;
    box-shadow: 2px 2px 2px 2px grey;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 9999;
    transition: all .2s ease-in-out;

    &: hover {
        background: #12263A;
        color: #fff;
        transition: all .2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const FaChevronDownIcon = styled(FiChevronsDown)`
    color: ${({over}) => (over? '#fff' : '#12263A')};
    font-size: 20px;
    font-weight: bold;
    width: 25%;
`