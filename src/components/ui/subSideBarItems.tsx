'use client'
import Link from "next/link";

interface subSideBarItemProps {
  labelSub: string;
  subHref: string;
  active?: boolean;
}
const SubSideBarItems = ({ labelSub, subHref, active }: subSideBarItemProps) => {
  return (
    <Link href={subHref}>
      <div className={`${active ? "active:text-[#01D2B3]" : ""} text-[#655E5E] hover:text-[#01D2B3]`}>{labelSub}</div>
    </Link>
  );
};

export {SubSideBarItems};
