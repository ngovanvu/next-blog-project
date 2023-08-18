import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
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
const AllPostPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="a list of all programming-related tutorials and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};
export function getStaticProps() {
  const featuredPost = getAllPosts();
  // console.log(featuredPost);
  return {
    props: {
      posts: featuredPost,
    },
  };
}
export default AllPostPage;
