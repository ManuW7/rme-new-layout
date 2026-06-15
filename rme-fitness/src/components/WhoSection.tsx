import "./WhoSection.css";
import whoPic1 from "../assets/who1.png";
import whoPic2 from "../assets/who2.png";
import whoPic3 from "../assets/who3.png";
import whoPic4 from "../assets/who4.png";

function WhoSection() {
  return (
    <section className="whoSection" id="whoSection">
      <h2 className="whoMobileTitle">КОМУ ПОДОЙДЁТ?</h2>
      <p className="annotation whoMobileAnnotation">Найди себя или собери бинго</p>
      <h2>КОМУ ПОДОЙДЁТ ИИ-ТРЕНЕР?</h2>
      <p className="annotation">Найди себя или собери спортивное бинго</p>

      <div className="whoCardsContainer">
        <div className="whoCard">
          <img src={whoPic1} alt="" />
          <div className="whoCardContent">
            <div className="countDiv">
              <p>1 / 4</p>
            </div>
            <h5>РАБОТНИКАМ ОФИСА</h5>
            <p className="whoText">
              Всем, у&nbsp;кого много сидячей работы и&nbsp;нет времени
              регулярно заниматься в&nbsp;спортзале
            </p>
          </div>
        </div>

        <div className="whoCard">
          <img src={whoPic2} alt="" />
          <div className="whoCardContent">
            <div className="countDiv">
              <p>2 / 4</p>
            </div>
            <h5>ИНТРОВЕРТАМ</h5>
            <p className="whoText">
              Всем, для кого тишина и&nbsp;время наедине с&nbsp;собой ценнее
              социального взаимодействия :)
            </p>
          </div>
        </div>

        <div className="whoCard">
          <img src={whoPic3} alt="" />
          <div className="whoCardContent">
            <div className="countDiv">
              <p>3 / 4</p>
            </div>
            <h5>
              <span className="whoTitleDesktop">ЛЮБИТЕЛЯМ СПОРТА И ПИЦЦЫ</span>
              <span className="whoTitleMobile">ЛЮБИТЕЛЯМ СПОРТА</span>
            </h5>
            <p className="whoText">
              Всем, кто хочет быть в&nbsp;хорошей физической форме по&nbsp;любой
              из возможных причин
            </p>
          </div>
        </div>

        <div className="whoCard">
          <img src={whoPic4} alt="" />
          <div className="whoCardContent">
            <div className="countDiv">
              <p>4 / 4</p>
            </div>
            <h5>ИСТИННЫМ ЦЕНИТЕЛЯМ</h5>
            <p className="whoText">
              Всем, кто регулярно занимается йогой и&nbsp;фитнесом:
              их&nbsp;хлебом не корми, только дай пару дополнительных подходов
              и&nbsp;шавасану
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoSection;
