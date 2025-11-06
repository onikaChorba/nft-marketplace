import "./offers.scss";
import Avatar2 from "./../../assets/icons/Avatar2.png";
import Eye from "./../../assets/icons/eye.svg";

const Offers = () => {
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
            <h3 className="offers__timer-value">59</h3>
            <span className="offers__timer-unit">Hours</span>
          </div>
          <div className="offers__timer-item">
            <h3 className="offers__timer-value">59</h3>
            <span className="offers__timer-unit">Minutes</span>
          </div>
          <div className="offers__timer-item">
            <h3 className="offers__timer-value">59</h3>
            <span className="offers__timer-unit">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
