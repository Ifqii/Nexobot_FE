export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="bg-linear-to-b from-[#eafffc] via-[#ffffff] to-[#C4FAF2] p-4 fixed h-screen w-72 flex flex-col">
        <div>
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        <h1>NEXTCHATBOT</h1>
        </div>
      </div>
      {/* Content */}
      <div className="h-full">{children}</div>
    </div>
  );
}
