"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
import arrSVG from "@/public/right-arrow.svg";
// import HeaderTitle from "./HeaderTitle";
import headers from "@/app/helpers/constants/editor-data";

const animation = {
  initial: { x: -25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const DataSection = ({ onLinkClick }) => {
  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      {Object.entries(headers).map(([item, { index }]) => {
        return (
          <a key={index} onClick={() => onLinkClick(item)}>
            <div className="flex items-center my-5 cursor-pointer">
              <p className="text-xl ml-2">{item}</p>

              <div className="ml-auto pl-4 flex items-center">
                <Image src={arrSVG} alt="right-arrow" height="16" width="16" />
              </div>
            </div>
            <Divider />
          </a>
        );
      })}
    </motion.div>
  );
};

export default DataSection;
