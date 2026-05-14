import type { ReactNode } from 'react';
import '../../styles/homepage.css';
import '../../styles/legal.css';
import { Cursor } from '../ui/Cursor';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LegalLayoutProps {
  code: string;
  titleLine1: string;
  titleLine2?: string;
  updatedAt: string;
  intro: ReactNode;
  children: ReactNode;
}

export function LegalLayout({
  code,
  titleLine1,
  titleLine2,
  updatedAt,
  intro,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <section className="hero lg-hero" id="top" aria-labelledby="legal-title">
          <div className="meta-row">
            <div>
              <span className="marker">◆ [{code}]</span>
              <span>Documentos legales · Legal documents</span>
            </div>
            <div className="right">
              <span>visionmob.com</span>
              <span>Actualizado: {updatedAt}</span>
            </div>
          </div>

          <div className="lg-hero-body">
            <div className="kicker">
              <span className="blink" aria-hidden="true" />
              Legal · Normativa
            </div>
            <h1 id="legal-title" className="lg-hero-title">
              {titleLine1}
              {titleLine2 && (
                <>
                  <br />
                  <em>{titleLine2}</em>
                </>
              )}
            </h1>
          </div>
        </section>

        <div className="lg-content">
          <p className="lg-intro">{intro}</p>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
