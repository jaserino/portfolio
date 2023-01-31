import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import twitter from '../assets/img/twitter.svg';
import resume from '../assets/img/resume.svg';
import CV from '../assets/img/JSresume.pdf';
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  // saving state and adding removing scroll if user scrolls
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clickedActive = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"></img>
      </Navbar.Brand>
      <Container>
        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            className={
              activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => clickedActive('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => clickedActive('skills')}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => clickedActive('projects')}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#interests"
            className={
              activeLink === 'interests' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => clickedActive('interests')}
          >
            Interests
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://github.com/jaserino">
              <img src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/jaredserino/">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://twitter.com/jare_ser">
              <img src={twitter} alt="" />
            </a>
            <a href={CV} download>
              <img src={resume} alt="" />
            </a>
          </div>
        </span>
      </Container>
    </Navbar>
  );
};
