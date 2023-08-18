import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'https://us.app.unleash-hosted.com/ushh0018/api/frontend', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey: 'sales-app:production.3428c27d7746e1aad9f0c1dd597ef53c5fdde03986f8253d6a63c20f', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 120, // How often (in seconds) the client should poll the proxy for updates
  appName: 'sales-app', // The name of your application. It's only used for identifying your application
  environment: 'production',
  bootstrap:[{
    "enabled": false,
    "impressionData": true,
    "name":"QuickAdd",
    "variant":{
      "name": "teste",
      "payload": {
          "type": "string",
          "value": "teste"
      },
      "enabled": true
  }
  }],
  bootstrapOverride: false
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagProvider config={{...config }}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
