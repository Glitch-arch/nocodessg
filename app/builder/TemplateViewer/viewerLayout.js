"use client";

import Template1 from "@/app/template/template1/Template";
import useTemplateDataStore from "@/app/store/templateDataStore";

const TemplateLayout = () => {
  const data = useTemplateDataStore((state) => state.templateData);

  // const template2 = () => {
  //   return <div>Template 2</div>;
  // };
  const arr = [Template1];

  const RandomTemplate = arr[Math.floor(Math.random() * arr.length)];

  return (
    <>
      <RandomTemplate data={data} />
    </>
  );
};

export default TemplateLayout;
