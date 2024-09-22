import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-48 px-8 sm:px-16">
      <h2 className="font-bold text-5xl font-rubik mb-16 tracking-tight">
        Connect with me on Social
      </h2>
      <div className="flex gap-8 mb-8">
        <Image
          src="/images/linkedin-1.png"
          alt="Description of the image"
          width={50}
          height={50}
          className="rounded-md"
        />
        <Image
          src="/images/github-1.png"
          alt="Description of the image"
          width={50}
          height={50}
          className="rounded-md"
        />
      </div>
      <div className="text-xl">
        <span>Email: </span>
        <a href="mailto:info@codercomedy.com" className="contact-email">
          andrewemeghebo2023@gmail.com
        </a>
      </div>
      <div className="text-xl">
        <span>Phone: </span>
        <a href="tel:(123) 456-7890" className="contact-phone">
          (318) 350-7400
        </a>
      </div>
    </div>
  );
};

export default Footer;
