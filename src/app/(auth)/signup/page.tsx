"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <form className="w-full mt-8">
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="john@doe.com"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="string"
            name="name"
            label="Name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="********"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="********"
            required
          />
        </div>
        <Button text="Sign In" type="submit" variant="blue" rounded />
      </form>
    </>
  );
}
