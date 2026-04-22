import '../styles/homepage.css';
import { lazy, Suspense } from 'react';
import { Cursor } from '../components/ui/Cursor';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Manifesto } from '../components/sections/Manifesto';

const BeforeAfter = lazy(() => import('../components/sections/BeforeAfter').then(m => ({ default: m.BeforeAfter })));
const Services = lazy(() => import('../components/sections/Services').then(m => ({ default: m.Services })));
const Process = lazy(() => import('../components/sections/Process').then(m => ({ default: m.Process })));
const VisionLetter = lazy(() => import('../components/sections/VisionLetter').then(m => ({ default: m.VisionLetter })));

export function HomePage() {
  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Suspense>
          <BeforeAfter />
          <Services />
          <Process />
          <VisionLetter />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
