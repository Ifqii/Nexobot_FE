"use client";
import { SideBarItems } from "./SideBarItems";
import { SubSideBarItems } from "./subSideBarItems";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const botMenu = [
  {
    label: "Agent",
    icon: <Icon icon="mingcute:edit-2-fill" width="16" height="16" />,
    href: "/agent",
  },
  {
    label: "Bot Builder",
    icon: <Icon icon="tdesign:system-setting" width="16" height="16" />,
    href: "/bot-builder",
  },
  {
    label: "Integration",
    icon: (
      <Icon
        icon="material-symbols:integration-instructions"
        width="16"
        height="16"
      />
    ),
    href: "/integration",
  },
  {
    label: "AI & Analytic",
    icon: <Icon icon="ri:file-ai-fill" width="16" height="16" />,
    href: "/ai-analytic",
  },
];

const salesMenu = [
  {
    label: "Product Manager",
    icon: <Icon icon="ix:product" width="16" height="16" />,
    href: "/product-manager",
  },
  {
    label: "Sales Menu",
    icon: (
      <Icon
        icon="material-symbols:payment-arrow-down-outline-rounded"
        width="16"
        height="16"
      />
    ),
    href: "/payment",
  },
  {
    label: "Sales Monitoring",
    icon: <Icon icon="grommet-icons:shop" width="16" height="16" />,
    href: "/sales-monitoring",
  },
  {
    label: "Customer",
    icon: <Icon icon="famicons:people" width="16" height="16" />,
    href: "/customer",
  },
];

const mainMenu = [
  {
    label: "Dashboard",
    icon: <Icon icon="mage:dashboard-plus-fill" width="16" height="16" />,
    href: "/dashboard",
  },
  {
    label: "Notification",
    icon: <Icon icon="iconamoon:notification-fill" width="16" height="16" />,
    href: "/notification",
  },
];

const integrationSubMenu = [
  { labelSub: "Whatsapp", subHref: "/integration/whatsapp" },
  { labelSub: "Telegram", subHref: "/integration/telegram" },
  { labelSub: "LLM", subHref: "/integration/llm" },
  { labelSub: "Website", subHref: "/integration/website" },
];

// Page
const SideBar = () => {
  const activePath = usePathname();
  const [openIntegration, setOpenIntregation] = useState(false);

  useEffect(() => {
    setOpenIntregation(activePath === "/integration");
  }, [activePath]);

  return (
    <div className="h-screen w-69 fixed bg-linear-to-b from-[#FFFFFF] to-[#F6F6F6] overflow-y-auto scrollbar-hide">
      <div className="m-5">
        <div className="sticky flex flex-col items-center text-[#01D2B3] mb-7">
          <Icon icon="garden:bot-sparkle-fill-12" width="50" height="50" />
          <h2 className="text-center mt-2.5 font-normal text-2xl">
            NEXCHATBOT
          </h2>
        </div>
        <div>
          <h3 className="font-semibold ml-7.5 text-[#6862624D]">MAIN MENU</h3>
          {mainMenu.map((item) => (
            <SideBarItems
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={activePath.includes(item.href)}
            />
          ))}
        </div>
        {/* Sales Menu */}
        <div>
          <h3 className="font-semibold ml-7 text-[#68626238]">BOT MENU</h3>
          {botMenu.map((item) => {
            if (item.href === "/integration") {
              return (
                <div key={item.href}>
                  <SideBarItems
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    toggle
                    isOpen={openIntegration}
                    active={activePath === "/integration"}
                    onToggle={() => setOpenIntregation(!openIntegration)}
                  />
                  {openIntegration && (
                    <div className="ml-8 flex flex-col gap-3.5">
                      {integrationSubMenu.map((sub) => (
                        <SubSideBarItems
                          key={sub.subHref}
                          labelSub={sub.labelSub}
                          subHref={sub.subHref}
                          active={activePath === sub.subHref}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <SideBarItems
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                active={activePath === item.href}
              />
            );
          })}
        </div>
        {/* Main Menu */}
        <div>
          <h3 className="font-semibold ml-7 text-[#68626238]">SALES MENU</h3>
          {salesMenu.map((item) => (
            <SideBarItems
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={activePath === item.href}
            />
          ))}
        </div>
      </div>

      <div className="relative bottom-0 left-0 flex justify-between items-center h-20 mt-20 border-t-2 px-3.75">
        <div className="flex items-center w-full gap-3.75">
          <span className="Profile rounded-full bg-black w-10 h-10 flex justify-center items-center">
            <Icon
              icon="mdi:account-circle"
              width="32"
              height="32"
              className="text-white"
            />
          </span>
          <div className="flex flex-col">
          <p className="text-sm font-medium">Bayu Skak</p>
          <p className="text-xs text-[#A3A3A3]">Free(gamodal)</p>

          </div>
        </div>
        <p className="text-sm text-[#767373] px-2 py-1 border rounded-lg">Upgrade</p>
      </div>
    </div>
  );
};

export default SideBar;
