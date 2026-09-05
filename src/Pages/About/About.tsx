import "./about.css";
import Aboutimg from '../../assets/about.png'
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="about__eyebrow">Our Story</span>
          <h2 className="about__heading">
            Sound, designed
            <br />
            with intention.
          </h2>
          <p className="about__paragraph">
            Veluno started with a simple idea — audio gear shouldn't force you
            to choose between good sound and good design. Every piece we make
            is tuned by ear, tested for comfort, and built to last well beyond
            the trend cycle.
          </p>
          <p className="about__paragraph">
            From our first pair of headphones to the products you see today,
            we've stayed focused on the same thing: honest craftsmanship,
            without the noise.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">8+</span>
              <span className="about__stat-label">Years of craft</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">40k+</span>
              <span className="about__stat-label">Happy customers</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">120+</span>
              <span className="about__stat-label">Countries shipped</span>
            </div>
          </div>
        </div>

        <div className="about__media">
          <img
            className="about__image"
            src={Aboutimg}
            alt="Veluno headphones in use"
          />
        </div>
      </div>
    </section>
  );
}
