import React from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from './header';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
