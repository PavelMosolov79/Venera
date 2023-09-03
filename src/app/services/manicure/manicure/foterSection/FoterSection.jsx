import "./FoterSectionPhone.css";
import "./FoterSectionDesctop.css"

const FoterSection = ({ func }) => {

  return (
    <footer>
      <div className="foter__block">
        <div className="foter__block-menu">
          <ul>
            <li>
              <a>Услуги</a>
            </li>
            <li>
              <a>Услуги парикмахера</a>
            </li>
            <li>
              <a>Маникюр и педикюр</a>
            </li>
            <li>
              <a>Депиляция</a>
            </li>
            <li>
              <a>Брови и ресницы</a>
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
        </div>
        <div className="foter__block-street">
          <a>ул. Петухова 133/2<br/>ПН - СБ: 09:00 - 20:00<br/>+ 7 (999) 999-99-99</a>
        </div>
        <div className="foter__block-logo">
          <div>
            <img src="./logo-black.svg" alt="Venera"/>
            <a>©️ Venera</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FoterSection;