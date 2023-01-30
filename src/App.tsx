import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Query, Table } from 'pages';
import { LoadingIndicator } from 'components';
import { PrimaryNavigation } from './components/layout/navigation/Navigation';
import { Footer } from './components/layout/footer/Footer';
import './App.less';

function App() {
    return (
        <BrowserRouter>
            <PrimaryNavigation />
            <React.Suspense fallback={<LoadingIndicator />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/query' element={<Query />} />
                    <Route path='/table' element={<Table />} />
                    <Route path='*' element={<Navigate replace to='/' />} />
                </Routes>
            </React.Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
