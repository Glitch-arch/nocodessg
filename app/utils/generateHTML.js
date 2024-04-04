import Template1 from "../template/template1/Template";
import useTemplateDataStore from "../store/templateDataStore";
import { renderToString } from "react-dom/server";

export default function generateHtml() {
  const templateData = useTemplateDataStore.getState().templateData;
  const html = renderToString(<Template1 data={templateData} />);

  return html;
}
