import { Link } from "react-router";
import "./Footer.css";

const internalLinks = [
  { to: "/", label: "ITIS3135" },
];

const externalLinks = [
  { href: "https://www.freecodecamp.org/auenexs", label: "freeCodeCamp" },
  { href: "https://webpages.charlotte.edu/tbland6/", label: "CLT Web" },
  { href: "https://github.com/auenexs", label: "GitHub" },
  { href: "https://auenexs.github.io", label: "GitHub.io" },
  { href: "https://www.linkedin.com/in/tybland", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav>
        {internalLinks.map((link, index) => (
          <span key={link.to}>
            <Link to={link.to}>{link.label}</Link>
            {index < internalLinks.length - 1 || externalLinks.length > 0 ? " | " : ""}
          </span>
        ))}
        {externalLinks.map((link, index) => (
          <span key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {index < externalLinks.length - 1 ? " | " : ""}
          </span>
        ))}
      </nav>
      <p>
        Page created by Ty Bland Design Co., certified in{" "}
        <a
          href="https://www.freecodecamp.org/certification/auenexs/responsive-web-design-v9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Responsive Web Design
        </a>
      </p>
    </footer>
  );
}
