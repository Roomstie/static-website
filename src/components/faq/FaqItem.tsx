import { iconCaretRight } from "assets/icons";
import classNames from "classnames";
import { useState } from "react";
import { IFaqQuestion } from "types";

interface FaqItemProps {
  faq: IFaqQuestion;
}

export const FaqItem = ({ faq }: FaqItemProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleAnswer = (): void => {
    setExpanded(e => !e);
  };

  return (
    <div key={faq.question} className="flex flex-col space-y-2">
      <a
        role="button"
        className="cursor-pointer hover:bg-gray-200 p-4 flex space-x-2 items-center select-none"
        onClick={handleToggleAnswer}
      >
        <img
          src={iconCaretRight.default}
          className={classNames(
            "h-4 w-4",
            { "rotate-90": expanded },
          )}
        />
        <b>{faq.question}</b>
      </a>
      {expanded && <p className="pl-8">{faq.answer}</p>}
    </div>
  );
};
