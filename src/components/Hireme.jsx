import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {      const formData = {
        from_name: e.target.user_name.value,
        from_email: e.target.user_email.value,
        message: e.target.message.value,
        subject: "New Portfolio Contact Message",
        to_name: "Rabbi"  // Your name as the recipient
      };

      const result = await emailjs.send(
        "service_xy5g4g9",
        "template_w91pa4l",
        formData,
        "2Kbm6oxFMVSIdHr0o"
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      e.target.reset();
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.text || "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contact_info = [
    { logo: "mail", text: "rabbikindalo001@gmail.com" },
    { logo: "logo-whatsapp", text: "+260975627608" },
    {
      logo: "location",
      text: "lusaka & remote ",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"              name="from_name"
              placeholder="Your Name"
              required
              className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:border-cyan-600"
            />
            <input
              type="email"              name="from_email"
              placeholder="Your Email Address"
              required
              className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:border-cyan-600"
            />
            <textarea              name="message"
              placeholder="Your Message"
              rows={10}
              required
              className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:border-cyan-600 resize-none"
            ></textarea>
            <div className="relative">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-fit ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
