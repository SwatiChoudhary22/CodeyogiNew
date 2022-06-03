import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Icons from "../../Icons";
import Button from "../Button/Button";
import H3 from "../H3";
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="flex justify-between bg-gray-500 py-3 px-5 ">
      <div className="flex space-x-3 items-center">
        <Link to="/home">
          <div className="flex items-center pl-2 space-x-3 text-white text-xl">
            <Icons imageUrl="https://codeyogi.io/images/favicon-96.png"></Icons>
            <span>CODEYOGI</span>
          </div>
        </Link>
        <H3>Welcome ,Swati</H3>
      </div>
      <div className="flex space-x-5">
        <p className="py-2 px-3 text-white bg-cyan-800 rounded-md">00:00:00</p>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
