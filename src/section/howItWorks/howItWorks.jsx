import React from "react";
import "./howItWorks.scss";
import WalletIcon from "../../assets/icons/wallet.png";
import CollectionIcon from "../../assets/icons/collection.png";
import EarningIcon from "../../assets/icons/earning.png";
import Astronaut from "../../assets/icons/astronaut.png";

const HowItWorks = () => {
  const cards = [
    {
      img: WalletIcon,
      title: "Setup Your Wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      img: CollectionIcon,
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: EarningIcon,
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <section className="how">
      <div className="how__container">
        <h2 className="how__title">How It Works</h2>
        <p className="how__subtitle">Find Out How To Get Started</p>

        <div className="how__cards">
          {cards.map((card, i) => (
            <div key={i} className="how__card">
              <img src={card.img} alt={card.title} className="how__icon" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="how__digest">
          <img src={Astronaut} alt="astronaut" className="how__digest-img" />
          <div className="how__digest-content">
            <h3>Join Our Weekly Digest</h3>
            <p>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            <form className="how__form">
              <input type="email" placeholder="Enter your email here" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
