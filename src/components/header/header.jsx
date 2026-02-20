import "./header.scss";
import { useState } from "react";
import logo from "../../assets/icons/Logo.png";
import user from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? "open" : ""}>
      <Link to="/nft-marketplace">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className="nav-block">
        <nav className="nav-block__nav">
          <Link to="/nft-marketplace/marketplace">Marketplace</Link>
          <a href="#rankings">Rankings</a>
          <Link to="/nft-marketplace/connected-wallet">Connect a wallet</Link>
        </nav>

        <Link to="/nft-marketplace/sing-up">
          <button className="nav-block__btn">
            <img src={user} alt="user" />
            <p>Sign Up</p>
          </button>
        </Link>
      </div>

      <div className="burger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mobile-menu">
        <a href="#marketplace" onClick={() => setOpen(false)}>
          Marketplace
        </a>
        <a href="#rankings" onClick={() => setOpen(false)}>
          Rankings
        </a>
        <a href="#connect" onClick={() => setOpen(false)}>
          Connect a wallet
        </a>
        <Link to="/nft-marketplace/sing-up">
          <button className="nav-block__btn">
            <img src={user} alt="user" />
            <p>Sign Up</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
