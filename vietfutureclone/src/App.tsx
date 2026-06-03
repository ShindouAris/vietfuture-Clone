import Header from './components/Home/Header'
import Hero from './components/Home/Hero'
import MainContent from './pages/MainContent'
import Footer from './components/Home/Footer'

function App() {
  return (
    <div className="font-[Montserrat,sans-serif] text-[#140000]">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
