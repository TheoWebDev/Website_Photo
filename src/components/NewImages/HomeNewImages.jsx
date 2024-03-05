
import { useEffect, useState } from 'react';
import { dataImages } from '../../data/images';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import './NewImages.css';

import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

function HomeNewImages() {

  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const getRandomImages = () => {
      const imgSpotlight = dataImages.filter(item => item.isSpotlight === true)
      const imagesMap = imgSpotlight.map(item => item.image);
      const imgShuffled = imagesMap.sort(() => 0.5 - Math.random());
      const imagesFiltered = imgShuffled.slice(0, 5);
      setRandomImages(imagesFiltered);
    };
    getRandomImages();
  }, []);


  return (
    <>
      <section className="choose-section">
          <div className="choose-container">
              <div className="text-container__left">
                <h4 className='titleNewImg'>Nouvelles photographies</h4>
              </div>
              <div className="imgShow">
              { randomImages.map((value, index) => (
                <SlideshowLightbox showThumbnails={true}>
                  <img key={index} data-aos="zoom-in" data-aos-duration="1000" className="classImgShow" src={value} alt="" loading='lazy' />
                </SlideshowLightbox>
                ))
              }
              </div>
            
          </div>
      </section>
    </>
  );
}

export default HomeNewImages;
