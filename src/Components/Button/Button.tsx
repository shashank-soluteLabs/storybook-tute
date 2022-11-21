import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**  Additonal Classes and overrides */
  className?: string;
  /** it is text which sets the button context */
  label?: string;
  /** its sets the background color */
  backgroundColor?: string;
  /**  Button corner radius */
  rounded?: boolean;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, label, backgroundColor, rounded, ...props }: ButtonProps) => {
  return (
    <button
      className={
        (typeof className !== "undefined" ? className : " ") +
        "px-0.5 py-px rounded-md border-none text-base " +
        (rounded ? "rounded-lg " : "") +
        (backgroundColor === "primary"
          ? " bg-indigo-500 text-white "
          : backgroundColor === "secondary"
          ? " bg-sky-300 text-black "
          : backgroundColor === "danger"
          ? " bg-red-500 text-white "
          : backgroundColor === "success"
          ? " bg-green-500 text white "
          : " bg-yellow-300 text-black ")
      }
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
