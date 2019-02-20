import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

const Navigation = () => (
  <nav role="navigation">
    <ul>
      <li>
        <NavLink exact to={ROUTES.HOME}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to={ROUTES.ABOUT}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to={ROUTES.WORK}>
          Work
        </NavLink>
      </li>
      <li>
        <NavLink exact to={ROUTES.CONTACT}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
