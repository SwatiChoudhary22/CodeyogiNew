import { FC, memo } from "react";
import Duration from "../Duration";
import Date from "../Date";
import Note from "../Note";
import Icons from "../Icons";
import H3 from "../H3";
import MDEditor from "@uiw/react-md-editor";
import lectures from "./Lectures";
import moment from "moment";
import { Lecture } from "../../Modals/lecture";
type LectureCardProps = {
  lecture: Lecture;
};

const LectureCard: FC<LectureCardProps> = ({ lecture }) => {
  let start = moment(lecture.start_time);
  let end = moment(lecture.end_time);
  let diff = end.diff(start);
  return (
    <div className="items-center justify-center flex-grow w-full h-full p-5 m-5 bg-white rounded-lg shadow-2xl md:w-2/3 md:p-5">
      <div className="flex space-x-3">
        <H3>
          Lecture#
          {lecture.id}
        </H3>
        <Date>{moment(lecture.start_time).format("MMMM Do YYYY")}</Date>
      </div>

      <Duration>
        Duration:
        {moment.utc(diff).format("HH:mm:ss.SSS")}
      </Duration>
      <div className="py-5 pl-6 ">
        <MDEditor.Markdown className="markdown" source={lecture.topic} />
      </div>
      <Note>
        Complete your assignment before due date after watching this lecture
      </Note>
      <div>
        <div className="flex justify-center space-x-3 text-gray-400">
          <Icons imageUrl="https://icon-library.com/images/download-icon-white/download-icon-white-21.jpg"></Icons>
          <a className="text-sm md:text-base" href="https://www.youtube.com/">
            Watch/Download recordings
          </a>
        </div>
      </div>
    </div>
  );
};

LectureCard.defaultProps = {};

export default memo(LectureCard);
