import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Icons from "../../Icons";
import lecture from "../../Images/lecture.png";
import asignment from "../../Images/asignment.png";
import quiz from "../../Images/quiz.png";
import assignment from "../../Images/assignment.png";
import logout from "../../Images/logout.png";
import profile from "../../Images/profile.png";
type SidebarProps = {};

const Sidebar: FC<SidebarProps> = (props) => {
  return (
    <div className="sticky top-0 flex flex-col w-56 h-screen p-5 text-white bg-cyan-900 ">
      <Link to="/home">
        <div className="flex items-center pl-2 space-x-3 text-2xl text-white">
          <Icons imageUrl="https://codeyogi.io/images/favicon-96.png"></Icons>
          <span>CODEYOGI</span>
        </div>
      </Link>
      <div className="text-lg ">
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
        <Link to="/profile">
          <div className="flex mb-4 space-x-3">
            <Icons imageUrl={profile}></Icons>
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/quiz">
          <div className="flex mb-4 space-x-3">
            <Icons imageUrl={quiz}></Icons>
            <span>Quiz</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
