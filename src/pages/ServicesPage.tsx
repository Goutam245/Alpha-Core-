import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
