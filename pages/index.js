import FeaturedPost from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

// const DYMMY_POSTS = [
//   {
//     title: "Stating nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a the reactjs framework",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Stating nextjs 1",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a the reactjs framework",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Stating nextjs 2",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a the reactjs framework",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Stating nextjs 3",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a the reactjs framework",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs4",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>TOM' Blog</title>
        <meta name="description" content="i post about programming and web development." />
        
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  console.log(featuredPost);
  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
