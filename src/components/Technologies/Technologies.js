import React from 'react';
import { DiFirebase, DiReact, DiGit, DiCode, DiWindows, DiDigitalOcean } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="Technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the Web Development world. From Back-End to Design.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>  
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem> 
      <ListItem>
        <DiDigitalOcean size="3rem"/>
        <ListContainer>
          <ListTitle>Cloud-Computing</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS and other hosting platforms
          </ListParagraph>
        </ListContainer>
      </ListItem> 
      <ListItem>
        <DiWindows size="3rem"/>
        <ListContainer>
          <ListTitle>Industry Knowledge</ListTitle>
          <ListParagraph>
            Understanding of<br />
            DSA, OOPs, Operating System, computer organization and CyberSecurity 
          </ListParagraph>
        </ListContainer>
      </ListItem> 
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            well acquainted with languages-<br />
            C++ , Javascript and Python 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem"/>
        <ListContainer>
          <ListTitle>Modern Applications</ListTitle>
          <ListParagraph>
            well acquainted applications such as<br />
            GIT, Docker, kebernetes, MS Office Tools. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
