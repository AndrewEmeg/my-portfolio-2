"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="absolute h-screen w-screenbg-gradient-to-r from-cyan-500 to-blue-500">
      <div>here&apos;s to the vertical menu</div>
      <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-10"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  ) : (
    <div className="bg-brand-200 text-white flex justify-between items-center p-12 font-rubik font-semibold ">
      <Link href="/" className="text-4xl tracking-tight">
        Desdev
      </Link>
      <nav className="hidden sm:flex gap-8 text-3xl font-light items-center">
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link target="_blank" href="https://www.linkedin.com/in/andrewemeghebo">
          LinkedIn
        </Link>

        {/* <span onClick={}> */}
      </nav>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="block sm:hidden text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default Header;

//   );

// const Header = () => {
//   const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);
//     }
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleSignOut = async (e) => {
//     e.preventDefault();
//     try {
//       // Perform sign out logic here
//       console.log("You have been signed out successfully");
//       router.push("/signin");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleHeaderNavMenu = () => {
//     setIsNavMenuOpen((value) => !value);
//   };

//   const handleGoToProfile = () => {
//     router.push("/home/profile");
//   };

//   const handleGoToHome = () => {
//     router.push("/home");
//   };

//   return (
//     <div className="flex justify-between bg-teal-700 px-16 py-8 items-center relative">
//       <div onClick={handleGoToHome} className="flex gap-6 items-center"></div>
//       <div>
//         {windowWidth < 640 ? (
//           isNavMenuOpen ? (
//             <nav>
//               <ul className="flex flex-col items-end gap-8 absolute top-0 right-0 h-screen w-screen bg-white p-32">
//                 <ion-icon
//                   style={{ color: "#1f766e", width: "44px", height: "44px" }}
//                   name="close-circle-outline"
//                   onClick={handleHeaderNavMenu}
//                 ></ion-icon>
//                 <li className="text-center self-center rounded-lg p-6 font-medium text-3xl text-teal-700">
//                   <Link href="/search">
//                     <a onClick={handleHeaderNavMenu}>Search</a>
//                   </Link>
//                 </li>
//                 <li className="text-center self-center rounded-lg p-6 font-medium text-3xl text-teal-700">
//                   <Link href="/books">
//                     <a onClick={handleHeaderNavMenu}>Books</a>
//                   </Link>
//                 </li>
//                 <li className="text-center self-center rounded-lg p-6 font-medium text-3xl text-teal-700">
//                   <Link href="/feedback">
//                     <a onClick={handleHeaderNavMenu}>FeedBack</a>
//                   </Link>
//                 </li>
//                 <li className="text-center self-center rounded-lg p-6 font-medium text-3xl text-teal-700">
//                   <Link href="/profile">
//                     <a
//                       onClick={() => {
//                         handleHeaderNavMenu();
//                         handleGoToProfile();
//                       }}
//                     >
//                       Profile
//                     </a>
//                   </Link>
//                 </li>
//                 <button
//                   onClick={handleSignOut}
//                   className="rounded-lg p-6 self-center font-medium text-3xl text-teal-700"
//                 >
//                   Sign Out
//                 </button>
//               </ul>
//             </nav>
//           ) : (
//             <ion-icon
//               className="text-white"
//               style={{ color: "white", width: "44px", height: "44px" }}
//               name="menu-outline"
//               size="large"
//               onClick={handleHeaderNavMenu}
//             ></ion-icon>
//           )
//         ) : (
//           <nav>
//             <ul className="flex gap-4">
//               <li className="rounded-lg p-6 font-medium text-3xl text-white bg-teal-700">
//                 <Link href="/search">
//                   <a>Search</a>
//                 </Link>
//               </li>
//               <li className="rounded-lg p-6 font-medium text-3xl text-white bg-teal-700">
//                 <Link href="/books">
//                   <a>Books</a>
//                 </Link>
//               </li>
//               <li className="rounded-lg p-6 font-medium text-3xl text-white bg-teal-700">
//                 <Link href="/feedback">
//                   <a>Feedback</a>
//                 </Link>
//               </li>
//               <li className="rounded-lg p-6 font-medium text-3xl text-white bg-teal-700">
//                 <Link href="/profile">
//                   <a onClick={handleGoToProfile}>Profile</a>
//                 </Link>
//               </li>
//               <button
//                 onClick={handleSignOut}
//                 className="rounded-lg p-6 font-medium text-3xl text-white bg-teal-700"
//               >
//                 Sign Out
//               </button>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
