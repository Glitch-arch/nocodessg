import generateHtml from "@/app/utils/generateHTML";

export default async function GET(req, res) {
  const templateHTML = fetch("/template/template1");
  return new Response(templateHTML);
}
