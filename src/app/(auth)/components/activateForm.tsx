"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { actiavteAccount } from "@/lib/actions/activate-account";
import { useFormState } from "react-dom";

export default function ActivateForm() {
  const [errorState, dispatch] = useFormState(actiavteAccount, undefined);

  return (
    <form action={dispatch} method="post" className="w-full mt-8">
      <div className="mb-4">
        <Input
          type="input"
          name="code"
          label="Code"
          placeholder="123456"
          error={errorState?.fieldErrors.code}
          required
        />
      </div>
      <Button text="Activate Account" type="submit" variant="blue" rounded />
    </form>
  );
}
