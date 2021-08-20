const core = require('@actions/core');
const github = require('@actions/github');

try {
  const modifiedFiles = JSON.parse(core.getInput('modified-files', { required: true }));

  const filePaths = JSON.parse(core.getInput('files', { required: true }));
  const reviewers = JSON.parse(core.getInput('reviewers', { required: true }));

  console.log(filePaths);
} catch (error) {
  core.setFailed(error.message);
}
