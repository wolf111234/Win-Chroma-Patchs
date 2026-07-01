import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DownloadSection from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
