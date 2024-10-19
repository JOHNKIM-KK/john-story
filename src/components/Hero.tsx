import React from "react";

import Image from "next/image";
import profileImage from "../../public/images/profile.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={"text-center"}>
      <Image
        className={"mx-auto rounded-full"}
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className={"text-3xl font-bold mt-2"}>{"Hi, I`m John"}</h2>
      <h3 className={"text-xl font-semibold"}>Frontend Engineer</h3>
      <p>도전적인 개발자, 드럼코더 존</p>
      <Link href={"contact"}>
        <button className={"bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2"}>
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
