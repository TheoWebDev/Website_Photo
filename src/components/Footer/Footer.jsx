import { IconBrandInstagram, IconMail, IconBrandYoutube } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <>
  <footer>
    <div className="containerFooter">
      <div className="footerc">
        <div className="copyrightText">
          <h2>&copy; 2024 Théophile Demarle<span className="sepration">&nbsp;|&nbsp;</span></h2>
          <h2>Tous droits réservés</h2>
        </div>
        <div className="footerc__socials">
          <Link to='https://www.instagram.com/theo.demarle/' target="_black"><IconBrandInstagram size={30} /></Link>
          <Link to='https://youtube.com/@HighwayTheo?si=q9Z_xpFKUFxXk7fZ' target="_black"><IconBrandYoutube size={30} /></Link>
          <Link to='/contact'><IconMail size={30} /></Link>
        </div>
      </div>
      <div className="questionForSite">
        <h5>Une question sur le site ? N'hésitez pas à <Link className="linkToContactPage" to='/contact'>me contacter</Link>.</h5>
      </div>
    </div>

  </footer>
    </>
  );
}

export default Footer;
