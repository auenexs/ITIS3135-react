import { useEffect } from "react";

export default function Highlight() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Highlight";
  }, []);

  return (
    <main>
      <h2>Highlight Coming Soon</h2>
      <p>This page will contain a portfolio highlight project.</p>
    </main>
  );
}
