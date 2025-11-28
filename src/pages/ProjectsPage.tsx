import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
