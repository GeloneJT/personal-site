import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jelani Thomas</h2>
        <p><a href="mailto:eyeglass0324@gmail.com">eyeglass0324@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jelani. I am a{' '}
        <a href="https://bootcamp.rutgers.edu/coding/">
          Rutgers Coding Bootcamp
        </a>{' '}
        graduate that specializes in Full Stack Web Development. Since
        graduation, I dove into various coding languages to get a true
        understanding of the essential aspects of what it means to be a
        developer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jelani Thomas <Link to="/">jelanijthomas.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
