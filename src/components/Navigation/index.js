import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from 'constants/routes';

const Navigation = () => (
  <nav role="navigation">
    <ul>
      <li>
        <NavLink exact to={routes.HOME}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.ABOUT}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.WORK}>
          Work
        </NavLink>
      </li>
      <li>
        <NavLink exact to={routes.CONTACT}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
