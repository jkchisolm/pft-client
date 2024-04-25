"use server";

import { redirect } from "next/navigation";

export const signup = async (prevState: unknown, formData: FormData) => {
  const authInfo = {
    email: formData.get("email") as string,
    firstname: formData.get("firstname") as string,
    lastname: formData.get("lastname") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  // Check if the password and confirmPassword fields match
  if (authInfo.password !== authInfo.confirmPassword) {
    const error = {
      fieldValues: authInfo,
      fieldErrors: {
        email: null,
        firstname: null,
        lastname: null,
        password: "Passwords do not match",
        confirmPassword: "Passwords do not match",
      },
    };
    return error;
  }

  const result = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL + "auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authInfo),
    }
  );

  console.log(result.status);

  if (result.status == 400) {
    const error = {
      fieldValues: authInfo,
      fieldErrors: {
        email: "Email already exists",
        firstname: null,
        lastname: null,
        password: null,
        confirmPassword: null,
      },
    };
    return error;
  }

  return redirect("/activate_account");
};
