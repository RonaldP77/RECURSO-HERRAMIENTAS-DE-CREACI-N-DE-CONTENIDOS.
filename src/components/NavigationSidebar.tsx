import { Check, Lock } from 'lucide-react';

interface Page {
  id: number;
  title: string;
  component: any;
}

interface NavigationSidebarProps {
  pages: Page[];
  currentPage: number;
  completedPages: number[];
  onPageChange: (pageId: number) => void;
}

export function NavigationSidebar({ pages, currentPage, completedPages, onPageChange }: NavigationSidebarProps) {
  return (
    <aside className="w-80 bg-white shadow-xl border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Índice del Curso
        </h2>
        
        <nav>
          <ul className="space-y-1">
            {pages.map((page, index) => {
              const isActive = currentPage === page.id;
              const isCompleted = completedPages.includes(page.id);
              const isLocked = index > 0 && !completedPages.includes(index - 1) && !isCompleted;
              
              return (
                <li key={page.id}>
                  <button
                    onClick={() => !isLocked && onPageChange(page.id)}
                    disabled={isLocked}
                    className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-md'
                        : isLocked
                        ? 'text-gray-400 cursor-not-allowed opacity-60'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <div className="bg-green-500 rounded-full p-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      ) : isLocked ? (
                        <Lock className="w-5 h-5" />
                      ) : (
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                          isActive ? 'border-purple-600 text-purple-600' : 'border-gray-400 text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm leading-tight">{page.title}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
