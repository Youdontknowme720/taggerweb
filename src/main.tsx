import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TaggerPage from './pages/TaggerPage.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/tagger" element={<TaggerPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
