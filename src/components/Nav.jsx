import { NavLink } from "react-router-dom";
import { Project } from "./Project";
// import Project from "./Project";
export function Nav() {
  return (
    <nav className=" w-[100%] border-[0.2px] min-h-[25px] flex items-center justify-cenetr">
      <li className="links text-[11px]">prem</li>
      <li className="flex text-[11px]">
         <span>a</span>
              <NavLink to="/" className={({isActive}) =>`links ${isActive ? "text-white" : "text-gray-400"}`}>
             about
              </NavLink>
          </li>

      <li className="flex text-[11px]">
     <span>p</span>
          <NavLink to="Project" className={({isActive}) =>`links ${isActive ? "text-white" : "text-gray-400"}`}>
         projects
          </NavLink>
      </li>

      <li className="flex text-[11px]">
         <span>s</span>
              <NavLink to="Skills" className={({isActive}) =>`links ${isActive ? "text-white" : "text-gray-400"}`}>
             skills
              </NavLink>
          </li>

      <li className="flex text-[11px]">
         <span>c</span>
              <NavLink to="Contacts" className={({isActive}) =>`links ${isActive ? "text-white" : "text-gray-400"}`}>
             contacts
              </NavLink>
          </li>
    </nav>
  );
}
