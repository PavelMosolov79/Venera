import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <h2>Депиляция</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Усики</a>
                  </div> 
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Живот</a>
                </div>
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Подмышки</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Руки до локтя</a>
                </div>  
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Руки выше локтя</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Ноги до колен</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Ноги выше колен</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Классика бикини</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Глубокое бикини</a>
                </div>  
                <a>от 700</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="blocks__section-two">
          <div className="blocks__section-two__sail">
            <div className="blocks__section-two__sail-background">
              <h1>Услуги</h1>
              <ul>
                <li>
                  <a href="/services/hairdresser">Услуги парикмахера</a>
                </li>
                <li>
                  <a href="/services/manicure">Маникюр и педикюр</a>
                </li>
                <li>
                  <a className="blocks__section-two__sail-background-a" href="/services/depilation">Депиляция</a>
                </li>
                <li>
                  <a href="/services/eyebrows">Брови и ресницы</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;