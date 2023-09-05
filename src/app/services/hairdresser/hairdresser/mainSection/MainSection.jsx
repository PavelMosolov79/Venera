import "./MainSectionPhone.css";
import "./MainSectionDesctop.css"
import Link from "next/link"

const MainSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }

  return (
    <div className="main">
      <div className="main__container">
        <header>
          <div className="main__container-header__layout">
            <div className="main__container-header__layout-logo">
              <a href="/"><img src=".././logo.svg" alt="Venera"/></a>
            </div>
            <nav>
              <ul>
                <li>
                  <a className="main__container-header__layout-page" href="/services/hairdresser">Услуги</a>
                </li>
                <li>
                  <a href="/news">Новости и акции</a>
                </li>
                <li>
                  <a href="/vacancy">Вакансии</a>
                </li>
                <li>
                  <a href="/contacts">Контакты</a>
                </li>
              </ul>
            </nav>
            <div class="main__container-header__layout-dropdown">
              <button class="main__container-header__layout-dropbtn">
                <img src=".././menu.svg" />
              </button>
              <div class="main__container-header__layout-dropdown-content">
                <a href="/services/hairdresser">Услуги парикмахера</a>
                <a href="/contacts">Маникюр и педикюр</a>
                <a href="/contacts">Депиляция</a>
                <a href="/contacts">Брови и ресницы</a>
                <a href="/news">Новости и акции</a>
                <a href="/vacancy">Вакансии</a>
                <a href="/contacts">Контакты</a>
              </div>
            </div>
            <div className="main__container-header__layout-phone">
              <img src=".././phone.svg"/>
              <a>+ 7 (999) 999-99-99</a>
            </div>
          </div>
        </header>
        <div className="main__container-network">
          <div className="main__container-network__h1">
            <h1>УСЛУГИ</h1>
            <p>ПАРИКМАХЕРА</p>
          </div>
          <div className="main__container-network__vk">
            <div className="main__container-network__text">
              <a className="main__container-network__a">Наши соц. сети:</a>
            </div>
            {/* <a href="https://vk.com"><img src="./vk.svg"/></a> */}
            <div className="main__container-network__logo">
              <a href="https://vk.com"><img src=".././vk.svg"/></a>
              {/* <a href="https://vk.com"><img src="./instagram.svg"/></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;