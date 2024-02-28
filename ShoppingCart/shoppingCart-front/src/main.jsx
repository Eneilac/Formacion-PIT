import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import storeConfig from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig({ initialState: {} });

root.render(
    <React.StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </React.StrictMode>
);