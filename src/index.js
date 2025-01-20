import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from "react-redux";
// import Store from "./redux/store";
// import {LayoutProvider} from './context/LayoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Provider store={Store}>
  //   <LayoutProvider>
    <App />
    // </LayoutProvider>
    // </Provider>
  // </React.StrictMode>
);

reportWebVitals();
