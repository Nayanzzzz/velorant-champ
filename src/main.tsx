import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { DataProviders } from './context/data-fetch/data-fetch-context.tsx'
import { ProductContextProvider } from './context/product-context/product-context.tsx'
import  { DataProviders } from './context/data-fetch/data-fetch-context.tsx'
// import DataProvider from './context/data-fetch/data-fetch-provider.tsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  
  <QueryClientProvider client={queryClient}>

  
  <ProductContextProvider>
    <DataProviders>

  <StrictMode>
    <App />
  </StrictMode>,

  </DataProviders>
  </ProductContextProvider>
  </QueryClientProvider>
)
