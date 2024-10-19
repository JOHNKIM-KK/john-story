import React from "react";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "John 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className={"bg-gray-100 shadow-lg p-8 m-8 text-center"}>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          웹개발에 진심인 프론트엔드 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>한국딥러닝</p>
        <p>엔코드</p>
        <p>우노솔루션</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Typescript</p>
      </section>
    </>
  );
};

export default AboutPage;
