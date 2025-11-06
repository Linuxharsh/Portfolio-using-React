import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email with service ID:", "service_0616r4p");
    console.log("Template ID:", "template_m400ki9");
    console.log("Public key:", "L2iTyUaqkTToIs0-j");

    emailjs
      .sendForm(
        "service_0616r4p", // your service ID
        "template_m400ki9", // your template ID
        form.current,
        "L2iTyUaqkTToIs0-j" // your public key
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        console.error("Error details:", error.text, error.status);
        toast.error("Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you — reach out for any questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-600">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect with me
        </h3>
        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:outline-none focus:border-purple-600"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:outline-none focus:border-purple-600"
          />
          <input
            type="text"
            name="user_subject"
            placeholder="Enter your subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:outline-none focus:border-purple-600"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-500 focus:outline-none focus:border-purple-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-red-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
