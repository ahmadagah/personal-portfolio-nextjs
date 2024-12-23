export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-8 sm:px-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 sm:p-8">
        {children}
      </div>
    </section>
  );
}
