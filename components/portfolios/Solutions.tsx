import RevealText from "../animation/RevealText";
import BackgroundParallax from "../animation/BackgroundParallax";

export default function Solutions() {
  return (
    <>
      {/* Project Block - Solution Description with H2 Title and Paragraph Start */}
      <div className="mxd-project__block">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  Solution
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph medium-text">
                  <p className="anim-uni-in-up">
                    We designed and developed a modern digital experience that reflects the studio's architectural approach through clean layouts, bold typography, and carefully curated imagery.
                  </p>
                  <p className="anim-uni-in-up">
                    The visual language combines a deep charcoal background with vibrant magenta accents, creating a distinctive identity while keeping the architectural photography at the center of attention.
                  </p>
                  <p className="anim-uni-in-up">
                    The website introduces a structured project showcase, clear service presentation, and intuitive navigation to help visitors discover the studio's work and connect with the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Block - Solution Description with H2 Title and Paragraph End */}
      {/* Project Block - Parallax Fullwidth Image Start */}
      <div className="mxd-project__block mxd-grid-item">
        <div className="mxd-divider">
          <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image prj-details-img-02 parallax-img"
          />
        </div>
      </div>
      {/* Project Block - Parallax Fullwidth Image End */}
    </>
  );
}
