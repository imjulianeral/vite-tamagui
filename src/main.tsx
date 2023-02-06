import React from 'react'
import ReactDOM from 'react-dom/client'
import { TamaguiProvider } from 'tamagui'
import '@tamagui/web/reset.css'
import '@tamagui/polyfill-dev'
import config from '../tamagui.config'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TamaguiProvider config={config}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TamaguiProvider>
)
