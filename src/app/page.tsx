import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg dark:bg-dark-bg dark:text-white">
      <nav className="flex flex-row justify-between items-center w-full">
        <h2 className="font-bold text-3xl">Personal Finance Tracker</h2>
        <div>buttons</div>
      </nav>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">
          A <span className="text-verdigris drop-shadow-glow">tracker</span> to
          help you{" "}
          <span className="text-bittersweet drop-shadow-glow">
            organize your finances.
          </span>
        </h1>
        <div className="mt-12">
          <button className="bg-cerulean py-4 px-10 shadow-lg rounded-full text-xl font-bold hover:brightness-90">
            Join Now
          </button>
        </div>
      </section>
      <footer className="flex flex-row justify-center items-center">
        &copy; 2024 Joshua Chisolm
      </footer>
    </main>
  );
}
