import "./header.scss";
import { useState } from "react";
import logo from "../../assets/icons/Logo.png";
import user from "../../assets/icons/user.svg";
import { NavLink, Link } from "react-router-dom";

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
          <NavLink to="/nft-marketplace/marketplace">Marketplace</NavLink>
          <NavLink to="/nft-marketplace/rankings">Rankings</NavLink>
          <NavLink to="/nft-marketplace/connected-wallet">
            Connect a wallet
          </NavLink>
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
        <NavLink
          to="/nft-marketplace/marketplace"
          onClick={() => setOpen(false)}
        >
          Marketplace
        </NavLink>
        <NavLink to="/nft-marketplace/rankings" onClick={() => setOpen(false)}>
          Rankings
        </NavLink>
        <NavLink to="/nft-marketplace/connect" onClick={() => setOpen(false)}>
          Connect a wallet
        </NavLink>
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
