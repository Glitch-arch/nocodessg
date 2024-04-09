// import useTemplateDataStore from "@/app/store/templateDataStore";
import axios from "axios";
import Template1 from "./Template";

const page = async () => {
  const data = await axios.get("http://localhost:3000/api/storeTemplateData");

  // console.log("logging in pagejs", data.data);
  return <Template1 data={data.data.templateData} />;
};

export default page;
