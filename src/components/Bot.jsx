import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const formData = {
        from_name: form.current.from_name.value,
        from_email: form.current.from_email.value,
        message: form.current.message.value,
        subject: 'New Chat Message from Portfolio',
        to_name: 'Rabbi'  // Your name as the recipient
      };

      const result = await emailjs.send(
        'service_xy5g4g9',
        'template_w91pa4l',
        formData,
        '2Kbm6oxFMVSIdHr0o'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      form.current.reset();
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      setErrorMessage(error.text || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className='text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'>
          <ion-icon name={isOpen ? "close-outline" : "chatbubble-ellipses-outline"}></ion-icon>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 sm:right-8 right-4 w-80 bg-slate-800 rounded-lg shadow-lg z-[999]">
          <div className="bg-cyan-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Send me a message</h3>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-2 bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="text-cyan-400 text-sm text-center font-medium">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-400 text-sm text-center font-medium">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Bot;

