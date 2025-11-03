import { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { PunnettSquareActivity } from '../PunnettSquareActivity';
import { DragDropActivity } from '../DragDropActivity';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ExercisesPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ExercisesPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: ExercisesPageProps) {
  const [exercise1Complete, setExercise1Complete] = useState(false);
  const [exercise2Complete, setExercise2Complete] = useState(false);
  const [exercise3Complete, setExercise3Complete] = useState(false);

  const dragDropItems = [
    { id: 'gen', text: 'Gen', category: 'basic' },
    { id: 'alelo', text: 'Alelo', category: 'basic' },
    { id: 'cromosoma', text: 'Cromosoma', category: 'basic' },
    { id: 'AA', text: 'AA', category: 'genotype' },
    { id: 'Aa', text: 'Aa', category: 'genotype' },
    { id: 'aa', text: 'aa', category: 'genotype' },
    { id: 'ojos', text: 'Color de ojos', category: 'phenotype' },
    { id: 'altura', text: 'Altura', category: 'phenotype' },
    { id: 'sangre', text: 'Grupo sanguíneo', category: 'phenotype' },
  ];

  const categories = [
    { id: 'basic', label: 'Conceptos Básicos', color: 'purple' },
    { id: 'genotype', label: 'Genotipos', color: 'blue' },
    { id: 'phenotype', label: 'Fenotipos', color: 'green' },
  ];

  const allComplete = exercise1Complete && exercise2Complete && exercise3Complete;

  return (
    <PageLayout
      title="Ejercicios Prácticos"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
      showCompleteButton={allComplete}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
          <p className="text-gray-700">
            Completa los siguientes ejercicios para reforzar tu comprensión de los conceptos de genética.
            Debes completar todos los ejercicios para marcar esta sección como finalizada.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl text-gray-800">Tu Progreso en Ejercicios</h3>
            <span className="text-purple-700">
              {[exercise1Complete, exercise2Complete, exercise3Complete].filter(Boolean).length} / 3 completados
            </span>
          </div>
          <div className="flex gap-2">
            {[exercise1Complete, exercise2Complete, exercise3Complete].map((completed, idx) => (
              <div
                key={idx}
                className={`flex-1 h-3 rounded-full ${
                  completed ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Exercise 1: Drag and Drop */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-purple-700">Ejercicio 1: Clasificación de Conceptos</h2>
            {exercise1Complete && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span>¡Completado!</span>
              </div>
            )}
          </div>

          <p className="text-gray-700 mb-6">
            Arrastra cada término a la categoría correcta según corresponda.
          </p>

          <DragDropActivity
            items={dragDropItems}
            categories={categories}
            onComplete={() => setExercise1Complete(true)}
          />
        </div>

        {/* Exercise 2: Punnett Square */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-blue-700">Ejercicio 2: Cuadro de Punnett</h2>
            {exercise2Complete && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span>¡Completado!</span>
              </div>
            )}
          </div>

          <p className="text-gray-700 mb-6">
            Completa el cuadro de Punnett para el cruce: <strong>Bb × Bb</strong>
            <br />
            <span className="text-sm text-gray-600">(B = ojos marrones dominante, b = ojos azules recesivo)</span>
          </p>

          <PunnettSquareActivity onComplete={() => setExercise2Complete(true)} />
        </div>

        {/* Exercise 3: Problem Solving */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-green-700">Ejercicio 3: Problemas de Genética</h2>
            {exercise3Complete && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span>¡Completado!</span>
              </div>
            )}
          </div>

          <ProblemSolvingExercise onComplete={() => setExercise3Complete(true)} />
        </div>

        {/* Progress message */}
        {!allComplete && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700">
                  Completa todos los ejercicios para poder marcar esta sección como finalizada
                  y continuar con la evaluación final.
                </p>
              </div>
            </div>
          </div>
        )}

        {allComplete && (
          <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700">
                  ¡Excelente trabajo! Has completado todos los ejercicios prácticos.
                  Ahora puedes continuar con la evaluación final.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

// Problem Solving Exercise Component
function ProblemSolvingExercise({ onComplete }: { onComplete: () => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const problems = [
    {
      id: 'p1',
      question: 'En guisantes, el gen para la altura tiene dos alelos: T (alto, dominante) y t (enano, recesivo). ¿Cuál sería el fenotipo de una planta con genotipo Tt?',
      options: ['Alta', 'Enana', 'Intermedia'],
      correct: 'Alta',
      explanation: 'Como T es dominante, una planta Tt será alta.',
    },
    {
      id: 'p2',
      question: 'Si cruzamos dos plantas heterocigotas para la altura (Tt × Tt), ¿qué proporción de la descendencia será enana?',
      options: ['0%', '25%', '50%', '75%'],
      correct: '25%',
      explanation: 'Solo las plantas tt (homocigotas recesivas) serán enanas, que representa 1/4 o 25% de la descendencia.',
    },
    {
      id: 'p3',
      question: 'Una mujer con sangre tipo A (genotipo puede ser AA o AO) tiene hijos con un hombre de sangre tipo B (genotipo puede ser BB o BO). ¿Es posible que tengan un hijo con sangre tipo O?',
      options: ['Sí', 'No'],
      correct: 'Sí',
      explanation: 'Si ambos padres son heterocigotos (AO y BO), pueden tener un hijo OO con sangre tipo O.',
    },
  ];

  const handleSubmit = () => {
    setShowResults(true);
    const allCorrect = problems.every(p => answers[p.id] === p.correct);
    if (allCorrect) {
      onComplete();
    }
  };

  const allAnswered = problems.every(p => answers[p.id]);

  return (
    <div className="space-y-6">
      {problems.map((problem, idx) => {
        const isCorrect = showResults && answers[problem.id] === problem.correct;
        const isWrong = showResults && answers[problem.id] && answers[problem.id] !== problem.correct;

        return (
          <div
            key={problem.id}
            className={`p-6 rounded-lg border-2 ${
              isCorrect
                ? 'border-green-400 bg-green-50'
                : isWrong
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <p className="text-gray-800 flex-1">{problem.question}</p>
            </div>

            <div className="ml-11 space-y-2">
              {problem.options.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    answers[problem.id] === option && !showResults
                      ? 'border-green-500 bg-green-50'
                      : showResults && option === problem.correct
                      ? 'border-green-500 bg-green-100'
                      : showResults && answers[problem.id] === option && option !== problem.correct
                      ? 'border-red-500 bg-red-100'
                      : 'border-gray-200 hover:border-green-300'
                  } ${showResults ? 'cursor-default' : ''}`}
                >
                  <input
                    type="radio"
                    name={problem.id}
                    value={option}
                    checked={answers[problem.id] === option}
                    onChange={(e) => setAnswers({ ...answers, [problem.id]: e.target.value })}
                    disabled={showResults}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>

            {showResults && (
              <div className="ml-11 mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Explicación:</strong> {problem.explanation}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {!showResults && allAnswered && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all"
        >
          Verificar Respuestas
        </button>
      )}

      {showResults && (
        <div className={`${
          problems.every(p => answers[p.id] === p.correct)
            ? 'bg-green-50 border-green-400'
            : 'bg-yellow-50 border-yellow-400'
        } border-l-4 p-6 rounded`}>
          <p className="text-gray-700">
            {problems.every(p => answers[p.id] === p.correct)
              ? '¡Excelente! Todas tus respuestas son correctas.'
              : 'Revisa las explicaciones y vuelve a intentarlo cuando estés listo.'}
          </p>
          {!problems.every(p => answers[p.id] === p.correct) && (
            <button
              onClick={() => {
                setShowResults(false);
                setAnswers({});
              }}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Intentar de nuevo
            </button>
          )}
        </div>
      )}
    </div>
  );
}
