import React, { useEffect, FC, memo } from "react";
import { Link, useParams } from "react-router-dom";
import AssignmentCard from "../Assignments/AssignmentCard";
import Button from "../Button/Button";
import Icons from "../Icons";
import PageLayOut from "../PageLayout";
import Submit from "../Submit";
import { Assignment } from "../../Modals/Assignment";
import { getAssignments } from "../../Api";
type AssignmentDetailsProps = {
  assignment?: Assignment;
};

const AssignmentDetails: FC<AssignmentDetailsProps> = ({}) => {
  const data: { id: string } = useParams() as any;
  console.log(data);

  const [assignmentsDetails, setAssignmentsDetails] = React.useState<
    Assignment[]
  >([]);
  const [reSubmit, setReSubmit] = React.useState(false);

  const ButtonClickhandler = () => {
    setReSubmit(true);
  };
  const onClose = () => {
    setReSubmit(false);
  };

  useEffect(() => {
    const promise = getAssignments();
    promise.then((data) => {
      setAssignmentsDetails(data);
      localStorage.setItem("assignmentsDetails", JSON.stringify(data));
    });
  }, []);

  const selectedAssignment = assignmentsDetails.find((assignment) => {
    return assignment.id === +data.id;
  });

  return (
    <div className="flex-1 h-full bg-cyan-100">
      <div className="flex justify-end p-3">
        <Link to="/assignments/">
          <Icons imageUrl="https://cdn-icons-png.flaticon.com/512/93/93634.png"></Icons>
        </Link>
      </div>
      <div className="flex flex-col p-3 m-5 space-y-10 text-gray-400 bg-white shadow-3xl ">
        <PageLayOut>
          {selectedAssignment && (
            <AssignmentCard assignments={selectedAssignment}></AssignmentCard>
          )}

          {reSubmit && <Submit onClick={onClose}> </Submit>}
          <hr className="pb-4"></hr>

          <Button onClick={ButtonClickhandler}>Submit</Button>
        </PageLayOut>
      </div>
    </div>
  );
};

AssignmentDetails.defaultProps = {};

export default memo(AssignmentDetails);
