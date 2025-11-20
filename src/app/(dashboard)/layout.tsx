export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="bg-green-300 p-4 fixed h-screen">
      <h1>Dashboard Layout</h1>
      </div>
      <div className="h-[200vh]">
      {children}
      </div>
    </div>
  );
}
