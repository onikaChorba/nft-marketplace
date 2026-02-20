import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/icons/Logo.png";
import Discord from "./../../assets/icons/discord.svg";
import YouTube from "./../../assets/icons/youtybe.svg";
import Twitter from "./../../assets/icons/twitter.svg";
import Instagram from "./../../assets/icons/instagram.svg";

const Footer = () => {
  const icons = [
    { src: Discord, alt: "Discord" },
    { src: YouTube, alt: "YouTube" },
    { src: Twitter, alt: "Twitter" },
    { src: Instagram, alt: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__block footer__block--about">
          <img src={Logo} alt="logo" className="footer__logo" />
          <p className="footer__text">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="footer__text">Join our community</p>
          <div className="footer__socials">
            {icons.map((icon, index) => (
              // <a
              //   key={index}
              //   href="#"
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   className="footer__social-link"
              // >
              <img src={icon.src} alt={icon.alt} key={index} />
              // </a>
            ))}
          </div>
        </div>

        <div className="footer__block footer__block--links">
          <h3 className="footer__title">Explore</h3>
          <Link to="/nft-marketplace/marketplace" className="footer__link">
            Marketplace
          </Link>
          <Link to="/nft-marketplace/rankings" className="footer__link">
            Rankings
          </Link>
          <Link to="/nft-marketplace/connect-wallet" className="footer__link">
            Connect a wallet
          </Link>
        </div>

        <div className="footer__block footer__block--subscribe">
          <h3 className="footer__title">Join our weekly digest</h3>
          <p className="footer__text">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="footer__subscribe">
            <input
              className="footer__input"
              placeholder="Enter your email here"
            />
            <button className="footer__btn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="footer__divider" />
      <p className="footer__copyright">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};

export default Footer;
