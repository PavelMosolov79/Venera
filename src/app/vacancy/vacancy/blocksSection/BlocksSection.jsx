import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <div className="blocks__section-vacancy__one">
          <h2>Требуется парикмахер-универсал</h2>
          <p>Присоединяйтесь к нашей команде! Мы ищем опытного парикмахера-универсала для работы в нашем салоне красоты. 
             Если вы профессионал в своем деле, творчески настроены и готовы вдохновлять наших клиентов своими навыками, 
             приглашаем вас стать частью нашей дружной команды.</p>
          <a>По всем вопросам обращайтесь по номеру телефона:  +7 (383) 263-70-12</a>
        </div>
      </div>
    </div>
  );
};

export default BlocksSection;