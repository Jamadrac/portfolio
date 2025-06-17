import React, { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const RatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    // Get credentials from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL;

    // Debug environment variables
    useEffect(() => {
        console.log('EmailJS Config:', 
            serviceID ? `Service ID: ${serviceID.substring(0, 5)}...` : 'Service ID missing',
            templateID ? `Template ID: ${templateID.substring(0, 5)}...` : 'Template ID missing',
            publicKey ? `Public Key: ${publicKey.substring(0, 5)}...` : 'Public Key missing',
            recipientEmail ? `Recipient Email: ${recipientEmail}` : 'Recipient Email missing'
        );
        // Initialize EmailJS
        emailjs.init(publicKey);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) return;

        if (!serviceID || !templateID || !publicKey || !recipientEmail) {
            console.error("EmailJS credentials or recipient email missing in .env file");
            setSubmitStatus('error');
            setErrorMessage('Configuration error: Email settings are incomplete.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        // Prepare template parameters
        const templateParams = {
            rating: rating,
            comment: comment || 'No comment provided',
            from_email: email || 'anonymous@customer.com',
            to_email: recipientEmail,
            reply_to: email || 'no-reply@example.com',
            to_name: 'Portfolio Viewer',
            from_name: email ? email.split('@')[0] : 'Anonymous Visitor',
            subject: `Portfolio Rating: ${rating} Stars`,
            message: `Rating: ${rating} stars\n\nComment: ${comment || 'No comment provided'}`
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
               setSubmitStatus('success');
               setTimeout(() => {
                   setIsOpen(false);
                   resetForm();
               }, 2000); 
            })
            .catch((err) => {
               console.error('FAILED...', err);
               setSubmitStatus('error');
               setErrorMessage(err.text || 'Failed to send email. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const resetForm = () => {
        setRating(0);
        setHover(0);
        setComment('');
        setEmail('');
        setIsSubmitting(false);
        setSubmitStatus(null);
        setErrorMessage('');
    }

    const handleCancel = () => {
        setIsOpen(false);
        resetForm();
    }

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isOpen ? (
                <form ref={form} onSubmit={handleSubmit} className="bg-slate-800 p-4 rounded-lg shadow-lg w-72 border border-cyan-600">
                    <h3 className="text-center font-semibold mb-2 text-white">Rate My Portfolio</h3>
                    
                    <div className="flex gap-1 mb-2 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className="cursor-pointer text-2xl"
                                color={star <= (hover || rating) ? "#0891b2" : "#4b5563"}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(rating)}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                    
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-md text-sm bg-slate-700 text-white border-slate-600 placeholder-gray-400"
                        disabled={isSubmitting}
                    />
                    <textarea
                        name="comment"
                        placeholder="Add your comment (optional)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-md text-sm bg-slate-700 text-white border-slate-600 placeholder-gray-400"
                        rows="3"
                        disabled={isSubmitting}
                    />
                    
                    {submitStatus === 'success' && (
                        <p className="text-cyan-400 text-sm mb-2">Thank you for your feedback!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-400 text-sm mb-2">
                            {errorMessage}
                        </p>
                    )}

                    <div className="flex justify-between">
                        <button 
                            type="button"
                            onClick={handleCancel}
                            className="text-sm text-gray-400 hover:text-gray-200"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className={`text-sm ${rating > 0 && !isSubmitting ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-600 cursor-not-allowed'} text-white px-4 py-1 rounded`}
                            disabled={rating === 0 || isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors duration-300"
                >
                    <FaStar className="text-xl" />
                    Rate Portfolio
                </button>
            )}
        </div>
    );
};

export default RatingButton;
