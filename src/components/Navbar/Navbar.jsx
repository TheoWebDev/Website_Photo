import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import './Navbar.css';
//import logo from '../../images/logo/logo-icon.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/gallery">
                Galerie
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                À propos
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className={location.pathname === '/' ? 'navbar' : 'navbarOthers'}>
        <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              {/* <img src={logo} alt="logo-td" /> */}
              TD
            </Link>
          </div>
          <ul className='navbar__links'>
            <li>
              <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
                Accueil
              </Link>
            </li>
            <li>
              {" "}
              <Link className={splitLocation[1] === "gallery" ? "active" : ""} to="/gallery">
                Galerie
              </Link>
            </li>
            <li>
              {" "}
              <Link className={splitLocation[1] === "about" ? 'active' : ''} to="/about">
                À propos
              </Link>
            </li>
            <li>
              {" "}
              <Link className={splitLocation[1] === "contact" ? 'active' : ''} to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
