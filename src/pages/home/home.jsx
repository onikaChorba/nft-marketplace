import {
  BrowseCategories,
  DiscoverNFTs,
  Hero,
  HowItWorks,
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
      <HowItWorks />
    </div>
  );
};

export default Home;
