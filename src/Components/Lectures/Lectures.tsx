import { FC, memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import H2 from "../H2";
import PageLayOut from "../PageLayout";
import LectureCard from "./LectureCard";
import { getLectures } from "../../Api";
import { Lecture } from "../../Modals/lecture";

type LecturesProps = {};

const Lectures: FC<LecturesProps> = (props) => {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    const promise = getLectures();
    promise.then((data) => {
      setLectures(data);
    });
  }, []);

  return (
    <div className="flex-1 h-screen p-3 bg-cyan-100">
      <div className="flex justify-end p-3"></div>
      <div className="flex flex-col items-center justify-center px-3 pt-5 md:px-16 md:pt-10">
        <div className="flex justify-start text-cyan-900">
          <H2>Session List</H2>
        </div>

        <PageLayOut>
          <div className="flex flex-col items-center justify-center space-y-5">
            {lectures.map((l) => {
              return <LectureCard lecture={l} key={l.id}></LectureCard>;
            })}
          </div>
        </PageLayOut>
      </div>
    </div>
  );
};

Lectures.defaultProps = {};

export default memo(Lectures);
