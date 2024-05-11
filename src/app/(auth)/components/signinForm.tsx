"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { signin } from "@/lib/actions/signin";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function SigninForm() {
  const [errorState, dispatch] = useFormState(signin, undefined);

  return (
    <>
      <h2>
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-cerulean underline hover:brightness-50"
        >
          Create one now.
        </Link>
      </h2>
      <form action={dispatch} method="post" className="w-full mt-8">
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="john@doe.com"
            error={errorState?.fieldErrors.email}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="********"
            error={errorState?.fieldErrors.password}
            required
          />
        </div>
        <Button text="Sign In" type="submit" variant="blue" rounded />
      </form>
    </>
  );
}
