import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './context/StateProvider.jsx'; // Ensure this is named .jsx
import { initialState } from './context/initialState.js'; // No need to change if not using JSX
import reducer from './context/Reducer.js'; // No need to change if not using JSX

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);
