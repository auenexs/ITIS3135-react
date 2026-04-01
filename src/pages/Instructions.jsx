import { useEffect } from "react";

export default function Instructions() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Instructions";
  }, []);

  return (
    <main>
      <h2>Instructions Coming Soon</h2>
      <p>This page will contain a technical documentation project.</p>
    </main>
  );
}
