export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-cerulean">
      <div className="flex flex-col justify-start items-center bg-bittersweet text-white p-4 rounded-sm w-1/2">
        {children}
      </div>
    </div>
  );
}
