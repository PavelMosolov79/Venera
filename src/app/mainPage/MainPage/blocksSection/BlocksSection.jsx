import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <div className="blocks__section-one__hairdresser">
            <a>УСЛУГИ ПАРИКМАХЕРА</a>
          </div>
          <div className="blocks__section-one__layout">
            <div className="blocks__section-one__layout-one">
              <div className="blocks__section-one__layout-one__manicure">
                <a>МАНИКЮР И ПЕДИКЮР</a>
              </div>
              <div className="blocks__section-one__layout-one__depilation">
                <a>ДЕПИЛЯЦИЯ</a>
              </div>
            </div >
            <div className="blocks__section-one__layout-two">
              <a>БРОВИ И РЕСНИЦЫ</a>
            </div>
          </div>
        </div>
        <div className="blocks__section-two">
          
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;