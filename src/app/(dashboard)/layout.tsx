import { Icon } from "@iconify/react";
import { SearchBar } from "@/src/components/ui/SearchBar";
import SideBar from "@/src/components/ui/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex grow">
      <div className="w-71.25 h-auto">
        <SideBar />
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center rounded-xl shadow px-3">
          <div className="flex items-center ">
            <Icon icon="material-symbols:search" width={26} height={26} />
            <SearchBar variant="default"/>
          </div>
          <div className="profile mr-4 rounded-full bg-gray-300 w-12 h-12 flex justify-center items-center text-xl font-bold text-white">
            J
          </div>
        </div>
        
        <div className="mt-9">{children}</div>
      </div>
    </div>
  );
}
