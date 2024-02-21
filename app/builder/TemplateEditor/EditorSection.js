"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import arrSVG from "@/public/right-arrow.svg";
import useTemplateDataStore from "@/app/store/templateDataStore";

const animation = {
  initial: { x: 25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const EditorSection = ({ onLinkClick, section }) => {
  const { templateData, updateTemplateData } = useTemplateDataStore(
    (state) => ({
      templateData: state.templateData,
      updateTemplateData: state.updateTemplateData,
    })
  );

  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      <div>
        <a
          className="flex items-center mb-6 mt-4 cursor-pointer "
          onClick={() => onLinkClick("")}
        >
          <Image
            src={arrSVG}
            alt="back"
            width={12}
            height={16}
            className="rotate-180"
          />
          <span className="pl-2 ml-2 text-2xl font-bold">{section.title}</span>
        </a>
      </div>
      <section.component
        data={templateData}
        updateTemplateData={updateTemplateData}
      />
    </motion.div>
  );
};

export default EditorSection;
