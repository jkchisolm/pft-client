"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { signup } from "@/lib/actions/signup";
import { useFormState } from "react-dom";

export default function Page() {
  const [errorState, dispatch] = useFormState(signup, undefined);

  return (
    <>
      <h1 className="text-3xl font-bold">Create an account</h1>
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
            type="string"
            name="firstname"
            label="First Name"
            placeholder="John"
            error={errorState?.fieldErrors.firstname}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="string"
            name="lastname"
            label="Last Name"
            placeholder="Doe"
            error={errorState?.fieldErrors.lastname}
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
        <div className="mb-4">
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="********"
            error={errorState?.fieldErrors.confirmPassword}
            required
          />
        </div>
        <Button text="Sign Up" type="submit" variant="blue" rounded />
      </form>
    </>
  );
}
