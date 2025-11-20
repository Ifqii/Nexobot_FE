import React from 'react'

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary" | "default";
  type?: "text" | "password" | "email";
}
const Input = ({ placeholder, type = "text", variant = "primary" }: InputProps) => {
  const variants = {
    primary: "text-gray-500 rounded-full border border-gray-[#575555] focus:outline-none focus:ring-2 focus:ring-[#01D2B3]",
    secondary: "",
    default: "",
  };
  return <input type={type} placeholder={placeholder} className={`${variants[variant]} w-full h-14 p-5`}/>

};

export {Input}