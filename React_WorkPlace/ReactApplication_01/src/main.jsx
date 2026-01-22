import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './store/storeConfig'
import {BrowserRouter} from 'react-router-dom'
import CustomProvider from './components/CustomProvider.jsx'

import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
 

  <Provider store={store}>
    <CustomProvider>
      <BrowserRouter>
        <PersistGate  loading={null} persistor={persistor}>
      <App />
    </PersistGate>
      </BrowserRouter>
    </CustomProvider>
  </Provider>


)
