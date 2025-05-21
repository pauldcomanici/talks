import React from 'react';
import { Header } from './header';

function App() {

  return (
    <div>
      Header-inline { React.version }
      <br/>
      <Header />
      <br/>
      Content
      <br/>
      Footer
    </div>
  );
}

export { App };
