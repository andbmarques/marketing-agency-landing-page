import styled from "styled-components";
import { ReactComponent as Il1 } from './Assets/il1.svg';

export const Ilustration = styled(Il1) `
    @media(max-width: 800px) {
        width: 100%;
        height: auto;
    }
`;

export const SectionContainer = styled.div `
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const SectionTitle = styled.h1 `
    font-size: 48px;
    color: ${props => props.color};

    @media (max-width: 800px) {
        font-size: 36px;
    }
`;

export const SectionParagraph = styled.p `
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.color};

    @media (max-width: 800px) {
        font-size: 16px;
    }
`;

export const SectionNote = styled.p `
    font-size: 14px;
    color: ${props => props.color};
`;

export const SectionButton = styled.button `
    border: none;
    outline: 0;
    border-radius: 5px;
    background-color: #14141E;
    color: #FFFFFF;
    font-size: 18px;
    width: 25%;
    padding: 1rem 0;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const ContactContainer = styled.div `
    width: 30%;
    height: 60%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const ContactTitle = styled.h1 `
    font-size: 36px;
    color: #14141E;
    margin: 3rem 0;
`;

export const ContactInput = styled.input `
    outline: 0;
    border: none;
    width: 70%;
    height: 10%;
    background-color: #F4F4F4;
    border-radius: 5px;
    margin: 0.5rem 0;
    padding: 0 1rem;
`;

export const ContactButton = styled.button `
    border: none;
    outline: 0;
    border-radius: 5px;
    background-color: #14141E;
    color: #FFFFFF;
    font-size: 18px;
    width: 40%;
    padding: 1rem 1rem;
    cursor: pointer;
    margin: 3rem 0;

    @media (max-width: 800px) {
        width: 60%;
    }
`;

export const Footer = styled.div `
    width: 100%;
    height: 70px;
    background-color: #14141E;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
`;