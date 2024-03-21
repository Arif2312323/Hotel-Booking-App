import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import './index.css';
import { AppContextProvider } from './contexts/AppContext.tsx';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      retry : 0
    }
  }
});

// Wrap your component tree with QueryClientProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
          <App />
      </AppContextProvider>
    </QueryClientProvider>,
  </React.StrictMode>
);
