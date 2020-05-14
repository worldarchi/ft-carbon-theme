import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerName,
  navLink,
  navLists,
  navLeftBorder,
  collapsed,
  headerButton,
  switcherButton,
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
