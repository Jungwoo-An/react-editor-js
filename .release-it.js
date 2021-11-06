module.exports = {
  git: {
    tagName: 'v${version}',
    requireCleanWorkingDir: false,
    commitMessage: 'release: v${version}\n\n[skip ci]',
  },
  github: {
    release: true,
  },
  npm: {
    publish: true,
  },
  plugins: {
    'release-it-yarn-workspaces': {
      skipChecks: true,
      publish: true,
    },
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
    },
  },
}
