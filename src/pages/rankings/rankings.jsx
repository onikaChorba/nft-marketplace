import React, { useState } from "react";
import "./rankings.scss";
import avatar1 from "../../assets/icons/Avatar.png";

const Rankings = () => {
  const [filter, setFilter] = useState("Today");

  const rankingData = [
    {
      id: 1,
      name: "Jaydon Ekstrom Bothman",
      change: "+1.41%",
      sold: 602,
      volume: "12.4 ETH",
      img: avatar1,
    },
    {
      id: 2,
      name: "Ruben Carder",
      change: "+1.41%",
      sold: 602,
      volume: "12.4 ETH",
      img: avatar1,
    },
    {
      id: 3,
      name: "Alfredo Septimus",
      change: "+1.41%",
      sold: 602,
      volume: "12.4 ETH",
      img: avatar1,
    },
  ];

  return (
    <div className="rankings">
      <div className="rankings__header">
        <h1 className="rankings__title">Top Creators</h1>
        <p className="rankings__text">
          Check out top rated creators on the NFT Marketplace.
        </p>
      </div>

      <div className="rankings__filters">
        {["Today", "This Week", "This Month", "All Time"].map((item) => (
          <button
            key={item}
            className={`rankings__filter-btn ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="rankings__table">
        <div className="rankings__table-header">
          <span className="rankings__col-num">#</span>
          <span className="rankings__col-artist">Artist</span>
          <span className="rankings__col-change">Change</span>
          <span className="rankings__col-sold">NFTs Sold</span>
          <span className="rankings__col-volume">Volume</span>
        </div>

        <div className="rankings__list">
          {rankingData.map((item, index) => (
            <div className="rankings__row" key={item.id}>
              <div className="rankings__col-num">{index + 1}</div>
              <div className="rankings__col-artist">
                <img src={item.img} alt="avatar" />
                <span>{item.name}</span>
              </div>
              <div className="rankings__col-change">{item.change}</div>
              <div className="rankings__col-sold">{item.sold}</div>
              <div className="rankings__col-volume">{item.volume}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rankings;
