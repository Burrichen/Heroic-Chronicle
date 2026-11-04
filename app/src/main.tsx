import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/marcellus/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './ui/styles.css';
import { App } from './ui/App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
