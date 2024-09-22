import React from "react";
import Link from "next/link";
import Header from "../component/header";
import Footer from "../component/footer";

const BlogPage = () => {
  return (
    <div>
      <Header />

      <Link className="bg-teal-950 p-8 inline-block text-white" href="/">
        Return to home page.
      </Link>
      <Footer />
    </div>
  );
};

export default BlogPage;
