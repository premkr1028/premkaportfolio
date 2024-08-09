import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export function Main() {
  return (
    <main className="mt-[20px] w-[60vw] ">
      <Nav />
      <Outlet />
    </main>
  );
}
