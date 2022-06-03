import { FC, memo } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
type MainPageLayoutProps = {};

const MainPageLayout: FC<MainPageLayoutProps> = (props) => {
  return (
    <div className=" flex items-stretch">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
};

MainPageLayout.defaultProps = {};

export default memo(MainPageLayout);
