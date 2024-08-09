import "./App.css";
import { Main } from "./Layout/Main";
import { About } from "./components/About";
import { Body } from "./components/Body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Contacts } from "./components/Contacts";
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Main />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: `Project`,
        element: <Project />,
      },
      {
        path: `Skills`,
        element: <Skills />,
      },
      {
        path: `Contacts`,
        element: <Contacts />
      }
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
