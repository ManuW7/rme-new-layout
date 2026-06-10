import "./HowThisWorks.css";
import howCardImg1 from "../assets/howCard_img1.png";
import howCardImg2 from "../assets/howCard_img2.png";
import howCardImg3 from "../assets/howCard_img3.png";

function HowThisWorks() {
  return (
    <section className="howThisWorks">
      <h2>КАК ЭТО РАБОТАЕТ?</h2>
      <div className="howCardsContainer">
        <div className="howCard">
          <img src={howCardImg1} alt="" />
          <p>
            <span>Включи камеру</span>, чтобы приложение смогло отслеживать твои
            движения
          </p>
        </div>
        <div className="howCard">
          <img src={howCardImg2} alt="" />
          <p>
            Тренируйся — ИИ считает повторения и <span>корректирует</span>{" "}
            технику как специалист
          </p>
        </div>
        <div className="howCard">
          <img src={howCardImg3} alt="" />
          <p>
            Получай советы и поддержку ИИ{" "}
            <span>в режиме реального времени</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowThisWorks;
