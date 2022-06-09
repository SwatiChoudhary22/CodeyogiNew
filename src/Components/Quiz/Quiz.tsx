import { FC, memo } from "react";

import Header from "../Header/Header";
type QuizProps = {};

const Quiz: FC<QuizProps> = (props) => {
  return (
    <div className="bg-cyan-50">
      <Header></Header>
      <div className="flex items-center justify-center h-screen text-cyan-800">
        No active Questions
      </div>
    </div>
  );
};

Quiz.defaultProps = {};

export default memo(Quiz);
