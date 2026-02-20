import "./marketplace.scss";
import searchicon from "../../assets/icons/search.svg";
import Avatar1 from "../../assets/icons/Avatar2.png";
import Avatar2 from "../../assets/icons/Avatar3.png";
import Img1 from "../../assets/icons/image2.png";
import Img2 from "../../assets/icons/robot.png";
import Img3 from "../../assets/icons/robot2.png";
import Img4 from "../../assets/icons/image12.png";
import Img5 from "../../assets/icons/image11.png";
import { useState } from "react";

const nfts = [
  {
    title: "Magic Mushroom 0325",
    author: "MoonDancer",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img1,
    avatar: Avatar1,
  },
  {
    title: "Happy Robot 032",
    author: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img2,
    avatar: Avatar2,
  },
  {
    title: "Happy Robot 024",
    author: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img3,
    avatar: Avatar2,
  },

  {
    title: "Colorful Dog 0356",
    author: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img4,
    avatar: Avatar2,
  },

  {
    title: "Dancing Robot 0312",
    author: "NebulaKid",
    price: "1.63 ETH",
    bid: "0.33 wETH",
    img: Img5,
    avatar: Avatar2,
  },
];

const MarketPlace = () => {
  // eslint-disable-next-line no-unused-vars
  const [nftList, setNFTList] = useState(nfts);
  const [search, setSearch] = useState("");

  const filteredNFTs = nftList.filter((nft) =>
    nft.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className="marketplace">
      <div className="marketplace__header">
        <h2 className="marketplace__title">Browse Marketplace</h2>
        <p className="marketplace__text">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <div className="marketplace__input-wrapper">
          <img alt="search" src={searchicon} />
          <input
            placeholder="Search your favourite NFTs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="marketplace__list">
        {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft, i) => (
            <div className="card" key={i}>
              <img src={nft.img} alt={nft.title} className="card__img" />
              <div className="card__info">
                <h3 className="card__title">{nft.title}</h3>
                <p className="card__author">
                  <img src={nft.avatar} alt="avatar" />
                  {nft.author}
                </p>
                <div className="card__details">
                  <p>
                    Price <span>{nft.price}</span>
                  </p>
                  <p>
                    Highest Bid <span>{nft.bid}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No NFTs found</p>
        )}
      </div>
    </div>
  );
};

export default MarketPlace;
