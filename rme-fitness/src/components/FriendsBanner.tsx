import "./FriendsBanner.css";
import stonksPic from "../assets/stonks.png";

function FriendsBanner() {
  return (
    <section className="friendsBanner" id="friendsBanner">
      <img src={stonksPic} alt="" />
      <div className="textContent">
        <h3>согласны, ДРУЗЕЙ НА&nbsp;СКИДКУ НЕ&nbsp;МЕНЯЮТ...</h3>
        <p className="annot">
          но&nbsp;если 10&nbsp;из&nbsp;них придут от&nbsp;тебя и&nbsp;оплатят
          подписку, ты&nbsp;получишь скидку <span>до&nbsp;100%</span>{" "}
          на&nbsp;оплату своего ии-тренера
        </p>
        <button>
          <p>Подробнее про рефералку</p>
        </button>
      </div>
    </section>
  );
}

export default FriendsBanner;
