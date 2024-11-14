import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import styles from './Header.module.scss';
import { useNavigation } from '../../context/NavigationContext';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { MobileHeader } from '../MobileHeader/MobileHeader';

interface HeaderProps {
  turnOffAnimation: () => void;
  toggleContactModal: () => void;
}

const Header = ({
  turnOffAnimation,
  toggleContactModal,
}: HeaderProps): ReactElement => {
  const { navigateWithTransition } = useNavigation();
  const isMobile = useMediaQuery({ 'max-width': 840 });

  return (
    <header>
      {isMobile ? (
        <MobileHeader
          turnOffAnimation={turnOffAnimation}
          toggleContactModal={toggleContactModal}
        />
      ) : (
        <nav className={styles.navbar}>
          <div className={styles.navbar_container}>
            <div className={styles.navbar_logo_container}>
              <Link
                to="/"
                className={styles.logo}
                onClick={(e) => {
                  turnOffAnimation();
                  e.preventDefault();
                  navigateWithTransition('/');
                }}
              >
                <img src={avatar} alt="Logo" className={styles.logo_img} />
              </Link>
              <h2>SlingShot Dev</h2>
            </div>
            <ul className={styles.nav_links}>
              <li>
                <Link
                  to="/"
                  className={styles.nav_link}
                  onClick={(e) => {
                    turnOffAnimation();
                    e.preventDefault();
                    navigateWithTransition('/');
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={styles.nav_link}
                  onClick={(e) => {
                    turnOffAnimation();
                    e.preventDefault();
                    navigateWithTransition('/about');
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className={styles.nav_link}
                  onClick={(e) => {
                    turnOffAnimation();
                    e.preventDefault();
                    navigateWithTransition('/work');
                  }}
                >
                  Work
                </Link>
              </li>
              <li
                className={styles.nav_link}
                onClick={() => {
                  toggleContactModal();
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
