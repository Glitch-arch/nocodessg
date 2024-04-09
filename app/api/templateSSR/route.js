// import generateHtml from "@/app/utils/generateHTML";

export async function GET(req, res) {
  const templateHTML = await fetch("/template/template1");
  console.log("logging template fetch ", templateHTML);
  return new Response(templateHTML);
}
