import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorHandler from './ErrorHandler.tsx';
import './styles/index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorHandler>
      <App />
    </ErrorHandler>
  </StrictMode>
);
