import { useState } from 'react';
import { SectionCard } from '../SectionCard';
import { DragDropActivity } from '../DragDropActivity';
import { PunnettSquareActivity } from '../PunnettSquareActivity';
import { CheckCircle, XCircle } from 'lucide-react';

interface ActivitiesProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function Activities({ onComplete, isCompleted }: ActivitiesProps) {
  const [activity1Complete, setActivity1Complete] = useState(false);
  const [activity2Complete, setActivity2Complete] = useState(false);

  const dragDropItems = [
    { id: 'gen', text: 'Gen', category: 'concept' },
    { id: 'alelo', text: 'Alelo', category: 'concept' },
    { id: 'AA', text: 'AA', category: 'genotype' },
    { id: 'Aa', text: 'Aa', category: 'genotype' },
    { id: 'ojos-marrones', text: 'Ojos marrones', category: 'phenotype' },
    { id: 'altura', text: 'Altura 1.75m', category: 'phenotype' },
  ];

  const categories = [
    { id: 'concept', label: 'Conceptos Básicos', color: 'purple' },
    { id: 'genotype', label: 'Genotipos', color: 'blue' },
    { id: 'phenotype', label: 'Fenotipos', color: 'green' },
  ];

  const handleActivity1Complete = () => {
    setActivity1Complete(true);
  };

  const handleActivity2Complete = () => {
    setActivity2Complete(true);
  };

  const allComplete = activity1Complete && activity2Complete;

  return (
    <SectionCard
      title="Actividades Interactivas"
      onComplete={onComplete}
      isCompleted={isCompleted}
      showCompleteButton={allComplete}
    >
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6">
        <p className="text-gray-700">
          Completa las siguientes actividades para reforzar tu comprensión de los conceptos de genética.
        </p>
      </div>

      {/* Actividad 1: Clasificación */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl text-purple-700">Actividad 1: Clasifica los Términos</h3>
          {activity1Complete && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Completada</span>
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-4">
          Arrastra cada término a la categoría correcta.
        </p>
        
        <DragDropActivity
          items={dragDropItems}
          categories={categories}
          onComplete={handleActivity1Complete}
        />
      </div>

      {/* Actividad 2: Cuadro de Punnett */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl text-purple-700">Actividad 2: Completa el Cuadro de Punnett</h3>
          {activity2Complete && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Completada</span>
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-4">
          Completa el cuadro de Punnett para el cruce: Bb × Bb (B = dominante, b = recesivo)
        </p>
        
        <PunnettSquareActivity onComplete={handleActivity2Complete} />
      </div>

      {!allComplete && (
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <p className="text-gray-700">
            Completa ambas actividades para poder marcar esta sección como completada.
          </p>
        </div>
      )}
    </SectionCard>
  );
}
