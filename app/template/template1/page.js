// import useTemplateDataStore from "@/app/store/templateDataStore";
import Template1 from "./Template";

const page = () => {
  const data = fetch("api/templateSSR");
  return <Template1 data={data} />;
};

export default page;
