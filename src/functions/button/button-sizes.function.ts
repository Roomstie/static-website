import { ObjectSizeValue } from "types";

export const buttonSizes = (size: ObjectSizeValue): string => {
  switch (size) {
    case "xs":
      return "px-4 text-xs min-w-[4rem]";
    case "sm":
      return "px-4 text-sm min-w-[4rem]";
    case "md":
      return "px-4 text-sm min-w-[6rem]";
    case "lg":
      return "px-6 py-3 text-lg min-w-[6rem]";
    case "xl":
      return "px-6 py-3 text-xl min-w-[8rem]";
    default: {
      const _exhaustiveSwitch: never = size;
      return "";
    }
  }
};
