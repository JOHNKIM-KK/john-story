"use client";

import type { Post } from "@/service/post";
import { useState } from "react";
import PostsGrid from "@/components/PostsGrid";
import Categories from "@/components/Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POST = "All Posts";

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState<string>(ALL_POST);
  const filtered =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className={"flex m-4"}>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POST, ...categories]}
        selected={selected}
        onCLick={setSelected}
      />
    </section>
  );
};

export default FilterablePosts;
