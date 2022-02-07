import React from "react";
import { Container, LogoContainer, LogoIcon, LogoText } from './Navbar.styles.js';

const Navbar = () => (
    <Container>
        <LogoContainer>
            <LogoIcon />
            <LogoText>Marketing Agency</LogoText>
        </LogoContainer>
    </Container>
);

export default Navbar;