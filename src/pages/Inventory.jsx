import { useEffect } from "react";

export default function Inventory() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Inventory";
  }, []);

  return (
    <main>
      <h2>Inventory Coming Soon</h2>
      <p>This page will contain an inventory project.</p>
    </main>
  );
}
