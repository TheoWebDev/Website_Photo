import { Link } from "react-router-dom";
import { dataAlbums } from "../../data/albums";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import './Albums.css';

import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

function Albums() {
  const titleLeMans = '24h du Mans';
  const [isLoading, setIsLoading] = useState(true);

  const sortAlbums = dataAlbums.sort((a, b) => a.name.localeCompare(b.name));

  console.log(sortAlbums);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <>
      <section className="plan-section">
        <div className="plan-container__title">
          <h2><span className="hiddenTxt">Bienvenue sur la </span>galerie</h2>
          <h3>Ici, vous pouvez visiter les différentes destinations que j'ai pu découvrir sous forme d'albums.</h3>
        </div>
        {isLoading ? (
          <Loading />
          ) : (
            <>
            { sortAlbums.length ? (
              <div className="galleryGrid">
                { sortAlbums.map(item => (
                  <Link key={item._id} state={item} to={item.name.toLowerCase()}>
                    <div className="container-text">
                      <img src={item.image} data-aos="zoom-in" data-aos-duration="1000" alt="" loading="lazy" />
                      <div className="titleAlbum">{item.name === '24hduMans' ? titleLeMans : item.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
              ) : (
                <div className="emptyData">
                  <h1>Il n'y a pas d'albums disponible pour le moment.</h1>
                </div>
              )
            }
            </>
          )
        }
      </section>
    </>
  );
}

export default Albums;