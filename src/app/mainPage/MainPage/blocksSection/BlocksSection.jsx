import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <div className="blocks__section-one__hairdresser">
            <div className="blocks__section-one__hairdresser-background">
              <a href="/services">УСЛУГИ<br/>ПАРИКМАХЕРА</a>
            </div>
          </div>
          <div className="blocks__section-one__layout">
            <div className="blocks__section-one__layout-one">
              <div className="blocks__section-one__layout-one__manicure">
                <div className="blocks__section-one__layout-one__manicure-background">
                  <a href="/services">МАНИКЮР И<br/>ПЕДИКЮР</a>
                </div>
              </div>
              <div className="blocks__section-one__layout-one__depilation">
                <div className="blocks__section-one__layout-one__depilation-background">
                  <a href="/services">ДЕПИЛЯЦИЯ</a>
                </div>
              </div>
            </div >
            <div className="blocks__section-one__layout-two">
              <div className="blocks__section-one__layout-two-background">
                <a href="/services">БРОВИ И<br/>РЕСНИЦЫ</a>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks__section-two">
          <div className="blocks__section-two__sail">
            <div className="blocks__section-two__sail-background">
              <a href="/services">АКЦИИ</a>
            </div>
          </div>
          <div className="blocks__section-two__vacancy">
            <div className="blocks__section-two__vacancy-background">
              <a href="/services">ВАКАНСИИ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;