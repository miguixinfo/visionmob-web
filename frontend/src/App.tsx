import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToHash } from './components/ui/ScrollToHash';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/reservar" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
