import React from 'react'

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary" | "default";
  type?: "text" | "password" | "email";
}
const Input = ({ placeholder, type = "text", variant = "primary" }: InputProps) => {
  const variants = {
    primary: "text-gray-500 rounded-3xl border border-gray-700",
    secondary: "",
    default: "",
  };
  return <input type={type} placeholder={placeholder} className={`${variants[variant]} w-full p-5`}/>

};

export {Input}