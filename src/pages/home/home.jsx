import {
  BrowseCategories,
  DiscoverNFTs,
  Hero,
  TopCreators,
  TrendingCollection,
} from "../../section";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNFTs />
    </div>
  );
};

export default Home;
