import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 725px;
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    
    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;
        height: 800px;
    }
`