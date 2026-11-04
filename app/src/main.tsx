import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/alegreya/500.css';
import '@fontsource/alegreya/600.css';
import '@fontsource/alegreya-sc/500.css';
import '@fontsource/alegreya-sans/400.css';
import '@fontsource/alegreya-sans/500.css';
import '@fontsource/alegreya-sans/700.css';
import './ui/styles.css';
import { App } from './ui/App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
