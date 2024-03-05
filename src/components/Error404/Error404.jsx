import { Link } from "react-router-dom";

function ErrorSection() {
  return (
    <>
      <section className="plan-section">
        <div className="plan-container__title">
          <h3>Cette page n'existe pas.</h3>
          <Link to ='/gallery'>
              <button className='btnToGallery'>Retour à la galerie</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default ErrorSection;
