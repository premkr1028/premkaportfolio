import { projectsData, randColor } from "../projectData";
import { useState } from "react";
import { ProjectPreview } from "./ProjectPreview";
import { Link } from "react-router-dom";

export function Project() {
  // let [data, setData] = useState(``);
  var r = document.querySelector(":root");
  let [prev, setPrev] = useState(projectsData[0]);
  // let [bgColor , setBgColor] = useState(randColor[0])
  function renderProjects(e) {
    let clickTool = e.target.innerText;
    projectsData.map((tools, ind) => {
      if (tools.name == clickTool) {
        //setiing tool to preview wala object
        setPrev(tools);

        //generating random color for list background
        let randomNumber = Math.floor(Math.random() * randColor.length);
        let randomColor = randColor[randomNumber];
        r.style.setProperty("--random", `${randomColor}`);
        /// seting active list

        document
          .querySelector(".projectActive")
          .classList.remove("projectActive");

        e.target.classList.add("projectActive");
      }
    });
  }
  return (
    <div className="pDiv w-full h-[100%] overflow-scroll flex py-[5px]">
      <div className="projects_name w-[25%]">
        <ul onClick={renderProjects} className="flex flex-col gap-[8px]">
          <li className="projectActive">little tools</li>
          <li>draggable notepad</li>
          <li>megh visuals</li>
        </ul>
      </div>
      <div className="projectsPreview w-[75%] overflow-scroll pl-[15px] px-[6px] h-[200px] flex flex-col gap-[10px]">
        {/* {console.log(prev)} */}
        <ProjectPreview {...prev} />
      </div>
    </div>
  );
}
