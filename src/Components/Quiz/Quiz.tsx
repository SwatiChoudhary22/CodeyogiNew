import { FC, memo } from "react";

import Header from "../Header/Header";
type QuizProps = {};

const Quiz: FC<QuizProps> = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center items-center text-cyan-800 h-screen">
        No active Questions
      </div>
    </>
  );
};

Quiz.defaultProps = {};

export default memo(Quiz);
