import classNames from "classnames";
import { logoSquare, logoLetters } from "assets";
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
      if (timerTimeLeft) {
        setTimeLeft(timerTimeLeft);
      } else {
        clearTimeout(interval);
        onEnd?.();
      }
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center",
        "pt-10",
        "rounded-lg font-sans justify-center text-center overflow-hidden transition",
        extraClasses,
      )}
    >
      <img
        src={logoSquare.default}
        alt="Main Logo"
        style={{ height: "300px" }}
      />

      <img
        src={logoLetters.default}
        alt="Letters Logo"
        style={{ height: "200px", marginTop: '-100px' }}
      />


      {
        timeLeft
          ? (
            <div className="flex flex-row space-x-4">
              {/* "Coming Soon!" box */}
              <span
                className="flex flex-col space-y-2 bg-main-purple text-white rounded-xl min-h-24 p-2 justify-center items-center w-52" // Using a Tailwind width class
              >
                <span className="text-2xl font-sans font-bold">
                  Website live in
                </span>
              </span>

              {/* Countdown timer */}
              {
                (Object.keys(timeLeft) as Array<keyof ICountdownClock>).map(interval =>
                  <span
                    key={interval}
                    className="flex flex-col space-y-2 bg-main-purple text-white rounded-xl min-w-24 min-h-24 p-2"
                  >
                    <span className="text-4xl font-sans font-bold">
                      {paddedZero(timeLeft[interval])}
                    </span>
                    <span className="text-xl">
                      {interval}
                    </span>
                  </span>
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
