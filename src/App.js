import React from 'react';
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3a from './pages/page3more/Page3a';
import Page3b from './pages/page3more/Page3b';
import Page3Layout from './layouts/Page3Layout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='page1' element={<Page1 />} />
        <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3Layout />} >
            <Route path='aboutgame' element={<Page3a />} />
            <Route path='linktogame' element={<Page3b />} />
          </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
