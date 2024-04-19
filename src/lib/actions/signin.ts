"use server";

import { redirect } from "next/navigation";

export const signin = async (prevState: unknown, formData: FormData) => {
  const authInfo = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authInfo),
  });

  if (result.status == 404) {
    const error = {
      fieldValues: authInfo,
      fieldErrors: {
        email: "Email not found",
        password: null,
      },
    };
    return error;
  }

  if (result.status == 401) {
    const error = {
      fieldValues: authInfo,
      fieldErrors: {
        email: null,
        password: "Incorrect password",
      },
    };
    return error;
  }

  return redirect("/app");
};
