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
            <Route path="/" element={<Home />} />
            <Route path="/sing-up" element={<SingUp />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/connected-wallet" element={<ConnectedWallet />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
