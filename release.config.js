module.exports = {
  branches: ['master', 'chore/github-actions'],
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits'
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}
