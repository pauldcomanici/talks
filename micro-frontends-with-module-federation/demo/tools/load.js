
async function loadMF(name) {
  if (name === 'header') {
    return {
      build: 'http://localhost:3010/remoteEntry.js',
    }
  }
}
