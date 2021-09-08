import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Projects Undertaken'},
  { number: '#1600', text: 'Candidate Master @ CodeForces'},
  { number: 15, text: 'Courses taken DSA,OS,OOC,AWS,..', },
  { number: 20, text: 'Github Repositories', },
  { number: '250+', text: 'Linked Connection', },
  { number: 7, text: 'Linked In Accessment Badges', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
