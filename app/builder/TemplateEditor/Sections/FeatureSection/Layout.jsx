"use client";
import TextArea from "../components/textArea";
import { useState, useEffect, useRef } from "react";
import useTemplateDataStore from "@/app/store/templateDataStore";

const Layout = ({ data, updateTemplateData }) => {
  // const [feature, setFeature] = useState({
  //   ftitle1: data.ftitle1,
  //   ftitle2: data.ftitle2,
  //   fdescription1: data.fdescription1,
  //   fdescription2: data.fdescription2,
  // });

  const { feature, setFeature } = useTemplateDataStore((state) => ({
    feature: state.templateData,
    setFeature: state.updateTemplateData,
  }));

  const templateRef = useRef(false);

  const updateFeild = (field) => (newValue) => {
    setFeature({
      ...feature,
      [field]: newValue,
    });
  };

  useEffect(() => {
    if (!templateRef.current) {
      console.log("calling templateRef");
      templateRef.current = true;
    } else {
      // console.log("calling updateTemplateData ", console.log(data));
      setFeature(feature);
    }
  }, [feature, setFeature]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <TextArea
        name={"ftitle1"}
        data={feature.ftitle1}
        setData={updateFeild("ftitle1")}
      />
      <TextArea
        name={"feature Section Image 1"}
        data={feature.featureSectionImage1}
        setData={updateFeild("featureSectionImage1")}
      />
      <TextArea
        name={"feature Section Image 2"}
        data={feature.featureSectionImage2}
        setData={updateFeild("featureSectionImage2")}
      />
      <TextArea
        name={"fdescription1"}
        data={feature.fdescription1}
        setData={updateFeild("fdescription1")}
      />
      <TextArea
        name={"ftitle2"}
        data={feature.ftitle2}
        setData={updateFeild("ftitle2")}
      />
      <TextArea
        name={"fdescription2"}
        data={feature.fdescription2}
        setData={updateFeild("fdescription2")}
      />
    </div>
  );
};

export default Layout;
