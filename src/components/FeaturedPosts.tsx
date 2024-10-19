import React from "react";
import PostsGrid from "@/components/PostsGrid";
import { getFeaturedPosts } from "@/service/post";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <section className={"m-4"}>
      <h2 className={"text-2xl font-bold my-2"}>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
