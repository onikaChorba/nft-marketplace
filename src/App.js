import "./App.css";
import { Header } from "./components";
import { ConnectedWallet, SingUp } from "./pages";
import { Hero } from "./section";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/connected-wallet" element={<ConnectedWallet />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
