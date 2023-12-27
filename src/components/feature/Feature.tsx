import classNames from "classnames";
import { IClassName } from "types";

interface FeatureProps extends IClassName {
  header: string;
  text: string;
  icon: typeof import("*.svg");
}

export const Feature = ({ header, text, icon, className = "" }: FeatureProps): JSX.Element => {
  return (
    <div className={classNames(
      "flex flew-row items-center space-x-4 rounded-full p-2",
      className,
    )}
    >
      <div
        className={classNames(
          "bg-primary rounded-full w-32 h-32 inline-block bg-center bg-no-repeat shrink-0",
        )}
        style={{
          backgroundImage: `url( ${icon.default} )`,
          backgroundSize: "80%",
        }}
      >
      </div>
      <div className="flex flex-col space-y-2 items-left px-8">
        <p className="font-bold">{header}</p>
        <p className=" font-extralight">{text}</p>
      </div>
    </div>
  );
};
