import "./timer.scss";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const diff = midnight - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <p className="timer__label">Auction ends in:</p>
      <div className="timer__blocks">
        <div className="timer__item">
          <h3 className="timer__value">{timeLeft.hours}</h3>
          <span className="timer__unit">Hours</span>
        </div>
        <div className="timer__item">
          <h3 className="timer__value">{timeLeft.minutes}</h3>
          <span className="timer__unit">Minutes</span>
        </div>
        <div className="timer__item">
          <h3 className="timer__value">{timeLeft.seconds}</h3>
          <span className="timer__unit">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
