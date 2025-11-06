import { Hero, TopCreators, TrendingCollection } from "../../section";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrendingCollection />
      <TopCreators />
    </div>
  );
};

export default Home;
