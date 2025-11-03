import { useState } from 'react';
import { Header } from './components/Header';
import { NavigationSidebar } from './components/NavigationSidebar';
import { ProgressBar } from './components/ProgressBar';
import { IntroPage } from './components/pages/IntroPage';
import { DNAPage } from './components/pages/DNAPage';
import { GenesPage } from './components/pages/GenesPage';
import { MendelPage } from './components/pages/MendelPage';
import { InheritancePage } from './components/pages/InheritancePage';
import { PunnettPage } from './components/pages/PunnettPage';
import { ExercisesPage } from './components/pages/ExercisesPage';
import { EvaluationPage } from './components/pages/EvaluationPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [completedPages, setCompletedPages] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pages = [
    { id: 0, title: 'Introducción', component: IntroPage },
    { id: 1, title: 'El ADN: Molécula de la Vida', component: DNAPage },
    { id: 2, title: 'Genes y Cromosomas', component: GenesPage },
    { id: 3, title: 'Leyes de Mendel', component: MendelPage },
    { id: 4, title: 'Patrones de Herencia', component: InheritancePage },
    { id: 5, title: 'Cuadro de Punnett', component: PunnettPage },
    { id: 6, title: 'Ejercicios Prácticos', component: ExercisesPage },
    { id: 7, title: 'Evaluación', component: EvaluationPage },
    { id: 8, title: 'Recursos Adicionales', component: ResourcesPage },
  ];

  const handlePageComplete = (pageId: number) => {
    if (!completedPages.includes(pageId)) {
      setCompletedPages([...completedPages, pageId]);
    }
  };

  const CurrentComponent = pages[currentPage].component;
  const progress = (completedPages.length / pages.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <ProgressBar progress={progress} completedPages={completedPages.length} totalPages={pages.length} />

      <div className="flex relative">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <div className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:sticky top-[120px] left-0 h-[calc(100vh-120px)] transition-transform duration-300 z-40`}>
          <NavigationSidebar
            pages={pages}
            currentPage={currentPage}
            completedPages={completedPages}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <CurrentComponent
              onComplete={() => handlePageComplete(currentPage)}
              isCompleted={completedPages.includes(currentPage)}
              onNext={() => {
                if (currentPage < pages.length - 1) {
                  setCurrentPage(currentPage + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              onPrev={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              hasNext={currentPage < pages.length - 1}
              hasPrev={currentPage > 0}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
