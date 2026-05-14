import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToHash } from './components/ui/ScrollToHash';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { TerminosPage } from './pages/TerminosPage';
import { PrivacidadPage } from './pages/PrivacidadPage';
import { AvisoLegalPage } from './pages/AvisoLegalPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/reservar" element={<BookingPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
