import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Gallery";
  }, []);

  return (
    <main>
      <h2>Gallery Coming Soon</h2>
      <p>This page will contain a gallery project.</p>
    </main>
  );
}
