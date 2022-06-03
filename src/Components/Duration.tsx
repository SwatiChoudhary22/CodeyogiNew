import { FC, memo } from "react";
type DurationProps = {
  children: React.ReactNode;
};

const Duration: FC<DurationProps> = ({ children }) => {
  return (
    <>
      <div className="text-sm text-gray-400">{children}</div>
    </>
  );
};

Duration.defaultProps = {};

export default memo(Duration);
