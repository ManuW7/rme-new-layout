import "./TrainerSection.css";
import phoneBack from "../assets/phoneBack.png";
import phoneTrainer from "../assets/phone_trainer.png";

interface TrainerSectionProps {
  onOpenAppModal: () => void;
}

function TrainerSection({ onOpenAppModal }: TrainerSectionProps) {
  return (
    <section className="trainerSection" id="trainerSection">
      <h2>КАК РАБОТАЕТ ИИ-ТРЕНЕР</h2>
      <div className="contentWrapper">
        <div className="picturesDiv">
          <div className="grayCircle"></div>
          <img className="phonePicture" src={phoneBack} alt="" />
          <img className="trainerPicture" src={phoneTrainer} alt="" />
        </div>
        <div className="textDiv">
          <h3>CV технология</h3>
          <p>
            Когда пользователь начинает выполнять упражнение, ИИ отслеживает
            положение ключевых точек тела. Это позволяет тренеру понять,
            правильно ли ты тренируешься, нужно ли поправить технику / похвалить
            за качественное выполнение упражнения
            <br />
            <br /> Внутри нашего ии-тренера сотни баз данных с правильными
            техниками, и он подбирает наилучший вариант для любого типа тела
            и уровня подготовки <br />
            <br />
            Благодаря этому, тренировка становится не только эффективной,
            но и безопасной
          </p>
        </div>
      </div>
      <button className="subscribeButton" type="button" onClick={onOpenAppModal}>
        Подписаться за 1199р. в месяц
      </button>
    </section>
  );
}

export default TrainerSection;
