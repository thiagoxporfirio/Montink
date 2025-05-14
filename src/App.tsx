import React from 'react';
import MainImage from './components/MainImage';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <MainImage />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
