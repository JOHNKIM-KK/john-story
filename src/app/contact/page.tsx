import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "John에게 메일 보내기",
};

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillInstagram />, url: "" },
];

const ContactPage = () => {
  return (
    <section className={"flex flex-col items-center"}>
      <h2 className={"text-3xl font-bold my-2"}>Contact Me</h2>
      <p>acspp2017@gmail.com</p>
      <ul className={"flex gap-4 my-2"}>
        {LINKS.map(({ icon, url }, index) => (
          <a
            href={url}
            key={index}
            target={"_blank"}
            rel={"noreferrer"}
            className={"text-5xl hover:text-blue-500"}
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className={"text-3xl font-bold my-8"}>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
