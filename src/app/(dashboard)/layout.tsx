// import { SearchBar } from "@/src/components/ui/SearchBar";
// import Image from "next/image";

import SideBar from "@/src/components/ui/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex grow">
      <div className="w-[285px] h-auto">
        <SideBar />
      </div>
      <div className=" flex-1">
        {children}
      </div>
    </div>
  );
}
