"use client";

import Textarea from "../components/textArea";
import { useEffect, useState, useRef } from "react";
import useTemplateDataStore from "@/app/store/templateDataStore";

const Layout = ({ data, updateTemplateData }) => {
  // const [heroData, setHeroData] = useState({
  //   title: data.title,
  //   description: data.description,
  //   tagline: data.tagline,
  // });

  const { heroData, setHeroData } = useTemplateDataStore((state) => ({
    heroData: state.templateData,
    setHeroData: state.updateTemplateData,
  }));
  const templateRef = useRef(false);

  const updateFeild = (field) => (newValue) => {
    setHeroData({
      ...heroData,
      [field]: newValue,
    });
  };

  useEffect(() => {
    if (!templateRef.current) {
      templateRef.current = true;
    } else {
      setHeroData(heroData);
    }
  }, [heroData, setHeroData]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Textarea
        data={heroData.title}
        name={"title"}
        setData={updateFeild("title")}
      />
      <Textarea
        name={"hero Section Image"}
        data={heroData.heroSectionImage}
        setData={updateFeild("heroSectionImage")}
      />
      <Textarea
        name={"description"}
        data={heroData.description}
        setData={updateFeild("description")}
      />
      <Textarea
        data={heroData.tagline}
        name={"tagline"}
        setData={updateFeild("tagline")}
      />
    </div>
  );
};

export default Layout;
