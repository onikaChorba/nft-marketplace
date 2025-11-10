import "./singup.scss";
import email from "./../../assets/icons/email.svg";
import singUpImg from "./../../assets/icons/singup.png";
import userIcon from "./../../assets/icons/user-input.svg";
import password from "./../../assets/icons/password.svg";
import { useReducer } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };

    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const SingUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited:", state);
    dispatch({ type: "RESET" });
  };

  return (
    <div className="signup">
      <div className="signup__img">
        <img src={singUpImg} alt="signup img" />
      </div>

      <form className="signup__form" onSubmit={handleSubmit}>
        <h2 className="signup__title">Create account</h2>
        <p className="signup__subtitle">
          Welcome! Enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <div className="signup__inputs">
          <div className="input-wrapper">
            <img src={userIcon} alt="icon" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <img src={email} alt="icon" />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <img src={password} alt="icon" />
            <input
              type="passwordCurrent"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <img src={password} alt="icon" />
            <input
              type="passwordRepeat"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
            />
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
