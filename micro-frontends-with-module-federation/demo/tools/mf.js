const { ModuleFederationPlugin } = require('webpack').container;
const semver = require('semver');

const singletons = ['react', 'react-dom'];

function sharedDeps(dependencies) {
  const sharedDependencies = {};

  Object.entries(dependencies).forEach((dep) => {
    const dependencyName = dep[0];
    const dependencyVersion = dep[1];
    const isSingleton = singletons.includes(dependencyName);
    let requiredVersion = dependencyVersion;
    if (isSingleton) {
      const versionData = semver.coerce(dependencyVersion);
      requiredVersion = `${versionData.major}`;
    }

    sharedDependencies[dependencyName] = {
      eager: false,
      strictVersion: true,
      singleton: isSingleton,
      requiredVersion,
    };
  });

  return sharedDependencies;
}

function mfConfig(
  packageJson,
  { exposes = {}, remotes = {} }
) {
  const name = packageJson.name.replace(/-/g, '_');

  return new ModuleFederationPlugin({
    name: `mf_${name}`,
    filename: 'remoteEntry.js',
    exposes,
    remotes,
    shared: sharedDeps(packageJson.dependencies),
  });
}

module.exports = mfConfig;
