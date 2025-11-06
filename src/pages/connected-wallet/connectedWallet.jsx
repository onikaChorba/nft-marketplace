import "./connectedWallet.scss";
import Coint from "./../../assets/icons/coin.svg";
import FoxIcon from "./../../assets/icons/fox.svg";
import Wallet from "./../../assets/icons/wallet.svg";
import ConnectedImg from "./../../assets/icons/connected.png";

const ConnectedWallet = () => {
  return (
    <div className="connectedWallet">
      <img src={ConnectedImg} alt="connect" className="connectedWallet__img" />
      <div className="connectedWallet__block textblock">
        <h2 className="textblock__h2">Connect wallet</h2>
        <p className="textblock__text">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <div className="textblock__btns">
          <button className="textblock__btns-item">
            <img src={FoxIcon} alt="fox" />
            <p>Metamask</p>
          </button>
          <button className="textblock__btns-item">
            <img src={Wallet} alt="fox" />
            <p>Wallet Connect</p>
          </button>
          <button className="textblock__btns-item">
            <img src={Coint} alt="fox" />
            <p>Coinbase</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
