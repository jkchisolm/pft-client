import { Button } from "@/components/elements/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-10 text-center bg-gradient-to-tr from-light-bg from-5%">
      <nav className="flex flex-row justify-between items-center w-full">
        <div>
          <h2 className="font-bold text-3xl">MyWallet</h2>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link href="/login" className="mr-4">
            <Button text="Login" type="button" variant="white" rounded />
          </Link>
          <Link href="/signup">
            <Button text="Sign Up" type="button" variant="blue" rounded />
          </Link>
        </div>
      </nav>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-cerulean drop-shadow-glow">
          Smart Spending Starts Here.
        </h1>
        <h3 className="text-3xl font-semibold mt-4 w-3/6 self-center">
          MyWallet gives you the insights and tools you need to manage your
          finances and reach your goals.
        </h3>
        <Link href="/signup" className="mt-4">
          <Button
            text="Start Saving Today."
            type="button"
            variant="blue"
            rounded
          />
        </Link>
      </section>
      <footer>
        &copy; {new Date().getFullYear()} MyWallet and Joshua Chisolm. All
        rights reserved.
      </footer>
    </main>
  );
}
