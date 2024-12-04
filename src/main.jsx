import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './sass/main.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);