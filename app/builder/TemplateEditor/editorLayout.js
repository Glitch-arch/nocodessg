"use client";

import { motion } from "framer-motion";

// import Button from "@mui/material/Button";
import DataSection from "./DataSection";
import EditorSection from "./EditorSection";
import { useState } from "react";
import headers from "@/app/helpers/constants/editor-data";

// Sidbar kind of layout
// 1. Can have title etc section with arrow which
//    expands
// 2. Inside this section an text area to edit content.
// 3. And at the end a button to reset the content.

const animation = {
  initial: { x: 25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Layout = () => {
  const [link, setLink] = useState("");

  const linkClickHandler = (link) => {
    setLink(link);
  };

  const section = headers[link];
  const displayElement = link ? (
    <EditorSection onLinkClick={linkClickHandler} section={section} />
  ) : (
    <DataSection onLinkClick={linkClickHandler} />
  );

  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      <div>{displayElement}</div>
      <div className="mt-3 flex justify-center items-center">
        <button className="inline-block font-extrabold border-red-700  m-5 border  rounded px-6 pb-2 pt-2.5  font-mono  uppercase leading-normal text-primary transition-all duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
          RESET ALL DATA
        </button>
      </div>
    </motion.div>
  );
};

export default Layout;
