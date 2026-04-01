import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  const primaryNavLinks = [
    { to: "/", label: "Home" },
    { to: "/contract", label: "Contract" },
    { to: "/website-evaluations", label: "Website Evaluations" },
    { to: "/survey", label: "Survey" },
    { to: "/gallery", label: "Gallery" },
    { to: "/inventory", label: "Inventory" },
    { to: "/instructions", label: "Instructions" },
    { to: "/highlight", label: "Highlight" },
    { to: "/hobby", label: "Hobby" },
    { to: "/intro-form", label: "Intro Form" },
  ];

  const secondaryNavLinks = [
    { to: "/crappy-webpage", label: "CRAPpy Webpage" },
  ];

  return (
    <header className="site-header">
      <h1>Ty Bland's Tranquil Badger ~ ITIS3135</h1>

      <nav className="primary-nav">
        {primaryNavLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      {secondaryNavLinks.length > 0 && (
        <nav className="secondary-nav">
          {secondaryNavLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
