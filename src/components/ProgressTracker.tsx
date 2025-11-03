interface ProgressTrackerProps {
  sections: { id: string; label: string }[];
  completedSections: string[];
}

export function ProgressTracker({ sections, completedSections }: ProgressTrackerProps) {
  const progress = (completedSections.length / sections.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700">Tu Progreso</span>
        <span className="text-purple-600">
          {completedSections.length} / {sections.length} completadas
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
