import styled from "styled-components";
import { FaGlobeAmericas } from 'react-icons/fa';

export const Container = styled.div `
    width: 100%;
    height: 70px;
    background-color: #14141E;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: default;
`;

export const LogoIcon = styled(FaGlobeAmericas) `
    width: 20px;
    height: 20px;
`;

export const LogoText = styled.h2 `
    margin: 0 0.6rem;
    font-family: 'Reem Kufi', sans-serif;
    font-weight: 500;
`;