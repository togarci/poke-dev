import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App';
import { Store } from './lib/store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={Store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
