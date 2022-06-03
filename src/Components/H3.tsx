import { FC, memo } from "react";
type H3Props = {
  children: React.ReactNode;
};

const H3: FC<H3Props> = ({ children }) => {
  return (
    <>
      <h3 className="text-white md:text-base text-sm">{children}</h3>
    </>
  );
};

H3.defaultProps = {};

export default memo(H3);
