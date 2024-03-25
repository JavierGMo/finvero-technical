export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 sm:h-screen mt-6">
      {children}
    </div>
  );
}
