import { useState } from 'react';
import { SectionCard } from '../SectionCard';
import { CheckCircle, XCircle, Award } from 'lucide-react';

interface EvaluationProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function Evaluation({ onComplete, isCompleted }: EvaluationProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: '¿Qué es un alelo?',
      options: [
        'Una célula reproductiva',
        'Una forma alternativa de un gen',
        'Un cromosoma completo',
        'Una proteína del ADN',
      ],
      correctAnswer: 1,
      explanation: 'Un alelo es cada una de las formas alternativas que puede tener un gen.',
    },
    {
      id: 2,
      question: '¿Cuál es el genotipo de un individuo heterocigoto para un carácter?',
      options: ['AA', 'Aa', 'aa', 'AAa'],
      correctAnswer: 1,
      explanation: 'Un heterocigoto tiene dos alelos diferentes para un gen, representado como Aa.',
    },
    {
      id: 3,
      question: 'Si cruzamos dos plantas Aa, ¿qué porcentaje de la descendencia será aa?',
      options: ['0%', '25%', '50%', '75%'],
      correctAnswer: 1,
      explanation: 'En un cruce Aa × Aa, el 25% de la descendencia será aa (homocigoto recesivo).',
    },
    {
      id: 4,
      question: '¿Qué ley de Mendel establece que los alelos se separan durante la formación de gametos?',
      options: [
        'Ley de la Uniformidad',
        'Ley de la Segregación',
        'Ley de la Distribución Independiente',
        'Ley de la Dominancia',
      ],
      correctAnswer: 1,
      explanation: 'La Segunda Ley o Ley de la Segregación establece que los alelos se separan durante la formación de gametos.',
    },
    {
      id: 5,
      question: '¿Qué representa el fenotipo?',
      options: [
        'La información genética completa',
        'Los cromosomas de un organismo',
        'Las características observables',
        'Los alelos recesivos',
      ],
      correctAnswer: 2,
      explanation: 'El fenotipo representa las características observables de un organismo.',
    },
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (!showResults) {
      setAnswers({ ...answers, [questionId]: optionIndex });
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
      const score = calculateScore();
      if (score >= 4) {
        onComplete();
      }
    }
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? (score / questions.length) * 100 : 0;

  return (
    <SectionCard
      title="Evaluación Final"
      onComplete={onComplete}
      isCompleted={isCompleted}
      showCompleteButton={false}
    >
      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded mb-6">
        <p className="text-gray-700">
          Responde las siguientes preguntas para evaluar tu comprensión de los conceptos de genética.
          Necesitas al menos 4 respuestas correctas de 5 para aprobar.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question) => {
          const userAnswer = answers[question.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = showResults && userAnswer === question.correctAnswer;
          const isWrong = showResults && isAnswered && userAnswer !== question.correctAnswer;

          return (
            <div
              key={question.id}
              className={`bg-white border-2 rounded-lg p-6 ${
                isCorrect
                  ? 'border-green-400'
                  : isWrong
                  ? 'border-red-400'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {question.id}
                </span>
                <p className="text-gray-800 flex-1">{question.question}</p>
                {showResults && (
                  <div className="flex-shrink-0">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : isWrong ? (
                      <XCircle className="w-6 h-6 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>

              <div className="space-y-2 ml-11">
                {question.options.map((option, index) => {
                  const isSelected = userAnswer === index;
                  const isCorrectOption = showResults && index === question.correctAnswer;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(question.id, index)}
                      disabled={showResults}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        isSelected && !showResults
                          ? 'border-purple-600 bg-purple-50'
                          : isCorrectOption
                          ? 'border-green-400 bg-green-50'
                          : isSelected && isWrong
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-200 hover:border-purple-300'
                      } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="ml-11 mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Explicación:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults && Object.keys(answers).length === questions.length && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all mt-6"
        >
          Enviar Respuestas
        </button>
      )}

      {showResults && (
        <div className="mt-6">
          <div
            className={`${
              percentage >= 80
                ? 'bg-green-50 border-green-400'
                : percentage >= 60
                ? 'bg-yellow-50 border-yellow-400'
                : 'bg-red-50 border-red-400'
            } border-l-4 p-6 rounded`}
          >
            <div className="flex items-center gap-4">
              <Award
                className={`w-12 h-12 ${
                  percentage >= 80
                    ? 'text-green-600'
                    : percentage >= 60
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}
              />
              <div>
                <h3 className="text-xl mb-1">
                  Tu puntuación: {score} de {questions.length} ({percentage}%)
                </h3>
                <p className="text-gray-700">
                  {percentage >= 80
                    ? '¡Excelente! Has demostrado un gran dominio de los conceptos.'
                    : percentage >= 60
                    ? '¡Bien hecho! Tienes una buena comprensión, pero puedes mejorar.'
                    : 'Te recomendamos revisar los contenidos antes de continuar.'}
                </p>
              </div>
            </div>
          </div>

          {percentage >= 80 && (
            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all mt-4"
            >
              Marcar como completado
            </button>
          )}
        </div>
      )}

      {!showResults && Object.keys(answers).length < questions.length && (
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <p className="text-gray-700">
            Por favor, responde todas las preguntas antes de enviar.
          </p>
        </div>
      )}
    </SectionCard>
  );
}
