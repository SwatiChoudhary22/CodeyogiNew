import { FC, memo } from "react";
type H2Props = {
  children: React.ReactNode;
};

const H2: FC<H2Props> = ({ children }) => {
  return (
    <>
      <h2 className="text-lg md:text-xl">{children}</h2>
    </>
  );
};

H2.defaultProps = {};

export default memo(H2);
