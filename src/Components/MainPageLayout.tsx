import { FC, memo, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Sidebar";
type MainPageLayoutProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MainPageLayout: FC<MainPageLayoutProps> = ({ onClick }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleSideBarToggle = () => {
    setIsSideBarOpen(true);
  };
  const onClose = () => {
    setIsSideBarOpen(false);
  };
  return (
    <div>
      <NavBar onClick={handleSideBarToggle}></NavBar>
      <div className="flex items-stretch">
        <div>
          <Sidebar
            onClick={onClose}
            smallScreenToggleClass={`${isSideBarOpen ? "block" : "hidden"}`}
          ></Sidebar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainPageLayout.defaultProps = {};

export default memo(MainPageLayout);
