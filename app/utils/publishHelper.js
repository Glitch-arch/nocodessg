import { Axios } from "axios";
import exe from "./githubApi.Implementation";

export const publishhelper = async (templateData) => {
  const data = { templateData };
  const templateDataToDB = await Axios.post(
    "http://localhost:3000/api/storeTemplateData",
    data
  );
  // const tempalateHTML = await Axios.get("http://localhost:3000/api/storeTemplateData")
  // tempalateHTML.data
  const call = templateDataToDB().then(() => exe());
  const res = call();
  return res;
};
