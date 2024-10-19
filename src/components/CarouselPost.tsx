import React from "react";
import { getNonFeaturedPosts } from "@/service/post";
import PostCard from "@/components/PostCard";
import MultiCarousel from "@/components/MultiCarousel";

const CarouselPost = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className={"my-8"}>
      <h2 className={"text-2xl font-bold my-2 mx-4"}>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPost;
