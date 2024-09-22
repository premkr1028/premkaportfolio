import React, { useEffect, useState } from "react";

export function Contacts() {
  let [smBoxs, setSmBoxes] = useState([]);

  useEffect(() => {
    let smBoxs = [];
    for (let i = 0; i < 500; i++) {
      smBoxs.push(<div className="smBox" key={i}></div>);
    }
    setSmBoxes(smBoxs);
  }, []);
  function openGmailCompose(email) {
    const mailtoLink = `mailto:${email}?subject=`;
    window.location.href = mailtoLink;
  }

  // useEffect(()=>{

  // })
  return (
    <div className="contactPage w-full min-h-[60vh] py-[8px] relative overflow-hidden pb-[10px]">
      <div className="ml-[2px] back w-[100%] overflow-hidden h-[100%] absolute flex wrap items-wrap gap-[0.5px]">
        {smBoxs.map((box) => {
          return box;
        })}
      </div>
      <div className="flex flex-col items-center text-[2.2vw]">
        <h1 className="text-center">
          Want to get in{" "}
          <span className="text-blue-300 text-[2.2vw]">touch</span>?
        </h1>
        <h2 className="text-center">Go on! Don't be shy...</h2>
      </div>
      <div className="linksGifs flex justify-between px-[5px] mt-[20px]">
        <ul className="text-[2vw] sm:grid-cols-5 place-items-ceneter grid-cols-2 w-full">
          <li className="sc">
            <a href="https://www.instagram.com/premkrbalmiki?igsh=MXJwMWxzeDBldDNldw==">
              <span data-text="instagram">Instagram</span>
            </a>
          </li>
          <li className="sc">
            <a href="https://x.com/premkrbalmiki?s=09">
              <span data-text="twitter">Twitter</span>
            </a>
          </li>
          <li
            className="sc"
            onClick={() => {
              openGmailCompose("premcodeprojects2810@gmail.com");
            }}
          >
            <a>
              <span data-text="email">Email</span>
            </a>
          </li>
          <li className="sc">
            <a href="">
              <span data-text="github">Github</span>
            </a>
          </li>
          <li className="sc">
            <a
              href="            https://www.linkedin.com/in/prem-kumar-balmiki-824a26311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
            >
              <span data-text="linkedIn">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
