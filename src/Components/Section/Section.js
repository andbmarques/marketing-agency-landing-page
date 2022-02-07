import React from "react";
import { Container } from './Section.styles.js';

const Section = (props) => (
    <Container backgroundColor={props.backgroundColor}>
        {props.children}
    </Container>
)

export default Section