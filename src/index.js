const core = require('@actions/core');
const github = require('@actions/github');

try {
  const filePaths = core.getInput('file');

  console.log(filePaths);
} catch (error) {
  core.setFailed(error.message);
}
