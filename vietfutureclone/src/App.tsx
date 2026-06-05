import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Footer from './components/Home/Footer';
import { routes } from './routes';

function App() {
  const { pathname } = useLocation();
  const showHero = pathname === '/';

  return (
    <div className="font-[Montserrat,sans-serif] text-[#140000]">
      <Header />
      {showHero && <Hero />}
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
