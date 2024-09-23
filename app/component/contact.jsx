import React from "react";

const Contact = () => {
  return (
    <form className="p-16">
      <div className="font-jet w-1/2">
        <h2 className="text-5xl font-extrabold tracking-tighter pb-4">
          Get in touch with me.
        </h2>
        <p className="text-2xl font-normal pb-8 tracking-tighter">
          You&apos;ve got a project idea, or just want to yap about tech and web
          development? <br /> Whatever it is... you&apos;ll be amazed how fast
          I&apos;ll respond.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 font-jet pb-4">
          <label htmlFor="first-name">
            <input
              type="text"
              name="first-name"
              id="last-name"
              placeholder="First Name"
              className="p-4 w-full"
            />
          </label>
          <label htmlFor="last-name">
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              className="p-4 w-full"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-4 w-full"
            />
          </label>
          <label htmlFor="phone-number">
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="Phone Number"
              className="p-4 w-full"
            />
          </label>
        </div>
        <label htmlFor="phone-number">
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="So, what's up?"
            className="p-4 w-full h-[200px] mb-4"
          />
        </label>
        <button className="bg-brand-200 py-4 x-8 w-full text-xl text-center justify-around text-white hover:bg-white hover:border-brand-200  hover:shadow-custom-inset hover:text-brand-200 transition-all duration-300 ease-in-out">
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
