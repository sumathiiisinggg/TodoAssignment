import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <Link to="/about/product">View Product</Link>
    </div>
  );
}

export default About;


