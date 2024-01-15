import { logoLetters, logoSquare } from "assets";
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
        className="h-72 sm:hover:scale-90" // Smaller on mobile, larger on desktop
      />

      <img
        src={logoLetters.default}
        alt="Letters Logo"
        style={{ height: "200px", marginTop: "-100px" }}
      />

      <div className="w-full mobile-scale">
        <div className="flex flex-row justify-center gap-2 sm:gap-4">
          {/* "Website live in:" box */}
          <span
            className="flex flex-col bg-main-purple text-white rounded-xl p-2 justify-center items-center w-52"
          >
            <span className="text-2xl font-sans font-bold">
              Website live in:
            </span>
          </span>

          {/* Countdown timer */}
          <div className="flex flex-wrap justify-center gap-4">
            {
              timeLeft
                ? (
                  (Object.keys(timeLeft) as Array<keyof ICountdownClock>).map(interval =>
                    <span
                      key={interval}
                      className="flex flex-col bg-main-purple text-white rounded-xl p-2 w-24 h-24 hover:scale-90"
                    >
                      <span className="text-4xl font-sans font-bold">
                        {paddedZero(timeLeft[interval])}
                      </span>
                      <span className="text-xl">
                        {interval}
                      </span>
                    </span>,
                  )
                )
                : <span>Time&apos;s up!</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
