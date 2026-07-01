import { useEffect } from "react";
import "./CooperationModal.css";
import bloggerPic from "../assets/Blogger.jpg";
import companyPic from "../assets/Компания.jpg";

interface CooperationModalProps {
  onClose: () => void;
}

function CooperationModal({ onClose }: CooperationModalProps) {
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

  return (
    <div
      className="cooperationModalOverlay"
      role="presentation"
      onClick={onClose}
    >
      <section
        className="cooperationModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cooperationModalTitle"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="cooperationModalClose"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="cooperationModalTitle">КТО ВЫ?</h2>
        <div className="cooperationModalOptions">
          <article className="cooperationModalOption">
            <img src={bloggerPic} alt="" />
            <a href="https://forms.yandex.ru/u/693b227502848f162ae3a508">
              Блоггер
            </a>
          </article>
          <article className="cooperationModalOption">
            <img src={companyPic} alt="" />
            <a href="https://forms.yandex.ru/u/693b249bf47e73185bc4f0e2">
              Компания
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default CooperationModal;
