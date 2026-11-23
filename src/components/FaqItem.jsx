import { useState } from "react";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="faq-item" open={isOpen}>
      <summary
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span>{question}</span>
        <span className="sign" aria-hidden="true"></span>
      </summary>
      <p>{answer}</p>
    </details>
  );
}

export default FaqItem;
