import { FC, memo } from "react";
type DateProps = {
  children: React.ReactNode;
};

const Date: FC<DateProps> = ({ children }) => {
  return (
    <>
      <div className="text-xs font-semibold text-gray-400 md:text-base ">
        {children}
      </div>
    </>
  );
};

Date.defaultProps = {};

export default memo(Date);
