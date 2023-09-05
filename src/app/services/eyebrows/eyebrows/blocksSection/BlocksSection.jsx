import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <h2>Брови и ресницы</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Оформление бровей (коррекция)</a>
                  </div> 
                <a>250</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Оформление бровей (заросшие)</a>
                </div>
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска бровей (EGORA BONACROM)</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска бровей (REFECTOCIL)</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска бровей (хна)</a>
                </div>  
                <a>600</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска ресниц (ESTEL)</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска ресниц (REFECTOCIL)</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Ламинирование бровей</a>
                </div>  
                <a>1000</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Комплекс – ламинированние бровей + покраска + коррекция</a>
                </div>  
                <a>1300</a>
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
                  <a href="/services/depilation">Депиляция</a>
                </li>
                <li>
                  <a className="blocks__section-two__sail-background-a" href="/services/eyebrows">Брови и ресницы</a>
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