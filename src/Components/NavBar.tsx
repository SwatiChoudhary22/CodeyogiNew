import { FC, memo } from "react";

import navBar from "../Images/navigation.png";
type NavBarProps = {
  onClick: () => void;
};
const NavBar: FC<NavBarProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="fixed top-0 right-0 block md:hidden">
        <button>
          <img src={navBar} className="w-10 h-10"></img>
        </button>
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
