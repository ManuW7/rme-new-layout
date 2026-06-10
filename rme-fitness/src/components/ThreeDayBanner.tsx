import "./ThreeDayBanner.css";

import bannerBg from "../assets/bannerBg.png";
import phoneImage from "../assets/bannerPhone.png";

import googlePlayIcon from "../assets/googlePlay.svg";
import ruStoreIcon from "../assets/ruStore.svg";
import appStoreIcon from "../assets/appStore.svg";

function ThreeDayBanner() {
  return (
    <section className="subscriptionBanner">
      <img className="backGym" src={bannerBg} alt="" />
      <div className="greenCircle"></div>
      <img className="phoneImage" src={phoneImage} alt="" />
      <div className="buttonsDiv">
        <a className="googleButton" href="">
          <img src={googlePlayIcon} alt="" />
        </a>
        <a className="ruStoreButton" href="">
          <img src={ruStoreIcon} alt="" />
        </a>
        <a className="appleButton" href="">
          <img src={appStoreIcon} alt="" />
        </a>
      </div>
      <div className="bannerContent">
        <div className="textContent">
          <h3>ЗАБИРАЙ 3 ДНЯ ПОДПИСКИ И УБЕДИСЬ САМ</h3>
          <p>
            Пс... Ходят слухи, что около 10 человек отменили походы в зал, а
            фитнес-тренеры начали волноваться за свою карьеру
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThreeDayBanner;
