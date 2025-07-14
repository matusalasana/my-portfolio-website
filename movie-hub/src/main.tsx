import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";


import { Provider } from './components/ui/provider.tsx'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient= new QueryClient()




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
