import React from "react";
import "./topCreators.scss";
import Rocket from "../../assets/icons/rocket-2.svg";

const creators = [
  {
    id: 1,
    name: "Keepitreal",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "DigiLab",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 3,
    name: "GravityOne",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: 4,
    name: "Juanie",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 5,
    name: "BlueWhale",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 6,
    name: "Mr Fox",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 7,
    name: "Shroomie",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 8,
    name: "Robotica",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 9,
    name: "RustyRobot",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=10",
  },
  {
    id: 10,
    name: "Animakid",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 11,
    name: "Dotgu",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 12,
    name: "Ghiblier",
    sales: 34.53,
    img: "https://i.pravatar.cc/100?img=13",
  },
];

const TopCreators = () => {
  return (
    <section className="top-creators">
      <div className="top-creators__header">
        <div className="top-creators__title">
          <h2 className="top-creators__heading">Top Creators</h2>
          <p className="top-creators__subtitle">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <button className="top-creators__btn">
          <img src={Rocket} />
          View Rankings
        </button>
      </div>

      <div className="top-creators__grid">
        {creators.map((creator, index) => (
          <div key={creator.id} className="creator-card">
            <span className="creator-card__rank">{index + 1}</span>
            <img
              src={creator.img}
              alt={creator.name}
              className="creator-card__img"
            />
            <h3 className="creator-card__name">{creator.name}</h3>
            <p className="creator-card__sales">
              Total Sales: <span>{creator.sales} ETH</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
