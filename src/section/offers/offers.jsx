import "./offers.scss";
import { Timer } from "../../components";
import Eye from "./../../assets/icons/eye.svg";
import Avatar2 from "./../../assets/icons/Avatar2.png";

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
        <Timer />
      </div>
    </section>
  );
};

export default Offers;
