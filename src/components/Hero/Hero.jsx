
import { useEffect, useState } from "react";
import './Hero.css';

import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-content__text">
              <h1 data-aos="fade-down" data-aos-duration="2000">
                Théophile Demarle
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Photographies
              </h2>
            </div>
          </div>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
