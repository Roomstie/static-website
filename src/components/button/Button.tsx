import { type } from "@testing-library/user-event/dist/type";
import classNames from "classnames";
import { buttonSizes } from "functions";
import { useMemo } from "react";
import { IButtonProps } from "types";

export const Button = ({
  label,
  size = "md",
  formId,
  onClick,
  className: extraClasses = "",
  htmlType = "button",
  loading = false,
  disabled = false,
  block = false,
  tooltip,
  children = label,
  loadingLabel,
  id,
}: IButtonProps): JSX.Element => {
  const memoizedClasses = useMemo(
    () =>
      classNames(
        "rounded-lg font-bold h-full min-h-[2rem] justify-center text-center text-ellipsis overflow-hidden text-white transition",
        buttonSizes(size),
        block ? "w-full " : "inline-block max-w-[15rem] ",
        (disabled || loading ? "bg-yellow-300" : "bg-yellow-700 button-shadow hover:bg-yellow-800"),
        extraClasses,
      ),
    [type, size, block, disabled, extraClasses, loading],
  );
  return (
    <button
      className={memoizedClasses}
      role="button"
      type={htmlType}
      form={formId}
      onClick={onClick}
      disabled={disabled || loading}
      title={tooltip}
      id={id}
    >
      <div className="my-auto text-current truncate flex justify-center space-x-2 ">
        <span>{(loading && loadingLabel) ? loadingLabel : children}</span>
        {/* {loading ? <Icon icon={iconLoader} className="w-6 h-6" /> : undefined} */}
      </div>
    </button>
  );
};
