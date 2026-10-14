import { useState } from 'react';

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
      const response = await fetch('https://gleeful-palmier-14211e.netlify.app/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      // Unlike axios, fetch doesn't reject on HTTP error statuses
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
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
    <section id="contact" className="bg-supernova-500 pt-8 pb-20 px-6 tb:px-10">
      <div className="container mx-auto text-center text-black">
        <h2 className="text-4xl text-gray-900 font-semibold mb-4">
          Contact Me
        </h2>

        <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-white ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-3 px-7 rounded-full transition-colors" type="submit">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="bg-green-200 mx-auto max-w-md text-green-800 p-4 mt-10 rounded-full text-center">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="container bg-red-200 mx-auto max-w-md text-red-800 p-4 mt-10 rounded-full text-center">
          {errorMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
