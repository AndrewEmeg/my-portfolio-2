import Image from "next/image";
// import Footer from "../component/footer";
import Header from "../component/header";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="appi bg-gradient-to-r from-cyan-500 to-blue-50 font-jet">
      <Header />
      <h1 className="text-5xl font-extrabold px-32 pt-48 pb-16">
        My Tech Stack
      </h1>
      <article className="px-32">
        <article className="grid grid-cols-5 gap-8 border-dashed border border-black">
          <div className="flex flex-col items-center">
            <Image
              src="/images/react.png"
              alt="React logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">React</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/firebase.png"
              alt="Firebase logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">Firebase</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/javascript.png"
              alt="JavaScript logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/html-1.png"
              alt="HTML logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/python.png"
              alt="Python logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/css-1.png"
              alt="CSS logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/next-1.png"
              alt="Next logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/tailwind.png"
              alt="Tailwind logo"
              width={100}
              height={100}

              //   className="rounded-md right-10 absolute top-0 -z-100"
            />
            <span className="font-bold text-2xl">Tailwind</span>
          </div>
        </article>
      </article>

      <h1 className="text-5xl font-extrabold px-32 pt-48 pb-16">My Projects</h1>
      <article className="grid grid-cols-3 gap-8 px-32">
        <div className="bg-brand-400 flex flex-col ">
          <Image
            src="/images/ml.png"
            alt="Shelfie Project Demo"
            width={300}
            height={300}
            layout="responsive"

            //   className="rounded-md right-10 absolute top-0 -z-50"
          />

          <h2 className="px-8 pt-8 font-extrabold text-3xl tracking-tighter">
            Shelfie – Your Personal Book Review Hub{" "}
          </h2>
          <span className="px-8 font-light text-xl pb-8 inline-block">
            Stack: React | JavaScript | Firebase | Tailwind CSS
          </span>
          <p className="text-xl px-8 pb-16 font-light tracking-tighter">
            I designed Shelfie web application for book lovers to share and
            discover book reviews.
            <span className="font-bold"> With 19+ real-world users</span>, the
            platform fosters an engaging environment where users can create
            accounts, leave reviews, and interact with others&apos; reviews. By
            implementing robust user{" "}
            <span className="font-bold">authentication using Firebase</span>, I
            ensured secure and seamless sign-ups via email, password, or Google
            accounts. The integration of the{" "}
            <span className="font-bold">
              Google Books API with JavaScript&apos;s async/await
            </span>
            functionality guarantees users access to a vast library of books,
            making discovery easy and enjoyable. Hosted on Firebase, Shelfie
            benefits from scalable and reliable deployment. This project
            highlights my{" "}
            <span className="font-bold">full-stack development skills</span>,
            from real-time data handling and{" "}
            <span className="font-bold">API integration</span>
            to creating a clean and accessible UI, all while fostering a
            passionate community of readers.
          </p>
          <div className="mt-auto p-8 font-extrabold ">
            <Link
              className="flex gap-4 items-center py-4 px-8 bg-brand-200 w-full text-xl text-center justify-around text-white hover:bg-brand-400 hover:border-brand-300  hover:shadow-custom-inset hover:text-brand-300 transition-all duration-300 ease-in-out"
              target="_blank"
              href="https://shelfie-app-73320.web.app/"
            >
              <span>I&apos;d love to see this project</span>
              <ion-icon
                size="large"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </Link>
          </div>
        </div>
        <div className="bg-brand-400 flex flex-col ">
          <Image
            src="/images/cc-min.png"
            alt="Shelfie Project Demo"
            width={300}
            height={300}
            layout="responsive"

            //   className="rounded-md right-10 absolute top-0 -z-50"
          />

          <h2 className="px-8 pt-8 font-extrabold text-3xl tracking-tighter">
            CoderComedy – Jokes for Developers{" "}
          </h2>
          <span className="px-8 font-light text-xl pb-8 inline-block">
            Stack: JavaScript | React | CSS
          </span>
          <p className="text-xl px-8 pb-16 font-light tracking-tighter">
            CoderComedy is an interactive web platform that generates and
            displays jokes specifically for developers and programmers. This
            project was a fun way to explore
            <span className="font-bold">APIs and DOM manipulation</span>, while
            also honing my skills in{" "}
            <span className="font-bold">user interaction</span> and interface
            design. Built with <span className="font-bold">React</span>, the
            website offers an intuitive layout, making it easy for users to
            generate and enjoy tech-specific humor. By integrating the{" "}
            <span className="font-bold">
              Joke API using JavaScript&apos;s async/await
            </span>
            , I enabled seamless asynchronous joke fetching and display. The
            platform features a{" "}
            <span className="font-bold">fully responsive design</span>, with
            carefully applied <span className="font-bold">CSS styling</span> to
            ensure a visually appealing and user-friendly experience on all
            devices. This project highlights my ability to build engaging web
            applications that prioritize both functionality and fun.
          </p>
          <div className="mt-auto p-8 font-extrabold ">
            <Link
              className="flex gap-4 items-center py-4 px-8 bg-brand-200 w-full text-xl text-center justify-around text-white hover:bg-brand-400 hover:border-brand-300  hover:shadow-custom-inset hover:text-brand-300 transition-all duration-300 ease-in-out"
              target="_blank"
              href="https://coder-comedy.netlify.app/"
            >
              <span>I&apos;d love to see this project</span>
              <ion-icon
                size="large"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </Link>
          </div>
        </div>
        <div className="bg-brand-400 flex flex-col ">
          <Image
            src="/images/of-min.png"
            alt="Shelfie Project Demo"
            width={300}
            height={300}
            layout="responsive"

            //   className="rounded-md right-10 absolute top-0 -z-50"
          />

          <h2 className="px-8 pt-8 font-extrabold text-3xl tracking-tighter">
            Omnifood – Revolutionizing Meal Planning
          </h2>
          <span className="px-8 font-light text-xl pb-8 inline-block">
            Stack: HTML | CSS | JavaScript | Netlify
          </span>
          <p className="text-xl px-8 pb-16 font-light tracking-tighter">
            Omnifood is a landing page designed to help users explore and choose
            healthy meal plans with ease. It emphasizes a{" "}
            <span className="font-bold">visually appealing</span> and{" "}
            <span className="font-bold">user-friendly experience</span>. The
            design is <span className="font-bold">fully responsive</span>, built
            with <span className="font-bold">CSS Grid, Flexbox,</span> and
            <span className="font-bold"> media queries</span> to ensure smooth
            functionality across all devices. The project also prioritizes{" "}
            <span className="font-bold">high performance</span>, achieving over
            90% scores in performance and accessibility, ensuring fast load
            times and an{" "}
            <span className="font-bold">inclusive user experience</span>. With a
            perfect{" "}
            <span className="font-bold">100% in SEO and best practices</span>,
            the site enhances visibility and searchability. Finally, it is
            seamlessly deployed on <span className="font-bold">Netlify</span>,
            providing a reliable hosting environment.
          </p>
          <div className="mt-auto p-8 font-extrabold ">
            <Link
              className="flex gap-4 items-center bg-brand-200 py-4 px-8 w-full text-xl text-center justify-around text-white hover:bg-brand-400 hover:border-brand-300  hover:shadow-custom-inset hover:text-brand-300 transition-all duration-300 ease-in-out"
              target="_blank"
              href="https://omnifood-andrew-emeghebo.netlify.app/"
            >
              {" "}
              <span>I&apos;d love to see this project</span>
              <ion-icon
                size="large"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </Link>
          </div>
        </div>
      </article>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
