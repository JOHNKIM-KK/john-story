import path from "node:path";
import { readFile } from "node:fs/promises";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export const getAllPosts = cache(async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export const getFeaturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((p) => p.featured));
};

export const getNonFeaturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((p) => !p.featured));
};

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((p) => p.path === fileName);
  if (!post) throw new Error(`${fileName} Post not found`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");

  return { ...post, content, next, prev };
};
