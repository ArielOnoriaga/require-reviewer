const core = require('@actions/core');
const github = require('@actions/github');

try {
  const filePaths = core.getInput('file-paths');

} catch (error) {
  core.setFailed(error.message);
}
