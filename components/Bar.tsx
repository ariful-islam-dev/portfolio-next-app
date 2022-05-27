import React, { FC } from "react";
import { ISkill } from "../type";

const Bar: FC<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center justify-between px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
      >
        <div className="flex items-center">
          <Icon className="mr-3" />
          {name}
        </div>
        <div>{level}</div>
      </div>
    </div>
  );
};

export default Bar;
