import { ReactNode } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  onComplete?: () => void;
  isCompleted?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  showCompleteButton?: boolean;
}

export function PageLayout({
  title,
  children,
  onComplete,
  isCompleted,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  showCompleteButton = true,
}: PageLayoutProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">{title}</h1>
          {isCompleted && (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span>Completado</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {children}
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-200 p-6 bg-gray-50">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              hasPrev
                ? 'bg-white border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          {showCompleteButton && !isCompleted && onComplete && (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
            >
              <CheckCircle className="w-5 h-5" />
              Marcar como completado
            </button>
          )}

          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              hasNext
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
