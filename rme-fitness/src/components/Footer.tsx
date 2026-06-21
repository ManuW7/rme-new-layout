import "./Footer.css";

import appStoreIcon from "../assets/appStore.svg";
import googlePlayIcon from "../assets/googlePlay.svg";
import monkeyPic from "../assets/monkey.png";
import ruStoreIcon from "../assets/ruStore.svg";

interface FooterProps {
  onOpenAppModal: () => void;
}

function Footer({ onOpenAppModal }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerColumns">
          <div className="footerColumn footerStores">
            <h4>Доступно в</h4>
            <button
              type="button"
              aria-label="Google Play"
              onClick={onOpenAppModal}
            >
              <img src={googlePlayIcon} alt="" />
            </button>
            <button type="button" aria-label="RuStore" onClick={onOpenAppModal}>
              <img src={ruStoreIcon} alt="" />
            </button>
            <button
              type="button"
              aria-label="App Store"
              onClick={onOpenAppModal}
            >
              <img src={appStoreIcon} alt="" />
            </button>
          </div>

          <nav className="footerColumn" aria-label="Навигация">
            <h4>Навигация</h4>
            <a href="#howThisWorks">О приложении</a>
            <a href="#betterSection">Преимущества</a>
            <a href="#trainerSection">Как это работает?</a>
            <a href="#whoSection">Кому подойдет?</a>
            <a href="#friendsBanner">Реферальная программа</a>
          </nav>

          <nav className="footerColumn" aria-label="Контакты">
            <h4>Контакты</h4>
            <a href="">info@rme-fitness.ru</a>
            <a href="https://forms.yandex.ru/u/68ebf02ef47e739315df20d8">
              Связаться с нами
            </a>
            <a href="t.me/RMe_channel">Телеграм канал</a>
            <a href="https://r-me.tech/ru">Сайт головной компании</a>
          </nav>

          <nav className="footerColumn" aria-label="Дополнительно">
            <h4>Дополнительно</h4>
            <a href="https://docs.google.com/document/d/1yPACyd2OwYVY1SwQvlkR1wHGJr8TPXCplxoBQtyHinY/edit?tab=t.0">
              Политика конфиденциальности
            </a>
            <a href="https://docs.google.com/document/d/1dgo39mV0zOhxStnz1P_IqYOIP_5hYecQIxtONDpjt4Y/edit?tab=t.0">
              Пользовательское соглашение
            </a>
            <a href="https://docs.google.com/document/d/1yPACyd2OwYVY1SwQvlkR1wHGJr8TPXCplxoBQtyHinY/edit?tab=t.0">
              Политика обработки персональных данных
            </a>
            <a href="https://forms.yandex.ru/u/693b249bf47e73185bc4f0e2">
              Партнерство
            </a>
          </nav>
        </div>

        <div className="footerBottom">
          <p>Все права защищены</p>
          <p>Автор иконок приложения dimitriyg</p>
          <p>Разработка сайта</p>
        </div>

        <div className="footerVisual">
          <p className="footerBrand">RME FITNESS</p>
          <img className="footerMobilePicture" src={monkeyPic} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
