import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
function SignIn() {
  return (
    <main className="sign_in">
      <section className="sign_in_container">
        <div className="img__container">
          <img src={require("../../assets/icons/image-phone.jpg")} alt=""/>
        </div>
        <div className="form__container">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form>
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <div>
              <button type="submit">Log In</button>
              <Link to="Forget-Password">Forget Password</Link>
            </div>
          </form>

        </div>
      </section>
    </main>
  );
}

export default SignIn;
