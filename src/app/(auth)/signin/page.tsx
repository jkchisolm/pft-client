"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { signin } from "@/lib/actions/signin";
import { useFormState } from "react-dom";
import SigninForm from "../components/signinForm";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <SigninForm />
    </>
  );
}
