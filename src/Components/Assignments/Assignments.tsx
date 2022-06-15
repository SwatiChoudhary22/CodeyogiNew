import { FC, memo, useEffect, useState } from "react";
import { getAssignments } from "../../Api";
import CardOfAssignment from "./CardOfAssignment";
import H2 from "../H2";
import PageLayout from "../PageLayout";
import { Assignment } from "../../Modals/Assignment";
type AssignmentsProps = {
  assignment?: Assignment;
};

const Assignments: FC<AssignmentsProps> = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const promise = getAssignments();
    promise.then((data) => {
      setAssignments(data);
      localStorage.setItem("assignments", JSON.stringify(data));
    });
  }, []);
  return (
    <div className="flex-1 h-scren bg-cyan-50">
      <div className="flex justify-end p-1 md:p-3"></div>
      <div className="flex flex-col items-center justify-center px-4 pt-5 md:px-16 md:pt-10">
        <div className="flex justify-start text-cyan-900">
          <H2>Assignment List</H2>
        </div>

        <PageLayout>
          <div className="flex flex-col items-center justify-center space-y-5">
            {assignments.map((a) => {
              return (
                <CardOfAssignment assignments={a} key={a.id}></CardOfAssignment>
              );
            })}
          </div>
        </PageLayout>
      </div>
    </div>
  );
};

Assignments.defaultProps = {};

export default memo(Assignments);
