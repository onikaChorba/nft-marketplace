import "./singup.scss";
import email from "./../../assets/icons/email.svg";
import singUpImg from "./../../assets/icons/singup.png";
import userIcon from "./../../assets/icons/user-input.svg";
import password from "./../../assets/icons/password.svg";

const SingUp = () => {
  return (
    <div className="signup">
      <div className="signup__img">
        <img src={singUpImg} alt="signup img" />
      </div>

      <form className="signup__form">
        <h2 className="signup__title">Create account</h2>
        <p className="signup__subtitle">
          Welcome! Enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <div className="signup__inputs">
          <div className="input-wrapper">
            <img src={userIcon} alt="icon" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-wrapper">
            <img src={email} alt="icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-wrapper">
            <img src={password} alt="icon" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-wrapper">
            <img src={password} alt="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <button type="submit" className="signup__btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SingUp;
