import { FC, memo } from "react";
import { Assignment } from "../../Modals/Assignment";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import H3 from "../H3";
import H4 from "../H4";
type AssignmentCardProps = {
  assignmentsDetails: Assignment;
};

const AssignmentCard: FC<AssignmentCardProps> = ({ assignmentsDetails }) => {
  return (
    <div className="w-full p-1 md:space-y-4">
      <H3>AssignmentsDetails #{assignmentsDetails.id}</H3>
      <hr></hr>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <H4>Title</H4>
        <div className="row-col-3">
          <span className="text-sm">
            <MDEditor.Markdown
              className="!bg-cyan-50"
              source={assignmentsDetails.title}
            />
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <H4>Due Date</H4>
        <div className="row-col-3">
          <span className="text-sm">
            {moment(assignmentsDetails.due_date).format("MMMM Do YYYY")}
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
              source={assignmentsDetails.description}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.defaultProps = {};

export default memo(AssignmentCard);
