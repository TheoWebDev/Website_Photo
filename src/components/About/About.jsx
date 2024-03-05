import { Link } from 'react-router-dom';
import './About.css';
import imgBio from '../../images/logo/3E5A6779.jpg';
// Backstage
import backstage01 from '../../images/logo/backstage01.jpg';
import backstage02 from '../../images/logo/backstage02.jpg';
import backstage03 from '../../images/logo/backstage03.jpg';
import backstage04 from '../../images/logo/backstage04.jpg';

function AboutSection() {
  return (
    <>
      <section className="plan-section">
          <div className="plan-container__title">
            <h2>À propos</h2>
            <div>
              <img className='imgBio' src={imgBio} alt="" />
            </div>
            <h3>Photographe voyageur</h3>
            <div className="textabout">
              <p>Je pratique la photographie depuis une dizaine d'années et j'aime voyager pour photographier ce que notre planète a de mieux à offrir, ses paysages naturels comme urbains.</p>
              <p>Ce que j'apprécie le plus, c'est de capturer le moment où les plus belles lumières se dévoilent, lors des levers et couchers de soleil.</p>
              <p>Pour toutes demandes d'informations ou si vous souhaitez acheter une photographie, vous pouvez me contacter via la <Link className="helloIci" to='/contact'>page Contact</Link>.</p>
              <p>N'hésitez pas à aller jeter un œil à la galerie.</p>
              <div className='divLink'>
                <Link className='btnVisit' to='/gallery'>Visiter la galerie</Link>
              </div>
            </div>
            <div className='divBackstage'>
              <img className='imgBackstage' src={backstage01} alt="" />
              <img className='imgBackstage' src={backstage02} alt="" />
              <img className='imgBackstage' src={backstage03} alt="" />
              <img className='imgBackstage' src={backstage04} alt="" />
            </div>
          </div>
      </section>
    </>
  );
}

export default AboutSection;
