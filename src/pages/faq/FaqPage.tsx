import { FaqItem } from "components/faq";
import { FAQ_QUESTIONS } from "config/data";
import { IFaqQuestion } from "types";

export const FaqPage = (): JSX.Element => (
  <div className="max-w-container flex flex-col landing-spacing">
    <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
    <hr className="my-8 border-2" />

    <div className="flex flex-col space-y-8">
      {
        FAQ_QUESTIONS.map((faqQuestion: IFaqQuestion) => (
          <FaqItem
            key={faqQuestion.question}
            faq={faqQuestion}
          />
        ))
      }
    </div>
  </div>
);
