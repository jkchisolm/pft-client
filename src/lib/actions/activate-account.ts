"use server";

import { redirect } from "next/navigation";

export const actiavteAccount = async (
  prevState: unknown,
  formData: FormData
) => {
  const activateInfo = {
    token: formData.get("code") as string,
  };

  // verify code is correctly formatted
  // 6 characters, alphanumeric
  if (!/^[a-zA-Z0-9]{6}$/.test(activateInfo.token)) {
    const error = {
      fieldValues: activateInfo,
      fieldErrors: {
        code: "Invalid code",
      },
    };
    return error;
  }

  // send fetch request as GET w/ token in query param
  const result = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL +
      "auth/activate-account?token=" +
      activateInfo.token,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // response status code 401 is an invalid token
  if (result.status == 401) {
    const error = {
      fieldValues: activateInfo,
      fieldErrors: {
        code: "Invalid code",
      },
    };
    return error;
  }

  // account activated, so we can redirect to the app
  return redirect("/app");
};
