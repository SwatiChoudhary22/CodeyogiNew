import { FC, memo } from "react";
type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = (props) => {
  return (
    <div className="w-full p-10 py-16 mt-10 bg-gray-300 rounded-md ">
      {props.children}
    </div>
  );
};

PageLayout.defaultProps = {};

export default memo(PageLayout);
