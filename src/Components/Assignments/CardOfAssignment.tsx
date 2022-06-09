import React from "react";
import Icons from "../Icons";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

import Note from "../Note";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import { Assignment } from "../../Modals/Assignment";

import { FC, memo } from "react";
import Submit from "../Submit";
type CardOfAssignmentProps = {
  assignments: Assignment;
};

const CardOfAssignment: FC<CardOfAssignmentProps> = ({ assignments }) => {
  const [reSubmit, setReSubmit] = React.useState(false);
  const ButtonClickhandler = () => {
    setReSubmit(true);
  };
  const onClose = () => {
    setReSubmit(false);
  };
  return (
    <div className="items-center justify-center flex-grow w-full h-full p-3 space-y-5 bg-white rounded-lg shadow-lg md:p-5 md:w-2/3">
      <Link to={`/assignments/${assignments.id}/details`}>
        <div className="flex flex-col justify-start md:space-x-4 md:flex md:flex-row">
          <div className="flex space-x-2 md:space-x-3 ">
            <div>#{assignments.id}</div>
            <div>
              <span className="text-gray-800">
                <MDEditor.Markdown source={assignments.title} />
              </span>
            </div>
            <div className="flex text-xs text-gray-600 md:text-base">
              ({moment(assignments.created_at).format("MMMM Do YYYY")})
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex md:flex-row">
          <div>
            <span className="text-xs text-red-600 md:text-base">
              Due Date:
              {moment(assignments.due_date).format("MMMM Do YYYY")}
            </span>
            <Note>(Submission will count as late now)</Note>
          </div>

          <div className="font-bold ">
            <Button theme="primary">Submitted</Button>
          </div>
        </div>
      </Link>
      <div>
        {reSubmit && <Submit onClick={onClose} />}
        <div className="flex justify-around space-x-4 ">
          <div className="font-normal">
            <Button onClick={ButtonClickhandler} theme="secondary">
              Re-submit
            </Button>
          </div>
          <div className="flex items-center text-sm underline text-cyan-900 underline-offset-2">
            <Icons imageUrl="https://icon-library.com/images/download-icon-white/download-icon-white-21.jpg"></Icons>
            <Button>
              <a className="" href="https://play.tailwindcss.com/">
                See Your Submission
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardOfAssignment.defaultProps = {};

export default memo(CardOfAssignment);
