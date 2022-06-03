import { FC, memo } from "react";
import { Link } from "react-router-dom";
import H1 from "../H1";
import PageLayout from "../PageLayout";
type AsignmentsProps = {};

const Asignments: FC<AsignmentsProps> = (props) => {
  return (
    <div className="flex-1 h-screen p-3">
      <H1>Assignments </H1>
      <PageLayout>
        <div className="h-full px-16 py-10 mx-5 rounded-md "></div>
      </PageLayout>
    </div>
  );
};

Asignments.defaultProps = {};

export default memo(Asignments);
