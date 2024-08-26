// import { transform } from "framer-motion";
// import transition from "../transition";


export function About() {
  return (
    <div className="w-full flex flex-col h-full gap-[10px] ">
      <div className="addGmailRes text-wrap wrap w-full text-[12px] mt-[10px]">
        <ul className="flex w-full gap-[8px] text-gray-400">
          <li>kolkata , India</li>
          <li>|</li>
          <li>premkumarbalmiki088@gmail.com</li>
          <li>|</li>
          <li><a>resume</a></li>
        </ul>
      </div>

    <p className="text-[12px] w-full">
      I'm a Tech enthusiast passionate about building tech stuffs. I have a very good  understanding of frontEnd Dev and right now i m exploring or learning backend.Btw You'll often find me building side-projects that I fail to maintain.
    </p>
      <div className="flex gap-[6px] flex-wrap">
      <p className="text-nowrap">you can find me @</p>
        <ul className="flex gap-[6px]">

          <li>
          <a className="hover:text-pink-300 duration:100">
          LinkedIn
          </a>
            ,
          </li>
        <li>
          <a className="hover:text-green-300 duration:100" href="https://github.com/prem1028" target="_blank">Github</a>,
        </li>

          <li>
            <a className="hover:text-pink-300 duration:100" href="https://twitter.com/premkumarbalmiki/" target="_blank">
            Twitter
            </a>,
          </li>
          <li>
          <a className="hover:text-green-300 duration:100" href="https://www.instagram.com/premkrbalmiki/" target="_blank">
          Instagram
          </a>
          </li>
          
        </ul>
        <div className="dib-dib w-[7px] h-[14px] bg-pink-300"></div>
      </div>
    </div>
  );
}

// export default transition(About)