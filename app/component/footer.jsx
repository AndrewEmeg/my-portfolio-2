import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-16 px-8 sm:px-16 font-jet text-white bg-gradient-to-br from-brand-200 to-teal-300">
      <h2 className="font-bold text-3xl mb-16 tracking-tight">
        Connect with me on Social
      </h2>
      <div className="flex gap-4 mb-1">
        <Image
          src="/images/linkedin-1.png"
          alt="Description of the image"
          width={25}
          height={25}
          className="rounded-md filter invert"
        />
        <Image
          src="/images/github-1.png"
          alt="Description of the image"
          width={25}
          height={25}
          className="rounded-md filter invert"
        />
      </div>
      <div className="text-xl">
        <span>Email: </span>
        <a href="mailto:info@codercomedy.com" className="contact-email">
          andrewemeghebo2023@gmail.com
        </a>
      </div>
      <div className="text-xl pb-16">
        <span>Phone: </span>
        <a href="tel:(123) 456-7890" className="contact-phone">
          (318) 350-7400
        </a>
      </div>
      <div>
        Quick Links: Home | About | Projects | Experience | Contact Social
        Media: LinkedIn | GitHub | Twitter © 2024 Andrew | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
