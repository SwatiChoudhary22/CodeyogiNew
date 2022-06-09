import { FC, memo } from "react";
type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = (props) => {
  return (
    <div className="w-full p-10 py-16 bg-gray-500 rounded-md ">
      {props.children}
    </div>
  );
};

PageLayout.defaultProps = {};

export default memo(PageLayout);
