import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex items-center justify-between w-full h-12 px-5 font-semibold transition-colors duration-300 bg-gray-500 cursor-pointer text-blue rounded-xl hover:bg-blue hover:text-gray-900"
      {...props}
    />
  );
}
