import React from "react";
import { getFeaturedPosts, getPostData } from "@/service/post";
import Image from "next/image";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

const PostPage = async ({ params }: Props) => {
  const post = await getPostData(params.slug);
  const { title, path, next, prev } = post;

  return (
    <article
      className={"rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4"}
    >
      <Image
        className={"w-full h-1/5 max-h-[500px]"}
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className={"flex shadow-md"}>
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
