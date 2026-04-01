import { Link } from "react-router";
import "./RootFooter.css";

export default function RootFooter() {
  return (
    <footer className="root-footer">
      <nav>
        <Link to="/itis3135">ITIS3135</Link>
        {" | "}
        <a href="https://www.freecodecamp.org/auenexs" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>
        {" | "}
        <a href="https://webpages.charlotte.edu/tbland6/" target="_blank" rel="noopener noreferrer">CLT Web</a>
        {" | "}
        <a href="https://github.com/auenexs" target="_blank" rel="noopener noreferrer">GitHub</a>
        {" | "}
        <a href="https://auenexs.github.io" target="_blank" rel="noopener noreferrer">GitHub.io</a>
        {" | "}
        <a href="https://www.linkedin.com/in/tybland" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {" | "}
        <a href="https://itis-3135-react-omega.vercel.app/" target="_blank" rel="noopener noreferrer">React Site</a>
      </nav>
      <p>
        Page created by Ty Bland Design Co., certified in{" "}
        <a href="https://www.freecodecamp.org/certification/auenexs/responsive-web-design-v9" target="_blank" rel="noopener noreferrer">
          Responsive Web Design
        </a>
      </p>
    </footer>
  );
}
