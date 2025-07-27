import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kiljsej',
      'template_42jptbm',
      form.current,
      '6b7GQPf6tj1a36Aep'
    )
    .then(
      (result) => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        toast.error('Failed to send message. Please try again.');
        console.log(error.text);
      }
    );
  };

  return (
    <div id='contact' className="mt-20 ml-[10%] mr-[10%] flex flex-col items-center text-white space-y-5 md:mx-[10%] text-center">
      <div className="border-b-4 border-[#8245ec] text-4xl font-bold">
        CONTACT
      </div>
      <div className="text-2xl font-semibold text-gray-400 max-w-4xl">
        I’d love to hear from you—reach out for any opportunities or questions!
      </div>

      {/* form */}
      <form ref={form} onSubmit={sendEmail}  action="" className="border border-gray-600 p-6 max-w-xl mx-auto rounded-lg mt-10 bg-[#131025]">
  <h2 className="text-3xl font-semibold mb-4 text-white">Connect With Me</h2>

  <div className="flex flex-col gap-5 mt-10">
    <input
      type="text"
      placeholder="Your Name .."
      name='user_name'
      className="border rounded md:w-120 border-gray-600 px-2 py-3 bg-transparent text-white placeholder-gray-400"
    />
    <input
      type="email"
      placeholder="Your Email .."
      name='user_email'
      className="border rounded md:w-120 border-gray-600 px-2 py-3 bg-transparent text-white placeholder-gray-400"
    />
    <input
      type="text"
      placeholder="Subject"
      name='subject'
      className="border rounded md:w-120 border-gray-600 px-2 py-3 bg-transparent text-white placeholder-gray-400"
    />
    <textarea
      placeholder="Message"
      name='message'
      rows="8"
      className="border rounded md:w-120 border-gray-600 px-2 md:py-3 bg-transparent text-white placeholder-gray-400 resize-none"
    ></textarea>
    <button
      type="submit"
      className="mt-2 bg-white md:w-120 text-black font-semibold py-3 px-6 rounded 
       bg-gradient-to-l from-purple-600 to-pink-600 
            hover:scale-102 transition"
    >
      Send Message
    </button>
  </div>
</form>

    </div>
  )
}

export default Contact
