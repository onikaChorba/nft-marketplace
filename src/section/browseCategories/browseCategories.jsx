import "./browseCategories.scss";
import ArtIcon from "../../assets/icons/brush.png";
import CollectiblesIcon from "../../assets/icons/collectibles.png";
import MusicIcon from "../../assets/icons/music.png";
import PhotoIcon from "../../assets/icons/photo.png";
import VideoIcon from "../../assets/icons/video.png";
import UtilityIcon from "../../assets/icons/utility.png";
import SportIcon from "../../assets/icons/sport.png";
import VirtualIcon from "../../assets/icons/planet.png";

const categories = [
  { name: "Art", icon: ArtIcon },
  { name: "Collectibles", icon: CollectiblesIcon },
  { name: "Music", icon: MusicIcon },
  { name: "Photography", icon: PhotoIcon },
  { name: "Video", icon: VideoIcon },
  { name: "Utility", icon: UtilityIcon },
  { name: "Sport", icon: SportIcon },
  { name: "Virtual Worlds", icon: VirtualIcon },
];

const BrowseCategories = () => {
  return (
    <section className="browse">
      <h2 className="browse__title">Browse Categories</h2>
      <div className="browse__grid">
        {categories.map((cat, i) => (
          <div className="browse__card" key={i}>
            <div className="browse__icon">
              <img src={cat.icon} alt={cat.name} />
            </div>
            <p className="browse__name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
