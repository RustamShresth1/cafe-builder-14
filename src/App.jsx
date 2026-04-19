import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <BrowserRouter basename="/cafe-builder-14">
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;