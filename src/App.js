import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

import Navbar from './components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

import './App.css';

function App() {

  return (
    <BrowserRouter basename='/'>
      <Navbar />
      <Routes>
        {routes.map((route) => <Route {...route} key={route.path} />)}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
