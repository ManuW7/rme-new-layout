import "./QuestionsLeft.css";
import dogPic from "../assets/dog.png";

function QuestionsLeft() {
  return (
    <section className="questionsLeft" id="questionsLeft">
      <img src={dogPic} alt="" />
      <div className="textContent">
        <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
        <p className="annot">
          Напишите нашему дружелюбному менеджеру: не&nbsp;бойтесь,
          он&nbsp;у&nbsp;нас не кусается. Он&nbsp;вообще славный малый
        </p>
        <button>
          <p>Написать!</p>
        </button>
      </div>
    </section>
  );
}

export default QuestionsLeft;
