import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This project has no service worker. Unregister any leftover registration
// from an earlier version of the site so it stops intercepting requests.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

createRoot(document.getElementById("root")!).render(<App />);
