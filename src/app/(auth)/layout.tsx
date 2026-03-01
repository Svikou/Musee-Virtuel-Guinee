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
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="backdrop-blur-lg bg-black/10 rounded-3xl border-2 border-white/30 px-6 py-2 w-fit">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
