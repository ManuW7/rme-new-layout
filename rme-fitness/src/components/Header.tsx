import { useState, type MouseEvent } from "react";
import "./Header.css";

interface HeaderProps {
  onOpenAppModal: () => void;
}

function Header({ onOpenAppModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);
    onOpenAppModal();
  };

  return (
    <header className={isMenuOpen ? "header--menu-open" : ""}>
      <div className="headerContentWrapper">
        <svg
          width="42"
          height="27"
          viewBox="0 0 42 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7233 26.91L8.12667 16.7517H6.555V26.91H0V0H11.0017C13.1228 0 14.9244 0.370555 16.4067 1.11167C17.9144 1.85278 19.0389 2.875 19.78 4.17833C20.5211 5.45611 20.8917 6.88722 20.8917 8.47167C20.8917 10.2606 20.3806 11.8578 19.3583 13.2633C18.3617 14.6689 16.8794 15.6656 14.9117 16.2533L21.1217 26.91H13.7233ZM6.555 12.1133H10.6183C11.8194 12.1133 12.7139 11.8194 13.3017 11.2317C13.915 10.6439 14.2217 9.81333 14.2217 8.74C14.2217 7.71778 13.915 6.91278 13.3017 6.325C12.7139 5.73722 11.8194 5.44333 10.6183 5.44333H6.555V12.1133Z"
            fill="#4DC0B3"
          />
          <path
            d="M41.7582 0V5.25167H30.7948V10.925H38.9982V16.0233H30.7948V26.91H24.2398V0H41.7582Z"
            fill="#4DC0B3"
          />
        </svg>
        <ul onClick={() => setIsMenuOpen(false)}>
          <li>
            <a href="/#howThisWorks">О приложении</a>
          </li>
          <li>
            <a href="/#betterSection">Преимущества</a>
          </li>
          <li>
            <a href="/#trainerSection">Как это работает?</a>
          </li>
          <li>
            <a href="/#questionsLeft">Партнёрство</a>
          </li>
        </ul>
        <a className="downloadButton" href="" onClick={handleDownloadClick}>
          <p>Скачать</p>
          <div className="logosDiv">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1288 10.6359C15.1387 9.8693 15.3429 9.11766 15.7224 8.4509C16.1019 7.78415 16.6443 7.22394 17.2993 6.82242C16.8832 6.22987 16.3343 5.74223 15.6962 5.39822C15.0581 5.05421 14.3483 4.86331 13.6233 4.84069C12.0767 4.6788 10.5773 5.76358 9.78911 5.76358C8.98572 5.76358 7.77226 4.85677 6.46556 4.88357C5.62035 4.9108 4.79663 5.1559 4.07465 5.59497C3.35267 6.03405 2.75706 6.65213 2.34585 7.389C0.564612 10.4644 1.89326 14.9841 3.59956 17.4701C4.45327 18.6873 5.451 20.0471 6.75653 19.9988C8.03406 19.946 8.51119 19.1865 10.0533 19.1865C11.581 19.1865 12.0287 19.9988 13.3607 19.9682C14.7316 19.946 15.5953 18.7455 16.419 17.5167C17.0324 16.6493 17.5044 15.6907 17.8175 14.6764C17.0211 14.3405 16.3415 13.7782 15.8633 13.0597C15.3852 12.3412 15.1297 11.4982 15.1288 10.6359Z"
                fill="black"
              />
              <path
                d="M12.6113 3.20599C13.3587 2.31122 13.727 1.16115 13.6378 0C12.4959 0.119601 11.441 0.663839 10.6835 1.52428C10.3131 1.94462 10.0294 2.43364 9.84869 2.96338C9.66794 3.49312 9.59367 4.05319 9.63011 4.61157C10.2013 4.61743 10.7663 4.49398 11.2827 4.25051C11.7991 4.00704 12.2534 3.6499 12.6113 3.20599Z"
                fill="black"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.63823 2.25006C2.43363 2.48954 2.32924 2.79739 2.34642 3.11058V16.7069C2.32529 17.0206 2.43017 17.3299 2.63823 17.5674L2.68169 17.6166L10.3743 10.0009V9.81653L2.68169 2.20703L2.63823 2.25006Z"
                fill="url(#paint0_linear_649_5524)"
              />
              <path
                d="M12.9167 12.5398L10.3711 10.0013V9.81687L12.9167 7.27832L12.9725 7.3152L16.021 9.02396C16.8902 9.50954 16.8902 10.3086 16.021 10.8003L12.985 12.5091L12.9167 12.5398Z"
                fill="url(#paint1_linear_649_5524)"
              />
              <path
                d="M12.9889 12.503L10.3688 9.90918L2.63281 17.5679C2.80825 17.7225 3.03282 17.8114 3.26756 17.8193C3.5023 17.8271 3.73242 17.7534 3.91801 17.6109L12.9889 12.503Z"
                fill="url(#paint2_linear_649_5524)"
              />
              <path
                d="M12.9889 7.31537L3.91801 2.21368C3.73363 2.06919 3.50369 1.99367 3.26863 2.00042C3.03357 2.00716 2.80843 2.09574 2.63281 2.25056L10.3688 9.90923L12.9889 7.31537Z"
                fill="url(#paint3_linear_649_5524)"
              />
              <path
                opacity="0.2"
                d="M12.9144 12.4473L3.91801 17.5182C3.73917 17.6518 3.52121 17.7241 3.29714 17.7241C3.07308 17.7241 2.85512 17.6518 2.67627 17.5182L2.63281 17.5612L2.67627 17.6104C2.85512 17.744 3.07308 17.8163 3.29714 17.8163C3.52121 17.8163 3.73917 17.744 3.91801 17.6104L12.9889 12.5026L12.9144 12.4473Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M2.64003 17.4819C2.4406 17.2381 2.34287 16.9281 2.36684 16.6152V16.7074C2.34572 17.0211 2.45059 17.3304 2.65865 17.568L2.70211 17.5249L2.64003 17.4819Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M16.0223 10.7082L12.918 12.4477L12.9738 12.503L16.0223 10.7943C16.2023 10.719 16.3584 10.597 16.4742 10.4412C16.59 10.2855 16.6613 10.1017 16.6804 9.90918C16.6416 10.0841 16.5618 10.2475 16.4475 10.3863C16.3332 10.5251 16.1876 10.6354 16.0223 10.7082Z"
                fill="black"
              />
              <path
                opacity="0.25"
                d="M3.92076 2.29915L16.0215 9.10959C16.1867 9.18244 16.3324 9.29271 16.4467 9.4315C16.561 9.57029 16.6408 9.73373 16.6796 9.90865C16.6604 9.71616 16.5892 9.53236 16.4734 9.37659C16.3575 9.22083 16.2014 9.09886 16.0215 9.02353L3.92076 2.21309C3.05775 1.72136 2.34375 2.12704 2.34375 3.1105V3.2027C2.36238 2.21924 3.05775 1.81356 3.92076 2.29915Z"
                fill="#F8F8F8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_649_5524"
                  x1="9.69131"
                  y1="2.96921"
                  x2="-0.62218"
                  y2="13.3869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A0FF" />
                  <stop offset="0.01" stopColor="#00A1FF" />
                  <stop offset="0.26" stopColor="#00BEFF" />
                  <stop offset="0.51" stopColor="#00D2FF" />
                  <stop offset="0.76" stopColor="#00DFFF" />
                  <stop offset="1" stopColor="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_649_5524"
                  x1="17.1572"
                  y1="9.90907"
                  x2="2.13837"
                  y2="9.90907"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE000" />
                  <stop offset="0.41" stopColor="#FFBD00" />
                  <stop offset="0.78" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_649_5524"
                  x1="11.5671"
                  y1="11.3229"
                  x2="-2.42191"
                  y2="25.447"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF3A44" />
                  <stop offset="1" stopColor="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_649_5524"
                  x1="0.683283"
                  y1="-2.27334"
                  x2="6.92792"
                  y2="4.03437"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#32A071" />
                  <stop offset="0.07" stopColor="#2DA771" />
                  <stop offset="0.48" stopColor="#15CF74" />
                  <stop offset="0.8" stopColor="#06E775" />
                  <stop offset="1" stopColor="#00F076" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </a>
        <button
          className="burgerButton"
          type="button"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
