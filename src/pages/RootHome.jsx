import { useEffect } from "react";
import { Link } from "react-router";

export default function RootHome() {
  useEffect(() => {
    document.title = "Tyler Bland | Charlotte Website";
  }, []);

  return (
    <main>
      <h2>Homepage</h2>
      <p>
        Welcome to my homepage! I am a student at the University of North
        Carolina at Charlotte, pursuing a degree in Computer Science with a
        focus on IT. <Link to="/introduction">Click here</Link> to visit my
        Introduction Page
      </p>
    </main>
  );
}
