import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  theme,
  type,
  backgroundColor,
  onClick,
  ...rest
}) => {
  const themeClasses =
    theme === "primary"
      ? "text-sky-800 bg-sky-200 rounded-md px-3 py-2"
      : "text-white bg-cyan-700 px-3 py-2";
  return (
    <>
      <button
        {...rest}
        onClick={onClick}
        style={{ backgroundColor }}
        className={cn("rounded-md px-3 py-2 mx-auto", themeClasses)}
      ></button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
