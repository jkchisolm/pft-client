import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { signup } from "@/lib/actions/signup";
import { useFormState } from "react-dom";
import { SignupForm } from "../components/signupForm";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Create an account</h1>
      <SignupForm />
    </>
  );
}
