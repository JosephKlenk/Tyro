import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

interface Props {}

const LandingPage: React.FC<Props> = () => {
  const [title, setTitle] = useState<string>("Welcome to my Landing Page");

  return (
    <div className="landing-page">
	  <aside className="menu2 p-3 has-background-dark" style={{ height: "110%" }}>
        <React.Fragment>
          <p className="menu2-label">Your content</p>
          <ul className="menu2-list">
		    <li>
              <NavLink activeClassName="is-active" to="/" exact={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/TyroBuilder" exact={true}>
                SkillTrees
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/TodoList">
                To-Do
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/journal">
                Journal
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </React.Fragment>

      <p className="menu2-label">Get Help</p>
      <ul className="menu2-list">
        <li>
          <a
            href="https://jklenk.com/contact"
            target="_blank"
            rel="noreferrer"
          >
            Report Bugs
          </a>
        </li>
      </ul>
      <p className="menu2-label">Your account</p>
      <ul className="menu2-list">
        <li>
          <NavLink to="/profile" activeClassName="is-active">
            Your Profile
          </NavLink>
        </li>
      </ul>
    </aside>
   </div>
  );
};

export default LandingPage;
