import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../Icons";
import Button from "../Button/Button";
import H3 from "../H3";
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleChange = () => {
    setisLoggedIn(true);
  };
  return (
    <div className="flex justify-between px-5 py-3 bg-gray-500 ">
      <div className="flex items-center space-x-3">
        <Link to="/lectures">
          <div className="flex items-center pl-2 space-x-3 text-xl text-white">
            <Icons imageUrl="https://codeyogi.io/images/favicon-96.png"></Icons>
            <span>CODEYOGI</span>
          </div>
        </Link>
        <H3>Welcome ,Swati</H3>
      </div>
      <div className="flex space-x-5">
        <p className="px-3 py-2 text-white rounded-md bg-cyan-800">00:00:00</p>
        <Button onClick={handleChange}>Logout</Button>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
