import { useLocation } from "react-router-dom";
import { dataImages } from "../../data/images";
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './InsideAlbums.css';

import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

function InsideAlbums() {

  const location = useLocation();
  const albumParams = location.state;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  const images = dataImages
        .filter(titi => titi.album_id === albumParams._id)
        .sort((a, b) => a.image - b.image)
  ;

  const titleLeMans = '24h du Mans 2023';

  return (
    <>
      <div className='plan-section'>
        <div className="titleInsideAlbums">
          <h2>{albumParams.name === '24hduMans' ? titleLeMans : albumParams.name}</h2>
          <h3>{albumParams.description}</h3>
        </div>

        {isLoading ? (
          <Loading />
          ) : (
            <>
            { images.length > 0 ? (
              <SlideshowLightbox className='image-container' showThumbnails={true}>
                {
                  images.map(item => (
                    <img key={item._id} className='imgGallery' src={item.image} data-aos="zoom-in" data-aos-duration="1000" alt='' loading="lazy" />
                  ))
                }
              </SlideshowLightbox>
              ) : (
                <div className="empty">
                  <h1>Cet album ne contient pas de photographies pour le moment.</h1>
                </div>
              )
            }
            {/* <Link to="/gallery">Galeries</Link> */}
            <div className="redirectMobile">
            <Link to ='/gallery'>
              <button className='btnToGallery'>retour à la galerie</button>
            </Link>
            </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default InsideAlbums;
