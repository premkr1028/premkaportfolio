import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export function Main() {
  return (
    <main className="mt-[20px] w-[60vw] relative">
      <Nav />
      <Outlet />
    </main>
  );
}
