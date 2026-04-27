import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import faviconHref from './assets/favicon.svg?url'

const faviconLink = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
if (faviconLink) faviconLink.href = faviconHref

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
