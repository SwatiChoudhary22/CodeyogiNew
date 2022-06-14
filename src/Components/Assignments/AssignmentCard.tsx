import { FC, memo } from "react";
import { Assignment } from "../../Modals/Assignment";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import H3 from "../H3";
import H4 from "../H4";
type AssignmentCardProps = {
  assignments: Assignment;
};

const AssignmentCard: FC<AssignmentCardProps> = ({ assignments }) => {
  return (
    <div className="w-full p-1 md:space-y-4">
      <H3>AssignmentsDetails #{assignments.id}</H3>
      <hr></hr>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <H4>Title</H4>
        <div className="row-col-3">
          <span className="text-sm">
            <MDEditor.Markdown
              className="!bg-cyan-50"
              source={assignments.title}
            />
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <H4>Due Date</H4>
        <div className="row-col-3">
          <span className="text-sm">
            {moment(assignments.due_date).format("MMMM Do YYYY")}
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <H4>Description</H4>
        <div className="row-col-3">
          <span className="text-sm">
            <MDEditor.Markdown
              className="!bg-cyan-50"
              source={assignments.description}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.defaultProps = {};

export default memo(AssignmentCard);
