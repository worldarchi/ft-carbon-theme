import React from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
} from 'carbon-components-react';

import {
  header,
  headerName,
  navLink,
  navLists,
  navLeftBorder,
} from './Header.module.scss';

const Header = ({ children }) => {

  return (
    <>
      <ShellHeader aria-label="Header" className={header}>
        <Link
          className={headerName}
          to="/"
        >
          Freight Trust
        </Link>
        <div className={navLists}>
          <div className={navLeftBorder}></div>
          <Link
            className={navLink}
            to="/"
          >
            Managed EDI
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Solutions
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Blockchain
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Corporate
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Blog
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Contact
          </Link>
        </div>
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    Carbon&nbsp;<span>Design System</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
