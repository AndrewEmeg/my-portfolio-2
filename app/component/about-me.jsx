import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="font-rubik bg-brand-200 text-white">
      <div className="flex gap-16 flex-col py-48 px-8 sm:px-16 text-center lg:grid lg:grid-cols-2 lg:items-center">
        <Image
          src="/images/6E6A43E2-03A2-4E60-A62F-75BFE6323864_1_105_c.jpeg"
          alt="Description of the image"
          width={50}
          height={5}
          layout="responsive"
          className="rounded-md"
        />
        <div className="flex gap-4 flex-col lg:text-left font-rubik text-xl text-left font-light">
          <h2 className="text-5xl font-bold">About Me</h2>
          <p>
            🚀 Hey there! I&apos;m Andrew, a passionate web developer with a
            unique blend of creativity and technical expertise. My journey began
            in Graphic Design in 2021, and since then, I&apos;ve been on an
            exciting path, combining design and development to create
            functional,{" "}
            <span className="font-medium">
              visually compelling web applications.
            </span>
          </p>
          <p>
            🌟 One of my proudest achievements is the &apos;Shelfie&apos; web
            app, a <span className="font-medium">full-stack platform</span> for
            book lovers, currently with{" "}
            <span className="font-medium">19+ users</span>, built using{" "}
            <span className="font-medium">Firebase, React, Tailwind CSS</span>.
            It offers secure user authentication and integrates the Google Books{" "}
            <span className="font-medium">API</span>, providing a seamless
            experience for readers to share and discover book reviews.
          </p>
          <p>
            🎓 <span className="font-medium">As a 4.0 GPA</span> Computer
            Science sophomore at Grambling State University, I&apos;ve excelled
            in courses like{" "}
            <span className="font-medium">
              Data Structures, Algorithms, Python, and Calculus
            </span>
            . I&apos;m currently taking Computer Organization and Architecture,
            Information Assurance and Security, and Calculus II. My dedication
            to academic excellence has earned me a{" "}
            <span className="font-medium">full scholarship</span> and a
            consistent spot on the President&apos;s List.
          </p>
          <p>
            💻 In my role as Assistant Manager at Grambling State
            University&apos;s Student Technology Center, I lead a team of{" "}
            <span className="font-medium">15 </span>
            employees, ensuring smooth technical support for students. I
            successfully spearheaded the imaging of{" "}
            <span className="font-medium">32</span> new desktop computers with a
            flawless <span className="font-medium">100% success</span> rate
            while maintaining a 95% resolution rate for software and hardware
            issues.
          </p>
          <p>
            💬 My mission is to bridge the gap between design and development,
            creating web experiences that are both beautiful and highly
            functional. Let&apos;s connect and{" "}
            <span className="font-medium">
              collaborate to build something extraordinary together!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
