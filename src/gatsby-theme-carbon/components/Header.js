import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';

import {
  header,
  headerName,
  navLink,
  navLists,
  navLeftBorder,

  switcherButtonOpen,
  headerButton,
  switcherButton,

  globalBar,
} from './Header.module.scss';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';

const Header = ({ children }) => {
  const {
    toggleNavState,
    switcherIsOpen,
  } = useContext(NavContext);

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
            to="/freight"
          >
            Freight
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
        
        <HeaderGlobalBar className={globalBar}>
          <HeaderGlobalAction
            className={cx(headerButton, switcherButton, {
              [switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label="Switch"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>

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
