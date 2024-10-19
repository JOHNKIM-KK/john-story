import type { EmailData } from "@/service/email";

export const sendContactEmail = async (email: EmailData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Server request failed");
  }

  return data;
};
