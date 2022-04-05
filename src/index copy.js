import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStoreHook } from 'react-redux';

import { Provider } from 'react-redux';

import App from "./App";
import userDetailsReducer from './redux/reducers/userDetailsReducer';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStoreHook(userDetailsReducer, composeWithDevTools());
console.log("store: " )
root.render(
    // <Provider store={store} key="provider">
    <App />
//  </Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
