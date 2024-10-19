"use client";

import React, { type ChangeEvent, type FormEvent, useState } from "react";
import Banner, { type BannerData } from "@/components/Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "Email sent successfully",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch((error) => {
        setBanner({
          message: error.message,
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className={"w-full max-w-md"}>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className={
          "w-full  flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
        }
      >
        <label htmlFor="from" className={"font-bold"}>
          Your Email
        </label>
        <input
          type="email"
          id={"from"}
          name={"from"}
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className={"text-black"}
        />
        <label htmlFor="subject" className={"font-bold"}>
          Subject
        </label>
        <input
          type="text"
          id={"subject"}
          name={"subject"}
          required
          value={form.subject}
          onChange={onChange}
          className={"text-black"}
        />
        <label htmlFor="message" className={"font-bold"}>
          Message
        </label>
        <textarea
          rows={10}
          id={"message"}
          name={"message"}
          required
          value={form.message}
          onChange={onChange}
          className={"text-black"}
        />
        <button
          className={"bg-yellow-300 text-black font-bold hover:bg-yellow-400"}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
