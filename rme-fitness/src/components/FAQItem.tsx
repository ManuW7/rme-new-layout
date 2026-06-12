import { useEffect, useRef, useState } from "react";
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
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    setContentHeight(contentRef.current.scrollHeight);
  }, [content, isOpen]);

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

      <div
        ref={contentRef}
        className="faq-content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
      >
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
      </div>
    </div>
  );
}

export default FAQItem;
