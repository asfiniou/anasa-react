import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap">
        <a
          className="logo"
          href="#arxiki"
          aria-label="Ανάσα Pilates Studio, αρχική"
        >
          <img
            src="/img/anasa-logo-orizontio.png"
            alt="Ανάσα Pilates Studio"
            width="153"
            height="52"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Κλείσιμο" : "Μενού"}
        </button>

        <nav
          className={isOpen ? "nav open" : "nav"}
          aria-label="Κύριο μενού"
          onClick={() => setIsOpen(false)}
        >
          <ul>
            <li>
              <a href="#arxiki">Αρχική</a>
            </li>
            <li>
              <a href="#mathimata">Μαθήματα</a>
            </li>
            <li>
              <a href="#programma">Πρόγραμμα</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#epikoinonia">Επικοινωνία</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
