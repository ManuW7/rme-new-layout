import "./HeroSection.css";
import manHero from "../assets/manHero.png";
import phoneHero from "../assets/phone_hero.png";
import womanHero from "../assets/womanHero.png";

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="heroSectionContent">
        <h1>
          <span>ПЕРСОНАЛЬНЫЙ ИИ-ТРЕНЕР</span> У ТЕБЯ В ТЕЛЕФОНЕ
        </h1>
        <p>
          Занимайся фитнесом и&nbsp;йогой из&nbsp;любой точки мира
          и&nbsp;в&nbsp;любое время
        </p>
        <a className="tryButton" href="">
          Попробовать бесплатно
        </a>
      </div>
      <div className="greenCircleBackground"></div>
      <img className="manPicture" src={manHero} alt="" />
      <img className="phonePicture" src={phoneHero} alt="" />
      <img className="womanPicture" src={womanHero} alt="" />
    </section>
  );
}

export default HeroSection;
