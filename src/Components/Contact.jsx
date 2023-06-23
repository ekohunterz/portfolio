import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_30ghp26", "template_fkz8nqx", form.current, "o2fVgPqnXgrsimN67").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <section id="contact" className="bg-slate-200 min-h-screen pb-10">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="font-bold text-black text-4xl text-center pt-20">
            <i className="fas fa-phone" /> Get In <span className="text-secondary">Touch</span>
          </h1>
          <h1 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="text-center text-xl leading-relaxed">
            Contact Me
          </h1>
          <div className="flex flex-wrap w-5/6 mx-auto mt-10 gap-y-6">
            <div data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" className="lg:w-1/3 w-full flex flex-col gap-6">
              <div className="rounded-md shadow-md p-6 bg-white items-center flex flex-col">
                <i className="fas fa-envelope text-4xl" />
                <label className="text-xl font-semibold">Email</label>
                <p className="leading-relaxed">ekohunterz@gmail.com</p>
                <a href="mailto:ekohunterz@gmail.com" className="mt-4 text-primary hover:text-secondary" target="_blank">
                  Send a message
                </a>
              </div>
              <div className="rounded-md shadow-md p-6 bg-white items-center flex flex-col">
                <i className="fab fa-whatsapp text-4xl" />
                <label className="text-xl font-semibold">WhatsApp</label>
                <p className="leading-relaxed">081283255389</p>
                <a href="https://wa.me/+6281283255389" className="mt-4 text-primary hover:text-secondary" target="_blank">
                  Send a message
                </a>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="lg:w-1/2 w-full shadow-md rounded-md mx-auto p-6 bg-white">
              <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" className="border-2 border-primary rounded-md p-2" />
                <label>Email</label>
                <input type="email" name="user_email" className="border-2 border-primary rounded-md p-2" />
                <label>Message</label>
                <textarea name="message" className="border-2 border-primary rounded-md p-2" />
                <button type="submit" className="mt-2 bg-primary rounded-lg p-2 lg:w-1/4 ml-auto text-white hover:opacity-70 transition duration-300 ease-in-out">
                  <i className="fas fa-paper-plane" /> Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
