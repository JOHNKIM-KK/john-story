import React from "react";
import { getAllPosts } from "@/service/post";
import FilterablePosts from "@/components/FilterablePosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "프론트엔드 관련 블로그 글",
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
