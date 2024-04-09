// First of all we create an random named repo
// Then comes pushing index.html file
//  - Fetching the template html page
// Pushing the html to repo
// Then building the github pages

const { Octokit } = require("octokit");

const token =
  process.env.GITHUB_TOKEN || "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";

const octokit = new Octokit({
  auth: token,
});

// async function test() {
//   const data = await octokit.rest.users.getAuthenticated();
//   console.log(data);
// }
// test();

async function createRepo() {
  const prefix = "Github-api-test-";
  const suffix = Math.floor(Math.random() * 10000);
  const repoName = prefix + suffix;

  const res = await octokit.request("POST /user/repos", {
    name: repoName,
    description: "testing repo creation from github api",
    homepage: "https://github.com",
    private: false,
    is_template: true,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(res);
  return repoName;
}
// createRepo();

// Octokit.js
// https://github.com/octokit/core.js#readme

// Need to get the HTML file here
// Need to make an api call here for that

async function fetchingHTML(repoName) {
  const response = await fetch("http://localhost:3000/template/template1");
  const htmlContent = await response.text();
  return { htmlContent, repoName };
  // console.log("HTML Response :", data);
}

const fileToRepo = async ({ htmlContent, repoName }) => {
  // const fileContent = await fetchingHTML();

  const res = await octokit.rest.repos.createOrUpdateFileContents({
    owner: "Glitch-arch",
    repo: repoName,
    path: "index.html",
    message: "Update index.html",
    content: Buffer.from(htmlContent).toString("base64"),
  });
  console.log(res);
  return repoName;
};
// fileToRepo();

const createGithubPage = async (repoName) => {
  try {
    const res = await octokit.request("POST /repos/{owner}/{repo}/pages", {
      owner: "Glitch-arch",
      repo: repoName,
      source: {
        branch: "main",
        path: "/",
      },
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// createGithubPage();
const exe = createRepo.then((repoName) =>
  fetchingHTML(repoName)
    .then(({ htmlContent, repoName }) => fileToRepo({ htmlContent, repoName }))
    .then((repoName) => createGithubPage(repoName))
);
export default exe;
