import { Routes, Route } from 'react-router-dom';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Footer from './components/Home/Footer';
import { routes } from './routes';

function App() {
  return (
    <div className="font-[Montserrat,sans-serif] text-[#140000]">
      <Header />
      <Hero />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
