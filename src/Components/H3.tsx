import { FC, memo } from "react";
type H3Props = {
  children: React.ReactNode;
};

const H3: FC<H3Props> = ({ children }) => {
  return (
    <>
      <h3 className="text-sm text-cyan-800 md:text-base">{children}</h3>
    </>
  );
};

H3.defaultProps = {};

export default memo(H3);
