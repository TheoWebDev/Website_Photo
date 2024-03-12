import { Link } from "react-router-dom";
import './Banner.css';

function Banner() {
  return (
    <>
      <div className="bannerImg">
        <Link className="linkGaleries" to='/gallery'>Accéder à la galerie</Link>
      </div>
    </>
  );
}

export default Banner;
