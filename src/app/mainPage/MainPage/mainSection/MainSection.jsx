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
              <img src="./logo.svg" alt="Venera"/>
            </div>
            <nav>
              <ul>
                <li>
                  <a>Услуги</a>
                </li>
                <li>
                  <a>Новости и акции</a>
                </li>
                <li>
                  <a>Вакансии</a>
                </li>
                <li>
                  <a>Контакты</a>
                </li>
              </ul>
            </nav>
            <div className="main__container-header__layout-phone">
              <img src="./phone.svg"/>
              <a>+ 7 (999) 999-99-99</a>
            </div>
          </div>
        </header>
        <div className="main__container-network">
          <a className="main__container-network__a">Наши соц. сети:</a>
          <a href="https://vk.com"><img src="./vk.svg"/></a>
          <a href="https://vk.com"><img src="./instagram.svg"/></a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;