import "./hero.scss";
import rocked from "../../assets/icons/rocked.svg";
import heroImg from "../../assets/icons/hero.png";
import avatar from "../../assets/icons/Avatar.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1 className="hero__h1">Discover digital art & Collect NFTs</h1>
        <p className="hero__text">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <button className="hero__btn">
          <img src={rocked} alt="btn-icon" />
          <p>Get Started</p>
        </button>
        <div className="hero__block-wrapper">
          <div className="hero__block-wrapper-item">
            <p>240k+</p>
            <p>Total Sale</p>
          </div>
          <div className="hero__block-wrapper-item">
            <p>100k+</p>
            <p>Auctions</p>
          </div>
          <div className="hero__block-wrapper-item">
            <p>240k+</p>
            <p>Artists</p>
          </div>
        </div>
      </div>

      <div className="hero__img-block img-block">
        <img src={heroImg} alt="hero" className="img-block__img" />
        <h3 className="img-block__h3">Space Walking</h3>
        <p className="img-block__text">
          <img src={avatar} alt="avatar" />
          <span>Animakid</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
