import React from "react";
import type { Post } from "@/service/post";
import PostCard from "@/components/PostCard";

type Props = { posts: Post[] };

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul
      className={
        "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }
    >
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
