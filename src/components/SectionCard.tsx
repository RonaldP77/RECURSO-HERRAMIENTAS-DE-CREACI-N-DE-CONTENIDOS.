import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  onComplete?: () => void;
  isCompleted?: boolean;
  showCompleteButton?: boolean;
}

export function SectionCard({
  title,
  children,
  onComplete,
  isCompleted,
  showCompleteButton = true,
}: SectionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-purple-700">{title}</h2>
        {isCompleted && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span>Completado</span>
          </div>
        )}
      </div>
      
      <div className="space-y-6">{children}</div>
      
      {showCompleteButton && !isCompleted && onComplete && (
        <button
          onClick={onComplete}
          className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          Marcar como completado
        </button>
      )}
    </div>
  );
}
