import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ user }) => {
  return (
    <aside className="menu p-3 has-background-dark" style={{ height: "110%" }}>
        <React.Fragment>
          <p className="menu-label">Get Started</p>
          <ul className="menu-list">
		    <li>
              <NavLink activeClassName="is-active" to="/" exact={true}>
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
          </ul>
        </React.Fragment>
      <p className="menu-label">Your account</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/profile" activeClassName="is-active">
            Your Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
