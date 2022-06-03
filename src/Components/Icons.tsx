import { FC, memo } from "react";
type IconsProps = {
  image?: HTMLImageElement;
  imageUrl: string;
};

const Icons: FC<IconsProps> = ({ imageUrl }) => {
  return (
    <>
      <a href="#">
        <img className="w-4 h-4 md:w-6 md:h-6 " src={imageUrl}></img>
      </a>
    </>
  );
};

Icons.defaultProps = {};

export default memo(Icons);
