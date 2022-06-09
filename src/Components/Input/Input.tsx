import { FC, memo, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import cn from "classnames";

type InputProps = {
  error?: string;
  form?: string | undefined;
  htmlFor?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

const Input: FC<InputProps> = ({
  error,
  id,
  name,
  type,
  disabled,
  value,
  children,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div>
      <div className="grid items-center max-w-full grid-cols-4 ">
        <label>{children}</label>
        <input
          {...rest}
          type={type || "text"}
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={cn(
            "my-10 border border-cyan-700  bg-cyan-50 rounded-md py-2 w-full col-span-3 focus:outline-none focus:ring-2 ring-cyan-700",
            {
              "text-gray-300": disabled,
            },
            { "!border-red-600": error }
          )}
        ></input>
      </div>
    </div>
  );
};

Input.defaultProps = {
  value: "",
};

export default memo(Input);
