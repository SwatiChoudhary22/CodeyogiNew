import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Icons from "../../Icons";
import lecture from "../../Images/lecture.png";

import quiz from "../../Images/quiz.png";
import assignment from "../../Images/assignment.png";
import logout from "../../Images/logout.png";
import profile from "../../Images/profile.png";
import Login from "../Login";
type SidebarProps = {
  onClick: () => void;
  smallScreenToggleClass: any;
};

const Sidebar: FC<SidebarProps> = ({ onClick, smallScreenToggleClass }) => {
  return (
    <div
      className={`sticky top-0 flex flex-col w-56 h-screen p-5 space-y-10 text-white bg-cyan-900  ${smallScreenToggleClass}`}
    >
      <button
        onClick={onClick}
        className="absolute text-4xl text-black top-2 left-56 md:hidden"
      >
        X
      </button>
      <Link to="/lectures">
        <div className="flex items-center space-x-3 text-2xl text-white">
          <Icons imageUrl="https://codeyogi.io/images/favicon-96.png"></Icons>
          <span>CODEYOGI</span>
        </div>
      </Link>
      <div className="flex flex-col justify-end space-y-3 text-lg">
        <div>
          <Link to="/lectures">
            <div className="flex mb-4 space-x-3">
              <Icons imageUrl={lecture}></Icons>
              <span>Lectures</span>
            </div>
          </Link>
          <Link to="/assignments">
            <div className="flex mb-4 space-x-3">
              <Icons imageUrl={assignment}></Icons>
              <span>Assignments</span>
            </div>
          </Link>

          <Link to="/quiz">
            <div className="flex mb-4 space-x-3">
              <Icons imageUrl={quiz}></Icons>
              <span>Quiz</span>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/login">
            <div className="flex mb-4 space-x-3">
              <Icons imageUrl={logout}></Icons>
              <span>Login</span>
            </div>
          </Link>
          <Link to="/profile">
            <div className="flex mb-4 space-x-3">
              <Icons imageUrl={profile}></Icons>
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
