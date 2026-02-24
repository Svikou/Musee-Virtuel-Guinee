export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` relative min-h-screen  `}>
        <div className="px-8 md:px-16 lg:px-16">
          <div
            className="fixed inset-0 bg-repeat-y bg-top "
            style={{
              backgroundImage: `url('/BG_1.png')`,
              backgroundSize: "100% auto",
            }}
          />
          <div className="relative z-10">
            <div className="backdrop-blur-lg bg-black/10 rounded-3xl p-4 sm:p-2 md:p-2 lg:p-2 w-full mx-auto my-4 sm:my-6 md:my-8 border-2 border-white/30 min-h-[60vh]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
