import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice} from "./components/redux/AuthSlices.jsx";
import { ThemeProvider } from '@material-tailwind/react'
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer, // Add the authSlice reducer
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
