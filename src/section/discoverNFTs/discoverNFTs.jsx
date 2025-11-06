import "./discoverNFTs.scss";
import Img1 from "../../assets/icons/nft1.png";
import Img2 from "../../assets/icons/nft2.png";
import Eye from "../../assets/icons/eye.svg";
import Avatar1 from "../../assets/icons/Avatar2.png";
import Avatar2 from "../../assets/icons/Avatar3.png";
const nfts = [
  {
    title: "Distant Galaxy",
    author: "MoonDancer",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img1,
    avatar: Avatar1,
  },
  {
    title: "Life On Edena",
    author: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img2,
    avatar: Avatar2,
  },
];

const DiscoverNFTs = () => {
  return (
    <section className="discover">
      <div className="discover__header">
        <div>
          <h2 className="discover__title">Discover More NFTs</h2>
          <p className="discover__subtitle">Explore new trending NFTs</p>
        </div>
        <button className="discover__btn">
          <img src={Eye} alt="eye" />
          See All
        </button>
      </div>

      <div className="discover__list">
        {nfts.map((nft, i) => (
          <div className="nft-card" key={i}>
            <img src={nft.img} alt={nft.title} className="nft-card__img" />
            <div className="nft-card__info">
              <h3 className="nft-card__title">{nft.title}</h3>
              <p className="nft-card__author">
                <img src={nft.avatar} alt="avatar" />
                {nft.author}
              </p>
              <div className="nft-card__details">
                <p>
                  Price <span>{nft.price}</span>
                </p>
                <p>
                  Highest Bid <span>{nft.bid}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverNFTs;
