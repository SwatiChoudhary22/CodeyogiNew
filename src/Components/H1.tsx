import { FC, memo } from "react";
type H1Props = {
  children: React.ReactNode;
};

const H1: FC<H1Props> = ({ children }) => {
  return (
    <>
      <h1 className="text-xl md:text-2xl text-cyan-700">{children}</h1>
    </>
  );
};

H1.defaultProps = {};

export default memo(H1);
