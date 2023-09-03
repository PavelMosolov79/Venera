import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <div className="blocks__section-one__hairdresser">
            <div className="blocks__section-one__hairdresser-background">
              <a>УСЛУГИ<br/>ПАРИКМАХЕРА</a>
            </div>
          </div>
          <div className="blocks__section-one__layout">
            <div className="blocks__section-one__layout-one">
              <div className="blocks__section-one__layout-one__manicure">
                <div className="blocks__section-one__layout-one__manicure-background">
                  <a>МАНИКЮР И<br/>ПЕДИКЮР</a>
                </div>
              </div>
              <div className="blocks__section-one__layout-one__depilation">
                <div className="blocks__section-one__layout-one__depilation-background">
                  <a>ДЕПИЛЯЦИЯ</a>
                </div>
              </div>
            </div >
            <div className="blocks__section-one__layout-two">
              <div className="blocks__section-one__layout-two-background">
                <a>БРОВИ И<br/>РЕСНИЦЫ</a>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks__section-two">
          <div className="blocks__section-two__sail">
            <div className="blocks__section-two__sail-background">
              <a>АКЦИИ</a>
            </div>
          </div>
          <div className="blocks__section-two__vacancy">
            <div className="blocks__section-two__vacancy-background">
              <a>ВАКАНСИИ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;