import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Li, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 style={{marginRight:"3rem"}}>
      <Link href="/">
        <a style={{ display:"flex", alignItems:"center", color:"white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#Technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </Li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ram-kp" target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ram-pandey-b969a9190/" target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target='_blank'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
