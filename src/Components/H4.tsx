import { FC, memo } from "react";
type H4Props = {
  children: React.ReactNode;
};

const H4: FC<H4Props> = ({ children }) => {
  return (
    <>
      <h4 className="text-xs text-white md:text-sm">{children}</h4>
    </>
  );
};

H4.defaultProps = {};

export default memo(H4);
