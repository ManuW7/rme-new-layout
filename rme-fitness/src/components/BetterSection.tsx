import { useEffect, useRef } from "react";
import "./BetterSection.css";

import better1 from "../assets/better1.jpg";
import better2 from "../assets/better2.png";
import better3 from "../assets/better3.jpg";
import better4 from "../assets/better4.jpg";
import better5 from "../assets/better5.jpg";

export default function BetterSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();

      // контейнер находится примерно по центру экрана
      const isCentered =
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.4;

      if (!isCentered) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      const currentScroll = container.scrollLeft;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const canScrollRight = currentScroll < maxScroll - 1;
      const canScrollLeft = currentScroll > 1;

      if ((scrollingDown && canScrollRight) || (scrollingUp && canScrollLeft)) {
        e.preventDefault();

        container.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="betterSection">
      <h2>ЭТО КРУЧЕ ОБЫЧНЫХ ТРЕНИРОВОК</h2>

      <div ref={containerRef} className="betterCardsContainer">
        <div className="betterCard">
          <img src={better1} alt="" />
          <div className="countDiv">
            <p>1 / 5</p>
          </div>

          <h5>ЭКОНОМИЯ ВРЕМЕНИ</h5>

          <p className="description">
            Наш ИИ-тренер никогда не опоздает, не перенесёт занятие и даст
            максимум пользы от тренировки
          </p>
        </div>

        <div className="betterCard">
          <img src={better2} alt="" />
          <div className="countDiv">
            <p>2 / 5</p>
          </div>

          <h5>ВСЕГДА ПОД РУКОЙ</h5>

          <p className="description">
            Без залов и расписаний. Начни тренировку тогда, когда будет время,
            пусть мир подстроится под тебя
          </p>
        </div>

        <div className="betterCard">
          <img src={better3} alt="" />
          <div className="countDiv">
            <p>3 / 5</p>
          </div>

          <h5>КОРРЕКТИРУЕТ ТЕХНИКУ</h5>

          <p className="description">
            ИИ-тренер не сидит сложа руки: контроль правильной техники
            выполнения упражнений — его миссия
          </p>
        </div>

        <div className="betterCard">
          <img src={better4} alt="" />
          <div className="countDiv">
            <p>4 / 5</p>
          </div>

          <h5>ПЕРСОНАЛЬНЫЕ ПЛАНЫ</h5>

          <p className="description">
            Больше не нужно сохранять рилсы в надежде начать заниматься: у нас
            есть план специально под тебя
          </p>
        </div>

        <div className="betterCard">
          <img src={better5} alt="" />
          <div className="countDiv">
            <p>5 / 5</p>
          </div>

          <h5>НУ ПРЯМ КАК ЖИВОЙ</h5>

          <p className="description">
            ИИ-тренер может быть добрым, мотивирующим, эмпатичным. Но подходов
            меньше он тебе не даст :)
          </p>
        </div>
      </div>
    </section>
  );
}
