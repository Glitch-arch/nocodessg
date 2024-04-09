"use client";

// Json template data download feature
// - Getting the data form the store and converting into json maybe

import { motion } from "framer-motion";
import useTemplateDataStore from "@/app/store/templateDataStore";
import exportFromJSON from "export-from-json";
import AuthNavBtn from "@/components/AuthNavBtn";
// import { cookies } from "next/headers";
import { useSession } from "next-auth/react";
import { fileToRepo } from "../utils/githubApi.Implementation";

const animation = {
  initial: { x: 25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const handleDownload = async () => {};

const NavBar = () => {
  const session = useSession();
  console.log("session nextauth", session);
  const downloadToggle = useTemplateDataStore((state) => state.toggle);
  console.log("downloadToggle", downloadToggle);
  const templateData = useTemplateDataStore((state) => state.templateData);
  const onClickDownload = () => {
    // const exportTemplateData = {
    //     title: "",
    //     description: [
    //         "",

    //         ""
    //     ],
    //     tagline: "",
    //     features: [
    //         {
    //             feature1: "",
    //             detail1: ""
    //         },
    //         {
    //             feature2: "",
    //             detail2: ""
    //         }
    //     ],
    //     faqs: [
    //         {
    //             question1: "",
    //             answer1: ""
    //         },
    //         {
    //             question2: "",
    //             answer2: ""
    //         },
    //         {
    //             question3: "",
    //             answer3: ""
    //         }
    //     ]
    //   }
    // const blob = new Blob([JSON.stringify(templateData,null,2)], { type: "text/plain" });
    // const url = URL.createObjectURL(blob);

    // cookies().set({
    //   name: "TemplateData",
    //   value: templateData,
    //   httpOnly: true,
    //   path: "/template",
    // });

    exportFromJSON({
      data: templateData,
      fileName: "JsonData",
      type: exportFromJSON.types.json,
    });
  };

  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NoCodeSSG
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  {session.data?.user.name}
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleDownload()}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Download Template File
                </button>
              </li>
              {downloadToggle && (
                <li>
                  <button
                    onClick={() => onClickDownload()}
                    //   href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Download Template Data
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="text-white flex flex-col gap-4">
          <AuthNavBtn />
          <button onClick={() => fileToRepo()}>HTMLFetchTest</button>
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
