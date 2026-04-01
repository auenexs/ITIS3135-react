import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Ty Bland's Tranquil Badger ~ ITIS3135 | Course Home";
  }, []);

  return (
    <main>
      <h2>Course Home</h2>
      <p>
        Welcome to my ITIS3135 Course Site. This will serve as my landing page
        for assignments.
      </p>
    </main>
  );
}
