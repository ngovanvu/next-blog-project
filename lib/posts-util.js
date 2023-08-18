import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts"); //folder post chứ tệp md (1) lấy đường dẫn, postsDirectory C:\Users\DELL\Desktop\project-blog-next\posts
// console.log("postsDirectory", postsDirectory);

export function getPostFile() {
  return fs.readdirSync(postsDirectory); //(2) đọc nội dung một cách đồng bộ (đọc ở đường dẫn 1) [ 'getting-started-with-nextjs.md' ] trả về một mảng gồm các file có trong forder post
  // console.log("postFiles", postFiles);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extention (loại bỏ phần mở rộng tập tin cuối cùng thay thế bằng "" | xóa đuôi .md)

  const filePath = path.join(postsDirectory, `${postSlug}.md`); //(3) xây dựng đường dẫn đầy đủ, filePath C:\Users\DELL\Desktop\project-blog-next\posts\getting-started-with-nextjs.md
  // console.log("filePath", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8"); //(4)đọc nội dung của file, đây là dạng string, nội dung trong file md
  // console.log("fileContent", fileContent);
  //* cái mà chúng ta chuyển một string, matter trả về một object có 2 properties(thuộc tính) cùng với data property cho metadata
  //* vì vậy data property chứa meta data như một javascript object và content property . Trong đó có actual content the markdown text dưới dạng string
  //*  matter(); sử dụng object destructuring(phá hủy đối tượng) để kéo 2 thuộc tính này ra khỏi đối tượng được trả về lưu trữ dưới các biến đặc biệt (data và content không đặt tên khác được)
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export const getAllPosts = () => {
  const postFiles = getPostFile();
  // console.log("postFiles", postFiles);

  const allPosts = postFiles.map((postFile) => {
    // console.log("postFileeee", postFile);
    return getPostData(postFile);
  });
  // console.log("allPosts", allPosts);
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return sortedPosts;
};

// Tại folder post (chứa file md) kiểm tra:
//chúng ta có bao nhiêu file markdown và xem qua các file đó để lấy metadata cho tất cả các file đó

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.filter((post) => post.isFeatured);
  return featuredPost;
}

// const postsDirectory = path.join(process.cwd(), "posts"); //folder post chứ tệp md (1) lấy đường dẫn, postsDirectory C:\Users\DELL\Desktop\project-blog-next\posts
//* // console.log("postsDirectory", postsDirectory);
// function getPostData(fileName) {
//   const filePath = path.join(postsDirectory, fileName); //(3) xây dựng đường dẫn đầy đủ, filePath C:\Users\DELL\Desktop\project-blog-next\posts\getting-started-with-nextjs.md
//*   // console.log("filePath", filePath);
//   const fileContent = fs.readFileSync(filePath, "utf-8"); //(4)đọc nội dung của file, đây là dạng string, nội dung trong file md
//*   // console.log("fileContent", fileContent);
//   //* cái mà chúng ta chuyển một string, matter trả về một object có 2 properties(thuộc tính) cùng với data property cho metadata
//   //* vì vậy data property chứa meta data như một javascript object và content property . Trong đó có actual content the markdown text dưới dạng string
//   //*  matter(); sử dụng object destructuring(phá hủy đối tượng) để kéo 2 thuộc tính này ra khỏi đối tượng được trả về lưu trữ dưới các biến đặc biệt (data và content không đặt tên khác được)
//   const { data, content } = matter(fileContent);

//   const postSlug = fileName.replace(/\.md$/, ""); // remove the file extention (loại bỏ phần mở rộng tập tin cuối cùng thay thế bằng "" | xóa đuôi .md)

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };
//   return postData;
// }

// export const getAllPosts = () => {
//   const postFiles = fs.readdirSync(postsDirectory); //(2) đọc nội dung một cách đồng bộ (đọc ở đường dẫn 1) [ 'getting-started-with-nextjs.md' ]
//   //* console.log("postFiles", postFiles);

//   const allPosts = postFiles.map((postFile) => {
//     //* console.log("postFileeee", postFile);
//     return getPostData(postFile);
//   });
//   //* console.log("allPosts", allPosts);
//   const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
//   return sortedPosts;
// };

// //* Tại folder post (chứa file md) kiểm tra:
// //* chúng ta có bao nhiêu file markdown và xem qua các file đó để lấy metadata cho tất cả các file đó

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();
//   const featuredPost = allPosts.filter((post) => post.isFeatured);
//   return featuredPost;
// }
