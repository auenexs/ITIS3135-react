import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  const primaryNavLinks = [
    { to: "/", label: "Home" },
    { to: "/itis3135/contract", label: "Contract" },
    { to: "/itis3135/website-evaluations", label: "Website Evaluations" },
    { to: "/itis3135/survey", label: "Survey" },
    { to: "/itis3135/gallery", label: "Gallery" },
    { to: "/itis3135/inventory", label: "Inventory" },
    { to: "/itis3135/instructions", label: "Instructions" },
    { to: "/itis3135/highlight", label: "Highlight" },
    { to: "/itis3135/hobby", label: "Hobby" },
    { to: "/itis3135/intro-form", label: "Intro Form" },
  ];

  const secondaryNavLinks = [
    { to: "/itis3135/crappy-webpage", label: "CRAPpy Webpage" },
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
