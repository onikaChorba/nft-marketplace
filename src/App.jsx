import "./App.css";
import { Footer, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { ConnectedWallet, Home, MarketPlace, SingUp } from "./pages";

function App() {
  return (
    <div>
      <div className="Content">
        <Header />
        <main>
          <Routes>
            <Route path="/nft-marketplace/" element={<Home />} />
            <Route path="/nft-marketplace/sing-up" element={<SingUp />} />
            <Route
              path="/nft-marketplace/marketplace"
              element={<MarketPlace />}
            />
            <Route
              path="/nft-marketplace/connected-wallet"
              element={<ConnectedWallet />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
