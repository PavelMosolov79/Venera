import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <h2>Маникюрный зал</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Классический маникюр (обрезной)</a>
                  </div> 
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Европейский маникюр (без обрезной)</a>
                </div>
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Комбинированный маникюр (аппарат + щипчики)</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Аппаратный маникюр</a>
                </div>  
                <a>550</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Горячий маникюр</a>
                </div>  
                <a>700</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Парафиновые ванночки</a>
                </div>  
                <a>600</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие гель-лаком (один тон)</a>
                </div>  
                <a>700</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие гель-лаком (два и более тонов)</a>
                </div>  
                <a>от 800</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие обычным лаком</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Полировка ногтей (воском)</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Снятие гель-лака</a>
                </div>  
                <a>250</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Снятие обычного лака</a>
                </div>  
                <a>50</a>
              </div>
            </li>
          </ul>
          <h2>Наращивание ногтей</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Наращивание ногтей с однотонным покрытием</a>
                  </div> 
                <a>от 2000</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Наращивание ногтей френч (короткий, выкладной)</a>
                </div>
                <a>от 2300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Наращивание ногтей френч (длинный, выкладной)</a>
                </div>  
                <a>от 2500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие гель-лаком</a>
                </div>  
                <a>700</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Снятие нарощенных ногтей</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Ремонт одного нарощенного ногтя</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Укрепление ногтей</a>
                </div>  
                <a>1000</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Дизайн ногтей</a>
                </div>  
                <a>от 100</a>
              </div>
            </li>
          </ul>
          <h2>Педикюрный зал</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр аппаратный</a>
                  </div> 
                <a>от 1200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр только пальцы</a>
                </div>
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр (легкий)</a>
                </div>  
                <a>1000</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр (средний)</a>
                </div>  
                <a>от 1200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр (сложный)</a>
                </div>  
                <a>от 1400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр только стопы (легкий)</a>
                </div>  
                <a>600</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр только стопы (средний)</a>
                </div>  
                <a>700</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Педикюр только стопы (сложный)</a>
                </div>  
                <a>от 800</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Полировка и питание ногтей (воском)</a>
                </div>  
                <a>150</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие лаком</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покрытие гель-лаком</a>
                </div>  
                <a>700</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Удаление мозолей (1 шт.)</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Снятие гель-лака</a>
                </div>  
                <a>250</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Снятие лака</a>
                </div>  
                <a>50</a>
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
                  <a className="blocks__section-two__sail-background-a" href="/services/manicure">Маникюр и педикюр</a>
                </li>
                <li>
                  <a href="/services/depilation">Депиляция</a>
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