import { SectionCard } from '../SectionCard';
import { Target, CheckCircle } from 'lucide-react';

interface ObjectivesProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function Objectives({ onComplete, isCompleted }: ObjectivesProps) {
  const objectives = [
    {
      title: 'Comprender los conceptos básicos de genética',
      description: 'Identificar y explicar términos fundamentales como gen, alelo, genotipo y fenotipo.',
    },
    {
      title: 'Analizar las leyes de Mendel',
      description: 'Aplicar las leyes de la herencia mendeliana para predecir la transmisión de características.',
    },
    {
      title: 'Identificar patrones de herencia',
      description: 'Reconocer diferentes tipos de herencia: dominante, recesiva, codominante y ligada al sexo.',
    },
    {
      title: 'Resolver problemas de genética',
      description: 'Utilizar cuadros de Punnett para resolver problemas de cruces genéticos.',
    },
    {
      title: 'Relacionar genética con la vida cotidiana',
      description: 'Aplicar conocimientos genéticos a situaciones reales y entender su importancia práctica.',
    },
  ];

  return (
    <SectionCard
      title="Objetivos de Aprendizaje"
      onComplete={onComplete}
      isCompleted={isCompleted}
    >
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-8 h-8 text-purple-600" />
        <p className="text-gray-700 text-lg">
          Al finalizar este recurso educativo, serás capaz de:
        </p>
      </div>

      <div className="space-y-4">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-600"
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-purple-700 mb-2">{objective.title}</h3>
                <p className="text-gray-700">{objective.description}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mt-6">
        <h3 className="text-xl text-blue-700 mb-3">Resultado de Aprendizaje Esperado</h3>
        <p className="text-gray-700">
          Al completar este recurso, los estudiantes serán capaces de explicar los principios
          fundamentales de la genética y aplicarlos para resolver problemas relacionados con
          la herencia biológica, demostrando comprensión conceptual y habilidades de análisis crítico.
        </p>
      </div>
    </SectionCard>
  );
}
