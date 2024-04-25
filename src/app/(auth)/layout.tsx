export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div
        className="flex flex-col justify-start items-center bg-white 
                      border-2 rounded-lg p-4 w-1/2 shadow-lg drop-shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
