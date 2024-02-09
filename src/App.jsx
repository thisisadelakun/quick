// App.js
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'

import Layout from './hooks/layout/Layout';
import Loader from './hooks/loader/Loader';
// import Searchops from './components/subpage/searchops.jsx';
import SocialM from './components/subpage/socialm.jsx';
import PpClick from './components/subpage/ppclick.jsx';
import WebDev from './components/subpage/webdev.jsx';
import Measure from './components/subpage/measure.jsx';
import Ourvideo from './components/subpage/ourvideo.jsx';
import Career from './components/subpage/career';
import Privy from './components/subpage/privy';
import Blogger from './components/blogger/blogger';
const Home = lazy(() => import('./components/Home'))
const Brand = lazy(() => import('./components/subpage/brand'))
const Markets = lazy(() => import('./components/subpage/markets.jsx'))
const Searchops = lazy (() => import('./components/subpage/searchops.jsx'))

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

function App() {
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const displayFusion = () => {
    return (
      <Routes>
        <Route
          path='/' exact
          element={(
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          )}
        />

        <Route
          path='/utah-branding-agencies'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Brand />
            </React.Suspense>
          )}
        />

        <Route
          path='/content-marketing-companies-utah'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Markets />
            </React.Suspense>
          )}
        />

        <Route
          path='/seo-marketing-companies-utah'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Searchops />
            </React.Suspense>
          )}
        />

        <Route
          path='/utah-social-media-agencies'
          element={(
            <React.Suspense fallback={<Loader />}>
              <SocialM />
            </React.Suspense>
          )}
        />

        <Route
          path='/utah-ppc-agencies'
          element={(
            <React.Suspense fallback={<Loader />}>
              <PpClick />
            </React.Suspense>
          )}
        />

        <Route
          path='/website-design-companies-utah'
          element={(
            <React.Suspense fallback={<Loader />}>
              <WebDev />
            </React.Suspense>
          )}
        />

        <Route
          path='/measurement-analytics'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Measure />
            </React.Suspense>
          )}
        />

        <Route
          path='/video-production-companies-utah'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Ourvideo />
            </React.Suspense>
          )}
        />

        <Route
          path='/careers'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Career />
            </React.Suspense>
          )}
        />

        <Route
          path='/privacy-policy'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Privy />
            </React.Suspense>
          )}
        />

        <Route
          path='/proliferation'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Blogger />
            </React.Suspense>
          )}
        />

      </Routes>

    );
  };

  return (
    <div className='app'>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTopOnPageChange />
            {isLoading ? (
              <Loader />
            ) : (
              <Suspense fallback={<Loader />}>
                {displayFusion()}
              </Suspense>
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
