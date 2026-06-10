import { useState } from "react";
import "./FAQItem.css";

interface TextPart {
  text: string;
  accent?: boolean;
}

interface FaqItemProps {
  title: string;
  content: TextPart[];
}

function FAQItem({ title, content }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-question">{title}</span>
        <span className={`faq-chevron ${isOpen ? "faq-chevron--up" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <p className="faq-content">
          {content.map((part, index) =>
            part.accent ? (
              <span key={index} className="faq-accent">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
