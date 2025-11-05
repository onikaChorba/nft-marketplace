import "./App.css";
import { Header } from "./components";
import { SingUp } from "./pages";
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
