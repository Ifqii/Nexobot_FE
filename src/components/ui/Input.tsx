

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary" | "default" | "custom";
  type?: "text" | "password" | "email" | "file";
  icon?: string;
  className?: string;
}
const Input = ({
  placeholder,
  type = "text",
  variant = "primary",
  className
}: InputProps) => {
  const variants = {
    primary:
      "text-gray-500 rounded-2xl border border-gray-[#575555] focus:outline-none focus:border-none focus:ring-2 focus:ring-[#01D2B3] p-5",
    secondary: "text-gray-500 rounded-xl border border-gray-[#575555] focus:outline-none focus:border-none focus:ring-2 focus:ring-[#01D2B3] p-5",
    default: "focus:outline-none focus:border-none m-3",
    custom: "",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${variants[variant]} w-full p-5 ${className}`}
    />
  );
};

export { Input };
