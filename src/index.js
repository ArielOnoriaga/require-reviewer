const core = require('@actions/core');
const github = require('@actions/github');

try {
  const filePaths = JSON.parse(core.getInput('files'));

  console.log(typeof filePaths);
} catch (error) {
  core.setFailed(error.message);
}
