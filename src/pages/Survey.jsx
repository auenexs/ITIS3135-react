import { useEffect } from "react";

export default function Survey() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Survey";
  }, []);

  return (
    <main>
      <h2>Survey Form Coming Soon</h2>
      <p>This page will contain a survey form project.</p>
    </main>
  );
}
