"use server";

import { redirect } from "next/navigation";

export const signin = async (prevState: unknown, formData: FormData) => {
  const authInfo = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL + "auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authInfo),
    }
  );

  if (result.status == 401) {
    const error = {
      fieldValues: authInfo,
      fieldErrors: {
        email: null,
        password: "Incorrect email or password",
      },
    };
    return error;
  }

  return redirect("/app");
};
