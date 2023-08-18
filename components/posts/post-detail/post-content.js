import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

// const DYMMY_POSTS = {
//   title: "Stating nextjs",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   slug: "getting-started-with-nextjs",
//   content: "# This is a firts post",
// };

SyntaxHighlighter.registerLanguage("js",js);
SyntaxHighlighter.registerLanguage("css",css);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/image/posts/${post.slug}/${post.image}`;

  // ghi đè nội dung trong file md để tối ưu image và paragraph
  const customRenderers = {
    // img(image) {
    //   return <Image src={`/image/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />;
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image src={`/image/posts/${post.slug}/${image.properties.src}`} alt={image.alt} width={600} height={300} />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return <SyntaxHighlighter style={atomDark} language={language} children={children} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {console.log(customRenderers)}
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
