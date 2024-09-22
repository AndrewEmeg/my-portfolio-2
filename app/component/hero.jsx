import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="font-rubik">
      <div className="flex gap-4 flex-col py-48 px-8 sm:px-16 text-center lg:grid lg:grid-cols-2 lg:items-center">
        <div className="flex gap-4 lg:gap-0 flex-col lg:text-left">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter lg:pb-6 font-jet">
            Innovative Web Developer & Problem Solver
          </h1>
          <h2 className="text-3xl font-light lg:pb-12 font-jet tracking-tighter">
            I&apos;m that developer who designs what he builds.
          </h2>
          <Link
            href="/projects"
            className="bg-brand-200 mb-8 text-gray-100 px-8 py-4 self-center text-xl lg:self-start rounded-lg font-jet"
          >
            View my work
          </Link>
        </div>
        <Image
          src="/images/pp.png"
          alt="Description of the image"
          width={50}
          height={5}
          layout="responsive"
          className="rounded-md hidden"
        />
        <Image
          src="/images/standd.png"
          alt="Description of the image"
          width={700}
          height={500}
          className="rounded-md right-10 absolute top-0 -z-50"
        />
      </div>
    </div>
  );
};

export default Hero;
