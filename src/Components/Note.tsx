import { FC, memo } from "react";
type NoteProps = {
  children: React.ReactNode;
};

const Note: FC<NoteProps> = ({ children }) => {
  return (
    <>
      <div className="text-xs text-red-400 md:text-base">Note:{children}</div>
    </>
  );
};

Note.defaultProps = {};

export default memo(Note);
