import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider, Hr } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <Hr />
      <SectionText>
        Hi There, I am <p style={{fontWeight: "bolder", color:"white"}}> Ram Pandey | 4th year Computer Science Student | B.E. from BIT Bangalore </p> An aspiring Full stack developer with aptness in Cloud Infrastructures.
        <br />
        Always ready and flexible to learn new technologies, and adaptable to work environments.          
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/ram-pandey-b969a9190/')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
