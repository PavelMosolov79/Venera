import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-one">
          <h2>Женский зал</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Челка</a>
                </div>
                <a>250</a> 
              </div> 
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Подравнивание волос:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>одним срезом</a>
                  </div>
                  <a>350</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>попрядно</a>
                  </div>
                  <a>500</a>
                </div>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Стрижка каре(классика)</a>
                </div>
                <a>550</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Стрижка каре боб, каре на удлинение</a>
                </div>
                <a>650</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Креативная стрижка (асимметрия, пикси)</a>
                </div>
                <a>700</a>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Модельная стрижка</a>
                </div>
                <a>500</a>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Стрижка лесенка, каскад:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>600</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>700</a>
                </div>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска волос в один тон</a>
                </div>
                <a>от 1400</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска краской клиента</a>
                </div>
                <a>от 800</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Осветление волос</a>
                </div>
                <a> от 1500</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Мелирование волос</a>
                </div>  
                <a>от 1500</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Колорирование,амбре, сомбре, шатуш, балаяж</a>
                </div>  
                <a>от 3000</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Долговременная укладка, БИО завивка</a>
                </div>  
                <a>от 1400</a>  
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Кератиновое выпрямление волос:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 2000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 3000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 4000</a>
                </div>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Нанопластика волос:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 2000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 3000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 4000</a>
                </div>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Ботокс для волос:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 1500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 2500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 3500</a>
                </div>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Химическое выпрямление волос:</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 2500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 3000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 3500</a>
                </div>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Восстановление структуры волос с OLAPLEX</a>
                </div>  
                <a>от 2500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Полировка секущихся волос насадкой HG POLISHEN</a>
                </div>  
                <a>от 800</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Укладка (с препаратами):</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 700</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 1000</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 1300</a>
                </div>
              </div>  
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Локоны (цена зависит от длины и густоты волос):</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 1200</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 1500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 1700</a>
                </div>
              </div>   
            </li>
            <li>
              <div className="blocks__section-one-services__li">
                <a>Прически свадебные (сборные):</a>
                <div className="blocks__section-one-services__li-layout"> 
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>короткий волос до 20см.</a>
                  </div>
                  <a>от 1500</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>средний волос до 40см.</a>
                  </div>
                  <a>от 1700</a>
                </div>
                <div className="blocks__section-one-services__li-layout">
                  <div className="blocks__section-one-services__li-layout-a">
                    <a>длинный волос до 60см.</a>
                  </div>
                  <a>от 2000</a>
                </div>
              </div>  
            </li>
          </ul>
          <h2>Мужской зал</h2>
          <ul>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Стрижка наголо</a>
                  </div> 
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Спортивная стрижка (одной насадкой)</a>
                </div>
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Спортивная стрижка (одной насадкой) с челкой</a>
                </div>  
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Бокс, полубокс с челкой (2-4 насадки)</a>
                </div>
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Модельная стрижка</a>
                </div>  
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Молодежная стрижка</a>
                </div>  
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Модельная стрижка ножницами</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Креативная стрижка</a>
                </div>  
                <a>от 600</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Окантовка бороды</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Стрижка бороды</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Оформление усов</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Оформление бровей</a>
                </div>  
                <a>100</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Рисунок</a>
                </div>  
                <a>от 200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services">
                <div className="blocks__section-one-services__a">
                  <a>Покраска волос</a>
                </div>  
                <a>от 800</a>
              </div>
            </li>
          </ul>
          <h2>Детский зал</h2>
          <ul>
            <li>
              <a>Мальчики</a>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Наголо</a>
                </div>  
                <a>150</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Спортивная стрижка (одной насадкой)</a>
                </div>  
                <a>250</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Спортивная стрижка с челкой</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Полубокс (2-4 насадки)</a>
                </div>
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Полубокс с челкой</a>
                </div>
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Модельная стрижка</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Молодежная стрижка</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Креативная стрижка</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Рисунок</a>
                </div>  
                <a>от 250</a>
              </div>
            </li>
            <li>
              <a>Девочки</a>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Челка</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Подравнивание волос</a>
                </div>  
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Сессон</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Каре</a>
                </div>
                <a>500</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Лесенка</a>
                </div>  
                <a>550</a>
              </div>
            </li>
          </ul>
          <h2>Пенсионные стрижки (от 60 лет)</h2>
          <ul>
            <li>
              <a>Женский зал</a>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Модельная стрижка</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Модельная удлиненная</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Сессон</a>
                </div>  
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Лесенка</a>
                </div>  
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Каре классика</a>
                </div>  
                <a>450</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Каре боб</a>
                </div>  
                <a>500</a>
              </div>
            </li>
            <li>
              <a>Мужской зал</a>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Наголо</a>
                </div>  
                <a>150</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Спортивная стрижка (одной насадкой)</a>
                </div>  
                <a>200</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Спортивная стрижка с челкой</a>
                </div>
                <a>250</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Полубокс (2-4 насадки)</a>
                </div>  
                <a>300</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Полубокс с челкой</a>
                </div>  
                <a>350</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Модельная стрижка</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Молодежная стрижка</a>
                </div>  
                <a>400</a>
              </div>
            </li>
            <li>
              <div className="blocks__section-one-services__li-layout">
                <div className="blocks__section-one-services__li-layout-a">
                  <a>Модельная ножницами</a>
                </div>  
                <a>450</a>
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
                  <a className="blocks__section-two__sail-background-a" href="/services/hairdresser">Услуги парикмахера</a>
                </li>
                <li>
                  <a href="/contacts">Маникюр и педикюр</a>
                </li>
                <li>
                  <a href="/contacts">Депиляция</a>
                </li>
                <li>
                  <a href="/contacts">Брови и ресницы</a>
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