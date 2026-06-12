import { useEffect, useState, type FormEvent } from "react";
import "./AppModal.css";
import dogPic from "../assets/dog.png";

interface AppModalProps {
  onClose: () => void;
}

type Platform = "IOS" | "Android";

const isValidPhoneNumber = (phoneNumber: string) => {
  const trimmedPhone = phoneNumber.trim();

  if (!trimmedPhone) {
    return false;
  }

  const compactPhone = trimmedPhone.replace(/[\s().-]/g, "");
  const hasIncorrectPlus = compactPhone.includes("+") && !compactPhone.startsWith("+");

  if (hasIncorrectPlus || /[^\d+]/.test(compactPhone)) {
    return false;
  }

  if (/^\+[1-9]\d{9,14}$/.test(compactPhone)) {
    return true;
  }

  if (/^8\d{10}$/.test(compactPhone)) {
    return true;
  }

  if (/^7\d{10}$/.test(compactPhone)) {
    return true;
  }

  if (/^9\d{9}$/.test(compactPhone)) {
    return true;
  }

  return /^[1-9]\d{9,14}$/.test(compactPhone);
};

function AppModal({ onClose }: AppModalProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "">("");
  const [formWarning, setFormWarning] = useState("");

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const submitAppModalForm = () => {
    onClose();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidPhoneNumber(phoneNumber)) {
      setFormWarning("Введите корректный номер телефона");
      return;
    }

    if (!selectedPlatform) {
      setFormWarning("Выберите платформу");
      return;
    }

    setFormWarning("");
    submitAppModalForm();
  };

  return (
    <div className="appModalOverlay" role="presentation" onClick={onClose}>
      <div
        className="appModal"
        role="dialog"
        aria-modal="true"
        aria-label="App modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="appModalClose"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          X
        </button>
        <img className="dogPicture" src={dogPic} alt="" />
        <div className="textContent">
          <h2>Спасибо за проявленный интерес к нашему приложению!</h2>
          <p>
            К сожалению, оно еще не вышло. Можешь указать свой номер телефона
            ниже и мы обязательно оповестим тебя о релизе. В придачу к
            оповещению ты получишь промокод на скидку
          </p>
          <form action="" onSubmit={handleSubmit} noValidate>
            <input
              className="phoneInput"
              type="tel"
              value={phoneNumber}
              placeholder="+7 777 777 77 77"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
                setFormWarning("");
              }}
            />
            <div className="radioButtons">
              <label>
                <input
                  type="radio"
                  name="myRadioGroup"
                  value="IOS"
                  checked={selectedPlatform === "IOS"}
                  onChange={() => {
                    setSelectedPlatform("IOS");
                    setFormWarning("");
                  }}
                />
                Использую IOS
              </label>

              <label>
                <input
                  type="radio"
                  name="myRadioGroup"
                  value="Android"
                  checked={selectedPlatform === "Android"}
                  onChange={() => {
                    setSelectedPlatform("Android");
                    setFormWarning("");
                  }}
                />
                Использую Android
              </label>
            </div>
            {formWarning && <p className="formWarning">{formWarning}</p>}
            <button className="submitButton" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppModal;
