import "./offers.scss";
import Avatar2 from "./../../assets/icons/Avatar2.png";
import Eye from "./../../assets/icons/eye.svg";
import { useEffect, useState } from "react";

const Offers = () => {
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
    <section className="offers">
      <div className="offers__overlay"></div>

      <div className="offers__content">
        <div className="offers__avatar">
          <img src={Avatar2} alt="avatar" className="offers__avatar-img" />
          <p className="offers__avatar-name">Shroomie</p>
        </div>

        <h2 className="offers__title">Magic Mushrooms</h2>

        <button className="offers__btn">
          <img src={Eye} alt="eye icon" className="offers__btn-icon" />
          <p className="offers__btn-text">See NFT</p>
        </button>
      </div>

      <div className="offers__timer">
        <p className="offers__timer-label">Auction ends in:</p>
        <div className="offers__timer-blocks">
          <div className="offers__timer-item">
            <h3 className="offers__timer-value">{timeLeft.hours}</h3>
            <span className="offers__timer-unit">Hours</span>
          </div>
          <div className="offers__timer-item">
            <h3 className="offers__timer-value">{timeLeft.minutes}</h3>
            <span className="offers__timer-unit">Minutes</span>
          </div>
          <div className="offers__timer-item">
            <h3 className="offers__timer-value">{timeLeft.seconds}</h3>
            <span className="offers__timer-unit">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
