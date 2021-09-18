import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper teal darken-3 px-1">
      <a href="#" className="brand-logo">
        React + TypeScript
      </a>
      <ul  className="right hide-on-med-and-down">
        <li>
          <NavLink to='/'>Our Projects</NavLink>
        </li>
        <li>

          <NavLink to='about'>About Us</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
