interface ProgressBarProps {
  progress: number;
  completedPages: number;
  totalPages: number;
}

export function ProgressBar({ progress, completedPages, totalPages }: ProgressBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-700">Progreso del curso</span>
          <span className="text-sm text-purple-700">
            {completedPages} de {totalPages} lecciones completadas ({Math.round(progress)}%)
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
