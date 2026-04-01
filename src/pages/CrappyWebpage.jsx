import { useEffect } from "react";

export default function CrappyWebpage() {
  useEffect(() => {
    document.title = "what even is this";
  }, []);

  return (
    <div style={{ color: "black", backgroundColor: "white", padding: "1rem" }}>
      <img
        src="/images/reeves.webp"
        height="400"
        width="400"
        alt="Keanu Reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeves"
      />
      <h5 style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        come at me boi
      </h5>

      <h2 style={{ fontFamily: "Papyrus" }}>This is my page</h2>
      <h1 style={{ fontFamily: "'Comic Sans MS'" }}>Welcome to Jurrasic Park</h1>

      <div style={{ textAlign: "center" }}>
        <ul style={{ display: "inline-block", textAlign: "left" }}>
          <li>This</li>
          <li>Is</li>
          <li>Sparta</li>
        </ul>
      </div>

      <br /><br /><br /><br />

      <p style={{ margin: "50px", textAlign: "center" }}>
        I'm the center of attention
      </p>
      <p style={{ margin: "5px", fontSize: "48px" }}>
        WHY IS EVERYONE SO SMALL?!
      </p>

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Click here for important information
      </a>

      <br /><br /><br />

      <p style={{ color: "#cccccc" }}>Can you see me?</p>
      <p style={{ backgroundColor: "yellow" }}>Slow to a stop please</p>
      <span style={{ textDecoration: "underline" }}>
        I dare you to try and click me
      </span>

      <br /><br />

      <div
        style={{
          borderTop: "10px dashed blue",
          borderBottom: "25px dotted red",
          borderLeft: "30px solid green",
          borderRight: "40px double purple",
        }}
      >
        <p>Get me out of here!</p>
      </div>
    </div>
  );
}
