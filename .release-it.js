module.exports = {
  git: {
    tagName: '${version}',
    requireCleanWorkingDir: false,
    commitMessage: 'release: v${version}\n\n[skip ci]',
  },
  github: {
    release: true,
  },
  npm: false,
  plugins: {
    'release-it-yarn-workspaces': {
      skipChecks: true,
      publish: false,
    },
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
    },
  },
}
