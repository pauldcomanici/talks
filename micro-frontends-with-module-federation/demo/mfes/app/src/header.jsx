import React from 'react';
import RemoteComponent from '../../../packages/loader/src/index';

function Header() {
  const remote = {
    module: './index',
    props: {},
    scope: 'mf_header',
    url: 'http://localhost:3010/remoteEntry.js',
  };
  return (
    <RemoteComponent
      loader={() => (<div>Loading...</div>)}
      remote={remote}
    />
  )
}

export { Header };
