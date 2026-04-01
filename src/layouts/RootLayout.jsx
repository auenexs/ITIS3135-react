import { Outlet } from "react-router";
import RootHeader from "../RootHeader";
import RootFooter from "../RootFooter";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <RootHeader />
      <Outlet />
      <RootFooter />
    </div>
  );
}
