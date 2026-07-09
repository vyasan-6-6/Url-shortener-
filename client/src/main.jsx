import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/queryClient.js'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback.jsx'
import './api/axios.js' // Initialize global api client configurations

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)
