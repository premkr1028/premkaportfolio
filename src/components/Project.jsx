import { projectsData } from "../projectData";
import { useState } from "react";

export function Project() {
  let [prev, setPrev] = useState([]);
  function renderProjects(e) {
    let clickTool = e.target.innerText;

    projectsData.map((tools, ind) => {
      if (tools.name == clickTool) {
        setPrev(tools);
        console.log("megha");
      }

      // console.log(tools.name)
    });
  }
  return (
    <div className="w-full h-[100%] overflow-scroll flex px-[4px] py-[5px]">
      <div className="projects_namea w-[25%]">
        <ul onClick={renderProjects}>
          <li>little tools</li>
        </ul>
      </div>
      <div className="projectsPreview w-[75%] overflow-scroll h-[200px]">
        <div className="preview_name">
          <h1>little tools</h1>
        </div>
        <div className="weap">
          <ul>
            <li>Vanilla javascript, tailwind, GSAP</li>
          </ul>
        </div>
        <button className="border-[0.5px] border-gray-300 px-[5px] text-gray-300 py-[2px] hover:bg-pink-300 hover:text-white">
          visit
        </button>

        <div className="discription">
          <p>
            -- A site where you will get all your daily uses small tools like
            img background remover, URL shortner,img to pdf convertor, css
            shadow generator, and 10+ more tolls
          </p>
        </div>
        <div className="points">
          <ul>
            <li className="flex gap-[5px]">
              <span className="text-pink-300">&bull;</span>
              <p>All tools in this site is created by me</p>
            </li>
          </ul>
        </div>

        <div className="func">
          <ul>
            <li>
              <span className="text-green-300">&bull;</span>
              <p>
                you can add your fav tool in favTools page which u can also
                remove from favTools page
              </p>
            </li>
            <li>
              <span className="text-green-300">&bull;</span>
              <p>
                you can add your fav tool in favTools page which u can also
                remove from favTools page
              </p>
            </li>
            <li>
              <span className="text-green-300">&bull;</span>
              <p>you can search tools by search bar</p>
            </li>
            <li>
              <span className="text-green-300">&bull;</span>
              <p>this is also responsive for small devices</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
