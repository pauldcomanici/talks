import React from 'react';
import PropTypes from 'prop-types';

import useDynamicScript from './useDynamicScript.hook';
import loadComponent from './load';

/**
 * Render remote component
 *
 * @param {Function} loader
 * @param {Object} remote
 * @param {String} remote.module
 * @param {Object} remote.props
 * @param {String} remote.scope
 * @param {String} remote.url
 * @return {JSX}
 */
function RemoteComponent({loader, remote}) {
  const Loader =
    loader ||
    function () {
      return null;
    };
  const {module, props, scope, url} = remote || {};
  const {failed, ready} = useDynamicScript({
    url,
  });

  if (!remote) {
    // console.log('Remote data was not specified');
    return null;
  }

  if (failed) {
    // console.error(`Failed to load dynamic script: ${url}`);
    return null;
  }

  if (!ready) {
    // console.log(`Loading dynamic script: ${url}`);
    return (<Loader />);
  }

  const Component = React.lazy(
    loadComponent(scope, module)
  );

  return (
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  );
}

RemoteComponent.propTypes = {
  loader: PropTypes.func,
  remote: PropTypes.shape({
    module: PropTypes.string.isRequired,
    props: PropTypes.object,
    scope: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default RemoteComponent;
