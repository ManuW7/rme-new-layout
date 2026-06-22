import "./HeroSection.css";
import manHero from "../assets/manHero.png";
import phoneHero from "../assets/phone_hero.png";
import womanHero from "../assets/womanHero.png";
import phoneTrainer from "../assets/bannerPhone.png";

interface HeroSectionProps {
  onOpenAppModal: () => void;
}

function HeroSection({ onOpenAppModal }: HeroSectionProps) {
  return (
    <section className="heroSection">
      <div className="heroSectionInner">
        <div className="heroSectionContent">
          <h1>
            <span>ПЕРСОНАЛЬНЫЙ ИИ-ТРЕНЕР</span> У&nbsp;ТЕБЯ В&nbsp;ТЕЛЕФОНЕ
          </h1>
          <p>
            Занимайся фитнесом и&nbsp;йогой из&nbsp;любой точки мира
            и&nbsp;в&nbsp;любое время
          </p>
          <button className="tryButton" type="button" onClick={onOpenAppModal}>
            Попробовать бесплатно
          </button>
        </div>
        <div className="greenCircleBackground"></div>
        <img className="manPicture" src={manHero} alt="" />
        <img className="phonePicture" src={phoneHero} alt="" />
        <img className="womanPicture" src={womanHero} alt="" />
        <img className="phoneTrainer" src={phoneTrainer} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
