import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from '../pages/Page';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          element={<Page />}
          path={`/:page/:companyId`}
        />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
