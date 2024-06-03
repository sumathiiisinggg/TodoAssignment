import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>This is the contact page.</p>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

export default Contact;
