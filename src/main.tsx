import ReactDOM from 'react-dom/client';
import { App } from './App';
import { FontStyles } from './assets/fonts';
import './index.css';

const rootDiv = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);
root.render(
  <>
    <FontStyles />
    <App />
  </>
);
