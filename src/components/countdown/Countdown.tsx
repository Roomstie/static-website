import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";
import { ICountdownClock, ICountdownProps } from 'types';
import { paddedZero } from "functions";

const calculateTimeLeft = (targetDate: Date):  ICountdownClock | null => {
  const difference = +targetDate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return null
  }
};

export const Countdown = ({
  targetDate,
  onEnd,
  className: extraClasses = "",
  size = "md",
}: ICountdownProps): JSX.Element => {

  const [timeLeft, setTimeLeft] = useState<ICountdownClock | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const memoizedClasses = useMemo(
    () =>
      classNames(
        // Add your base classes for the countdown timer here
        "rounded-lg font-bold justify-center text-center overflow-hidden transition",
        // Add a function to determine the size similar to buttonSizes if needed
        extraClasses,
      ),
    [size, extraClasses],
  );

  return (
    <div className={memoizedClasses}>
      {
      timeLeft 
        ? (
          <div>
            {
              (Object.keys(timeLeft) as Array<keyof ICountdownClock>).map(interval =>
                <span key={interval} className="text-2xl font-bold mx-1">
                  {paddedZero(timeLeft[interval])} {interval}
                </span>
              )
            }
          </div>
        )
        : <span>Time's up!</span>
      }
    </div>
  );
};

export default Countdown;
