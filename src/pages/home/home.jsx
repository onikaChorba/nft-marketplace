import {
  BrowseCategories,
  DiscoverNFTs,
  Hero,
  Offers,
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
      <Offers />
    </div>
  );
};

export default Home;
