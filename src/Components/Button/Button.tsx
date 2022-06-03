import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ theme, type, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "text-sky-800 bg-sky-200 rounded-md px-3 py-2"
      : "text-cyan-200 bg-cyan-700 px-3 py-2";
  return (
    <>
      <button
        {...rest}
        className={cn("rounded-md px-3 py-2", themeClasses)}
      ></button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
