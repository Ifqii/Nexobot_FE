"use client";
import { motion } from "framer-motion";

interface Props {
  active: "login" | "register";
  onChange: (tab: "login" | "register") => void;
}

function SwitchTabs({ active, onChange }: Props) {
  return (
    <div className="border border-[#DBD5D5] p-2.5 w-100 rounded-[14px] flex relative">
      {["login", "register"].map((tab) => (
        <div
          key={tab}
          className="w-1/2 flex justify-center items-center relative cursor-pointer p-3"
          onClick={() => onChange(tab as "login" | "register")}
        >
          {active === tab && (
            <motion.div
              layoutId="tabBg"
              className="absolute p-3.5 inset-0 rounded-[10px] bg-linear-to-r from-[#01D2B3] to-[#6cf9e4] drop-shadow-[0_10px_10px_rgba(0,255,213,0.5)] shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              initial={false}
              animate={{
                y: active === "login" ? "0%" : "0%",
              }}
            ></motion.div>
          )}

          <span
            className={`relative z-10 text-lg font-normal ${
              active === tab ? "text-white" : "text-[#01D2B3]"
            }`}
          >
            {tab === "login" ? "Login" : "Register"}
          </span>
        </div>
      ))}
    </div>
  );
}

export { SwitchTabs };
