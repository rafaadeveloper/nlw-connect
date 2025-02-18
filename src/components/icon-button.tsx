import type { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="p-1.5 font-semibold transition-colors duration-300 bg-gray-500 cursor-pointer rounded-md hover:bg-blue hover:text-gray-900">
      {props.children}
    </button>
  );
}
