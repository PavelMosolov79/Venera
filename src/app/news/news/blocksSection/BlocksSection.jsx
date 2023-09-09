import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-sail__one">
          <h2>АКЦИЯ!</h2>
          <a>Больше объема, меньше цены: ламинирование бровей за 1000 рублей!</a>
          <p>Ламинирование бровей + покраска + коррекция по специальной цене 1000 рублей (обычная цена 1300 рублей).</p>
        </div>
        <div className="blocks__section-sail__two">
          <h2>Требуются модели для пополнения портфолио!</h2>
          <p>Окрашивание и коррекция бровей - 500 рублей!</p>
          <p>Ламинирование бровей - 1000 рублей!</p>
          <a>По всем вопросам обращайтесь по номеру телефона:  +7 (383) 263-70-12</a>
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;