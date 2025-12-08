import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OverMij from './pages/OverMij';
import Diensten from './pages/Diensten';
import Tarieven from './pages/Tarieven';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Vergoedingen from './pages/Vergoedingen';
import ScrollToTop from './components/ScrollToTop';

import GlobalBackground from './components/GlobalBackground';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <GlobalBackground />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<OverMij />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/zorgcheck" element={<Quiz />} />
            <Route path="/tarieven" element={<Tarieven />} />
            <Route path="/vergoeding" element={<Vergoedingen />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
