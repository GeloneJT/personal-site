import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jelani Thomas's personal website. Full Stack Web Developer, "
    + '...'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p>Welcome to my portfolio. Please enjoy your experience while here as you read more <Link to="/about">about me</Link>.
        View my {' '}
        <Link to="/resume">resume</Link> to gain insight into my transition into the developer role, {' '}
        and explore <Link to="/projects">projects</Link> I&apos;m particularly proud to have worked on in the past and continuously work to improve.
        If I have peaked your interest , and you would like to delve into more feel free to <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/GeloneJT/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
