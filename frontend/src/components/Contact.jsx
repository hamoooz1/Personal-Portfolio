import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h3>Contact</h3>
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;