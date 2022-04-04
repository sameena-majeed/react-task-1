import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStoreHook, Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import App from "./App";
import userDetailsReducers from './redux/reducers/userDetailsReducer';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStoreHook(userDetailsReducers, composeWithDevTools());
root.render(
    // <Provider store={store}>
    <App />
    // </Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
