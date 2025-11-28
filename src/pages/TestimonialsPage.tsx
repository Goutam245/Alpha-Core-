import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
