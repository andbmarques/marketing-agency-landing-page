import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './Components/Navbar/Navbar.js';
import Section from './Components/Section/Section.js';
import { Footer, ContactButton, ContactContainer, ContactInput, ContactTitle, SectionButton, SectionContainer, SectionNote, SectionParagraph, SectionTitle, Ilustration } from './App.styles.js';

const App = () => (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Section backgroundColor={"white"}>
        <Ilustration />
        <SectionContainer>
          <SectionTitle color='#14141E'>Welcome Title</SectionTitle>
          <SectionParagraph color='#383847'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum, eros et molestie facilisis, nisi est accumsan magna, ut convallis.
          </SectionParagraph>
          <SectionNote color='#7E7E7E'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionNote>
          <SectionButton>Learn More</SectionButton>
        </SectionContainer>
      </Section>
      <Section backgroundColor={"#191923"}>
        <SectionContainer>
          <SectionTitle color='#FFFFFF'>Contact Us</SectionTitle>
          <SectionParagraph color='#D8D8D8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum, eros et molestie facilisis, nisi est accumsan magna, ut convallis.
          </SectionParagraph>
          <SectionNote color='#7E7E7E'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionNote>
        </SectionContainer>
        <ContactContainer>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactInput type='text' placeholder='Full Name' />
          <ContactInput type='text' placeholder='Email' />
          <ContactButton>Send me a Email!</ContactButton>
        </ContactContainer>
      </Section>
      <Footer>
        Desenvolvido por: github.com/andbmarques
      </Footer>
    </div>
);

export default App;
