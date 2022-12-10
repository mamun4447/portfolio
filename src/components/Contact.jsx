import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // service_nk2g23v;

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_nk2g23v",
        "template_p2fp7kp",
        event.target,
        "sfTGDMPCn7zIBD1o2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <>
      <h1 className="text-5xl text-center my-5">Send Email</h1>
      <form
        className="flex flex-col lg:w-1/2 mx-auto shadow-2xl border border-spacing-1 border-cyan-400 p-5 rounded-md  mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
          name="name"
          placeholder="Full Name"
        />
        <input
          className="input w-full px-5 my-5  text-black"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="input w-full p-5 h-32  my-5 text-black"
          name="text"
          placeholder="Write your email..."
        />

        <input
          className="btn btn-accent my-5 w-20 mx-auto px-5"
          type="submit"
        />
      </form>
    </>
  );
};

export default Contact;
