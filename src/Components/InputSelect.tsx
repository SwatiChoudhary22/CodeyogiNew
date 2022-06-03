import { FC, memo } from "react";
type InputSelectProps = {};

const InputSelect: FC<InputSelectProps> = (props) => {
  return (
    <div className="max-w-full  items-center grid grid-cols-4 ">
      <label>
        Device you are using to do your assignments{" "}
        <span className="text-red-600 ">*</span>{" "}
      </label>
      <select>
        <option>Mobile with keyboard</option>
        <option>Mobile without keyboard</option>
        <option>Personal computer/Laptop</option>
        <option>College computer/Laptop</option>
      </select>
    </div>
  );
};

InputSelect.defaultProps = {};

export default memo(InputSelect);
