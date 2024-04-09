import React, { useEffect, useState } from "react";
import projectImg from "../components/pro1.png";
import projectImg2 from "../components/pro2.png";
import roadmap from "../components/roadmap.png";
import calculator from "../components/calculator.png";
import oldPort from "../components/oldportfolio.png";
import passGen from "../components/passwordGenerator.png";
import bmi from "../components/BMICalculator.png";
import guessNumber from "../components/GuessNumber.png";
import star from "../components/star.png";

export default function Projects() {
  const [codeTech, setCodeTech]=useState("")
  const [roadTech, setRoadTech]=useState("")
  const [portfolioTech, setPortfolioTech]=useState("")
  const [calculatorTech,setCaluculatorTech]=useState("")
  const [apiTech, setApiTech]=useState("")
  const [codeCom, setCodeCom] = useState(0);
  const [roadMap,setRoadmap]=useState(0);
  const [portfolio,setPortfolio]=useState(0);
  const [calculatorVisit,setCalculatorVisit]=useState(0);
  const [apifun,setApifun]=useState(0);
  const [count ,setCount]=useState(0);

  const codeTechFun=()=>{
    setCodeTech("ReactJS,MongoDB")
  }
  const roadTechFun=()=>{
    setRoadTech("ReactJS")
  }
  const portfolioTechFun=()=>{
setPortfolioTech("HTML,CSS,JS")
  }
  const calculatorTechFun =()=>{
    setCaluculatorTech("HTML,CSS,JS")
  }
  const apiTechFun=()=>{
    setApiTech("ReactJS")
  }
  const codeComVisit = () => {
    window.open("https://codecom01.netlify.app");
    setCodeCom(codeCom+1)
  };
  const theRoadmap=()=>{
    window.open("https://theroadmap01.netlify.app")
    setRoadmap(roadMap+1);


  }
  const myPortfolio=()=>{
window.open("https://vishwas23a.github.io/porfolio/")
setPortfolio(portfolio+1);
  }
  const myCalculator=()=>{
    window.open("https://vishwas23a.github.io/Calculator/");
    setCalculatorVisit(calculatorVisit+1);
  }
  const myApi=()=>{
    window.open("https://some-fun-api.netlify.app")
    setApifun(apifun+1)
  }
  const myVisit=()=>{
    

  }
 

  return (
    <div>
      <div className=" h-screen w-full bg-gradient-to-r from-blue-950 flex  overflow-auto bg-orange-100">
        <div className=" mt-16 w-80 h-full fixed flex-col  shadow-lg shadow-blue-950  ">
          <a href="#section1">
            {" "}
            <button class=" group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500     hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-72 ml-2 my-2 rounded  border text-left p-3  text-gray-50 text-base font-bold   overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
              Major Projects
            </button>
          </a>
          <a href="#section2">
            <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-72 my-2 rounded border text-left p-3 m-2 text-gray-50 text-base font-bold  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
              Fun Projects
            </button>
          </a>

          <a href="#section3">
            <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-72 my-2 rounded border text-left p-3 m-2 text-gray-50 text-base font-bold  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
              Practice Projects
            </button>
          </a>
        </div>
        <div className=" h-max  w-4/5 ml-80  flex flex-col mt-16  ">
          <div>
            <div className="flex justify-center" id="section1">
              <h1 className=" text-2xl font-bold mb-8 mt-10 underline underline-offset-2 text-blue-950">
                <span className="text-orange-600">M</span>ajor{" "}
                <span className="text-orange-600">P</span>rojects
              </h1>
            </div>

            <div className=" h-full w-full flex flex-wrap justify-evenly gap-5  ">
              {/* CodeCom */}
              <div className="h-96 w-72   bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 ">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={projectImg}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">CodeCom</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{codeCom}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={codeTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer ">Tech Used{'>'}</h3></a>
                 <div> <p className= "text-sm">{codeTech}</p></div>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={codeComVisit}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
              <div className="h-80 w-72 ">
                {/* The Roadmap */}

                <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                  <div className=" h-3/5 rounded-md">
                    <img
                      src={roadmap}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  </div>
                  <div className=" flex justify-between m-3 text-white ">
                    <h3 className=" font-bold text-lg">The Roadmap</h3>
                    <h3>
                      Visit: <span className="text-blue-950">{roadMap}</span>
                    </h3>
                  </div>
                  <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={roadTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "text-sm">{roadTech}</p>
                </div>
                  <div className="flex justify-between mx-3 mt-7">
                    <button
                      onClick={theRoadmap}
                      class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                    >
                      Visit
                      <svg
                        class="w-5 h-5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>
                    <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                      {" "}
                      Feedback{">"}{" "}
                    </h2>
                  </div>
                </div>
              </div>
              {/* Portfolio old */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={oldPort}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Portfolio (old)</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{portfolio}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={portfolioTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{portfolioTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myPortfolio}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>

              {/* Calculator */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={calculator}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Calculator</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{calculatorVisit}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={calculatorTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{calculatorTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myCalculator}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center" id="section2">
              <h1 className=" text-2xl font-bold mt-12 mb-6 underline text-blue-950">
                <span className="text-orange-600">F</span>un{" "}
                <span className="text-orange-600">P</span>rojects
              </h1>
            </div>
            <div className="h-full w-full  my-2 flex flex-wrap justify-evenly ">
              {/* api Project */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 ">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={projectImg2}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Fun Api</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{apifun}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={apiTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{apiTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myApi}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center" id="section3">
              <h1 className=" text-2xl font-bold mt-10 underline mb-6 text-blue-950">
                <span className="text-orange-600">P</span>ractice{" "}
                <span className="text-orange-600">P</span>rojects
              </h1>
            </div>

            <div className="h-full w-full  flex justify-evenly flex-wrap gap-5 my-2  ">
              {/* password Generator */}

              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={passGen}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Password Generator</h3>
                  <h3>
                    Visit:{" "}
                    <span className="text-blue-950 ">{count}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={codeTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{codeTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myVisit}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
              {/* BMI Calculator */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 ">
                <div className=" h-3/5 rounded-md">
                  <img src={bmi} alt="" className="h-full w-full rounded-md" />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">BMI Calculator</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{count}</span>{" "}
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={codeTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{codeTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myVisit}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
              {/* star,acoodian */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                <div className=" h-3/5 rounded-md">
                  <img src={star} alt="" className="h-full w-full rounded-md" />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Star,Color,Accodian</h3>
                  <h3>
                    Visit: <span className="text-blue-950"> {count}</span>
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={codeTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{codeTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myVisit}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 font-bold cursor-pointer">
                    {" "}
                    Feedback{">"}{" "}
                  </h2>
                </div>
              </div>
              {/* Guess Number */}
              <div className="h-96 w-72  bg-gradient-to-r from-blue-800 shadow-md shadow-blue-950 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 ">
                <div className=" h-3/5 rounded-md">
                  <img
                    src={guessNumber}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className=" flex justify-between m-3 text-white ">
                  <h3 className=" font-bold text-lg">Guess Number</h3>
                  <h3>
                    Visit: <span className="text-blue-950">{count}</span>{" "}
                  </h3>
                </div>
                <div className=" flex justify-between mx-3 mt-4 text-white">
                  <a onClick={codeTechFun}>
                  <h3 className="text-white hover:text-orange-500 font-bold cursor-pointer">Tech Used{'>'}</h3></a>
                  <p className= "  text-sm">{codeTech}</p>
                </div>
                <div className="flex justify-between mx-3 mt-7">
                  <button
                    onClick={myVisit}
                    class="flex items-center  bg-blue-500 text-white gap-1 px-4 py-1 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                  >
                    Visit
                    <svg
                      class="w-5 h-5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-white underline hover:text-blue-950 cursor-pointer font-bold">
                    {" "}
                    Feedback {">"}{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
