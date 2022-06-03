import { FC, memo } from "react";
type IconsProps = {
  image?: HTMLImageElement;
  imageUrl: string;
};

const Icons: FC<IconsProps> = ({ image, imageUrl }) => {
  return (
    <>
      <img className="w-8 h-8" src={imageUrl}></img>
    </>
  );
};

Icons.defaultProps = {};

export default memo(Icons);
