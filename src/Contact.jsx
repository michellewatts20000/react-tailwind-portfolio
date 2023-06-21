import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const data = { name, email, message };
    try {
      await axios.post('http://localhost:3000/.netlify/functions/sendEmail', data);
      setSuccessMessage('Email sent successfully');
      setErrorMessage('');
      setLoading(false);
    } catch (error) {
      setErrorMessage('Error sending email. Please try again.');
      setSuccessMessage('');
      setLoading(false);
    }

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-supernova-500 pb-20 px-20">
      <div className="container mx-auto text-center text-black">
        <h2 className="text-3xl text-black font-bold mb-4">
          Contact Me
        </h2>
        <p className="text-black text-lg md:text-lg lg:text-xl">
          Have a question or want to work together? Feel free to get in touch with me.
        </p>
        <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="bg-white text-black hover:text-supernova-500 text-md font-semibold py-2 px-6 rounded-full" type="submit">
          {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-4 mt-10 rounded-full">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-200 text-red-800 p-4 mb-4">
          {errorMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
