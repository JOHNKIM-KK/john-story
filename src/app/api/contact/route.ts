import * as yup from "yup";
import { sendEmail } from "@/service/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({
        message: "Email send failed",
      }),
      { status: 400 },
    );
  }

  return sendEmail(body) //
    .then(() => {
      return new Response(
        JSON.stringify({
          message: "Email sent",
        }),
        { status: 200 },
      );
    })
    .catch((error) => {
      console.log(error);
      return new Response(
        JSON.stringify({
          message: "Server request failed",
        }),
        { status: 500 },
      );
    });
}
