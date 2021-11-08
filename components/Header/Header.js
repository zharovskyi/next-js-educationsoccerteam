import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa } from '@fortawesome/free-brands-svg-icons';

import style from './Header.module.scss';

const Header = ({ menuItems }) => {
  return (
    <header>
      <div className={style.containerHeader}>
        <div className={style.bannerInfo}>
          <div className={style.bannerIcon}>
            <ul className={style.bannerIconItems}>
              <li>
                <a href="">
                  <i className="fab fa-"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.bannerPhone}>
            <div className={style.bannerPhoneItem}>
              <i className="fas fa-phone-square-alt icon-connect"></i>
              <span>+61 3 8376 6284</span>
            </div>
            <div className={style.bannerPhoneItem}>
              <i className="fab fa-skype icon-connect"></i>
              <span>team.skype</span>
            </div>
          </div>
          <div className="banner-search">
            <form>
              <input type="text" className="search-box" name="text" />
              <button><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="banner-lang">
            <ul className="lang-icon">
              <li>En</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.containerHeaderBottom}>
        <div className={style.containerBottom}>
          <div className={style.bootomIcon}>
            <a className={style.brand} href="">
              {/* <Image src="../../public/vercel.svg" alt="Logo" /> */}
            </a>
            <div id="menu-mobile" className={style.menuMobile}>
              
            </div>
          </div>
          <nav className={style.navPrimary}>
          <div className={style.menuPrimaryMenuContainer}>
            <ul id="primary-menu" className={style.primaryMenu}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a className='' href={ item.title }>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            </div>
              <a className={style.navPrimaryItem} href="">
                {/* <i className="fa fa-shopping-cart" ></i> */}
                <FontAwesomeIcon icon={['fa', 'fa-shopping-cart']} />
              </a>
          </nav>
        </div>
      </div>
	  </header>
  );
};

export default Header;