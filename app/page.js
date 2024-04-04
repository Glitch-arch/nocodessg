"use client";

import { useEffect, useState } from "react";
// import { GPT } from "../config/gptConfig";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import useGptStore from "./store/gptDataStore";
import useTemplateDataStore from "./store/templateDataStore";
import Loader from "./builder/loading";
// import NavBar from "./builder/NavBar/NavBar";
// import { data } from "autoprefixer";

// Loader is pending
// import Loader from "../Components/Core/Loader";

// Prompt input -> GPT -> Template fill up -> Website

const LandingPage = () => {
  const resToStore = useGptStore((state) => state.callGPT);

  const templateInit = useTemplateDataStore(
    (state) => state.initializeTemplateData
  );

  const downloadToggle = useTemplateDataStore((state) => state.updateToggle);

  const router = useRouter();
  const [prompt, setPrompt] = useState("Dog Trainer");
  const [isLoading, setIsLoading] = useState(false);

  let val;

  useEffect(() => {
    console.log("Prompt value:", prompt);
  }, [prompt]);

  async function aiCall() {
    console.log("calling");

    // const res = await fetch(`/api/gpt?prompt=${prompt}`);
    // const data = await res.json();
    // const gptRes = JSON.parse(data.gptRes);
    // console.log(gptRes);
    setIsLoading(true);
    fetch(`api/gpt?prompt=${prompt}`)
      .then((res) => res.json())
      .then((res) => JSON.parse(res.gptRes))
      .then((data) => {
        console.log(data, typeof data);
        resToStore(data);
      })
      .then(() => templateInit())
      .then(() => router.push("/builder"))
      .finally(() => {
        downloadToggle(true);
        setIsLoading(false);
      });
    // fetch(`/api/gpt?prompt=${prompt}`)
    //   .then(
    //     (res) => res.json(),
    //     (res) => console.log("fetch logic Failed", res)
    //   )
    //   .then((data) => {
    //     console.log(data);
    //   });

    // setIsLoading(true);
    // const gptRes = await fetch(`/api/gpt?prompt=${prompt}`).json();
    // console.log(gptRes);
    // resToStore(gptRes.gptRes);
    // templateInit();
    // router.push("/builder");
    // GPT(prompt)
    //   .then((data) => {
    //     console.log(data);
    //     resToStore(data);
    //   })

    // .finally(() => setIsLoading(false));
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className="justify-cente items-center flex mt-6 flex-col">
      <h1>Home Page</h1>
      <p>Enter a prompt to generate a website</p>
      <div className="relative h-10 m-2">
        <input
          placeholder="Type something..."
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          className="peer h-full duration-100  w-full rounded-[7px] border border-blue-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-900 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Enter a prompt
        </label>
      </div>

      <div>{val}</div>
      <button
        onClick={() => {
          aiCall();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default LandingPage;
