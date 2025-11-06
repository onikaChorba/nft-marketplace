import "./trendingCollection.scss";
import ImgMain1 from "./../../assets/icons/image1.png";
import Img1 from "./../../assets/icons/image11.png";
import Img12 from "./../../assets/icons/image12.png";
import Avatar1 from "./../../assets/icons/foxAvatar.png";

import ImgMain2 from "./../../assets/icons/image2.png";
import Img21 from "./../../assets/icons/image21.png";
import Img22 from "./../../assets/icons/image22.png";
import Avatar2 from "./../../assets/icons/Avatar2.png";

import ImgMain3 from "./../../assets/icons/image3.png";
import Img31 from "./../../assets/icons/image31.png";
import Img32 from "./../../assets/icons/image32.png";
import Avatar3 from "./../../assets/icons/Avatar3.png";

const collections = [
  {
    title: "DSGN Animals",
    author: "MrFox",
    mainImg: ImgMain1,
    items: [Img1, Img12],
    price: "1025+",
    avatar: Avatar1,
  },
  {
    title: "Magic Mushrooms",
    author: "Shroomie",
    mainImg: ImgMain2,
    items: [Img21, Img22],
    price: "1025+",
    avatar: Avatar2,
  },
  {
    title: "Disco Machines",
    author: "BeKind2Robots",
    mainImg: ImgMain3,
    items: [Img31, Img32],
    price: "1025+",
    avatar: Avatar3,
  },
  {
    title: "DSGN Animals",
    author: "MrFox",
    mainImg: ImgMain1,
    items: [Img1, Img12],
    price: "1025+",
    avatar: Avatar1,
  },
];

const TrendingCollection = () => {
  return (
    <div className="trendingCollection">
      <div className="title">
        <h2 className="trendingCollection__title">Trending Collection</h2>
        <p className="trendingCollection__text">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="trendingCollection__list">
        {collections.map((col, i) => (
          <div className="collectionCard" key={i}>
            <img
              src={col.mainImg}
              alt={col.title}
              className="collectionCard__main"
            />

            <div className="collectionCard__images">
              {col.items.map((item, idx) => (
                <img src={item} alt="" key={idx} />
              ))}
              <div className="collectionCard__count">{col.price}</div>
            </div>

            <h3 className="collectionCard__title">{col.title}</h3>
            <p className="collectionCard__author">
              <img src={col.avatar} alt="icon" /> {col.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollection;
