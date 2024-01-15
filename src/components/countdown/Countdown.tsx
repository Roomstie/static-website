import classNames from "classnames";
import { paddedZero } from "functions";
import { useEffect, useState } from "react";
import { ICountdownClock, ICountdownProps } from "types";

const calculateTimeLeft = (targetDate: Date): ICountdownClock | null => {
  const difference = +targetDate - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return null;
  }
};

export const Countdown = ({
  targetDate,
  onEnd,
  className: extraClasses = "",
  size = "md",
}: ICountdownProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState<ICountdownClock | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const timerTimeLeft = calculateTimeLeft(targetDate);
      // if there's still time
      if (timerTimeLeft) {
        setTimeLeft(timerTimeLeft);
      } else {
        // Timer is over. Clear the timeout
        clearTimeout(interval);
        // Notify end of time
        onEnd?.();
      }
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div
      className={classNames(
        // Add your base classes for the countdown timer here
        "rounded-lg font-bold justify-center text-center overflow-hidden transition flex items-center",
        // Add a function to determine the size similar to buttonSizes if needed
        extraClasses,
      )}
    >
      {
        timeLeft
          ? (
            <div className="flex flex-row space-x-4">
              {
                (Object.keys(timeLeft) as Array<keyof ICountdownClock>).map(interval =>
                  <span
                    key={interval}
                    className="flex flex-col space-y-2 bg-red-500 text-white border border-red-700 rounded-xl min-w-24 min-h-24 p-2"
                  >
                    <span className="text-4xl font-bold">
                      {paddedZero(timeLeft[interval])}
                    </span>
                    <span className="text-xl">
                      {interval}
                    </span>
                  </span>,
                )
              }
            </div>
          )
          : <span>Time&apos;s up!</span>
      }
    </div>
  );
};

export default Countdown;
