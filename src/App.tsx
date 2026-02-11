import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Positioning } from "./components/Positioning";
import { Mission } from "./components/Mission";
import { Problems } from "./components/Problems";
import { Solution } from "./components/Solution";
import { Features } from "./components/Features";
import { ProductLines } from "./components/ProductLines";
import { PlatformCapabilities } from "./components/PlatformCapabilities";
import { TestimonialsNew } from "./components/TestimonialsNew";
import { GlobalPresence } from "./components/GlobalPresence";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Positioning />
      <Mission />
      <Problems />
      <Solution />
      <Features />
      <ProductLines />
      <PlatformCapabilities />
      <TestimonialsNew />
      <GlobalPresence />
      <CTA />
      <Footer />
    </div>
  );
}