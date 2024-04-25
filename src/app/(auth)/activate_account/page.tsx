import ActivateForm from "../components/activateForm";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Activate your account</h1>
      <p className="mt-4">
        We&apos;ve sent you a code. Enter it here to verify your account.
      </p>
      <ActivateForm />
    </>
  );
}
