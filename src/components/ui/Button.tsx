"use client";
import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "default";
}
const Button = ({ label, variant = "primary" }: ButtonProps) => {
  const variants = {
    primary: "text-lg font-bold bg-[#27C5FF] text-white rounded-3xl flex justify-center items-center p-5",
    secondary: "text-lg font-bold bg-gray-300 text-white rounded-3xl flex justify-center items-center",
    default: "text-lg font-bold text-[#01D2B3] rounded-3xl flex justify-center items-center",
  };
  return <button className={`${variants[variant]} w-full h-full`}>{label}</button>;
};

export { Button };
