import { Children, FC, memo, ReactNode } from "react";
type ShowErrorProps = {
  children: React.ReactNode;
};

const ShowError: FC<ShowErrorProps> = ({ children }) => {
  return (
    <>
      <h3 className="text-red-600 text-xs">{children}</h3>
    </>
  );
};

ShowError.defaultProps = {};

export default memo(ShowError);
