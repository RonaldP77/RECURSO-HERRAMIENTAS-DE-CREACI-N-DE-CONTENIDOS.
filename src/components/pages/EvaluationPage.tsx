import { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';

interface EvaluationPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function EvaluationPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: EvaluationPageProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: '¿Qué estructura molecular contiene la información genética de los seres vivos?',
      options: ['Proteínas', 'ADN', 'ARN mensajero', 'Lípidos'],
      correctAnswer: 1,
      explanation: 'El ADN (ácido desoxirribonucleico) es la molécula que almacena la información genética.',
    },
    {
      id: 2,
      question: 'Según la regla de complementariedad de bases del ADN, ¿con qué base nitrogenada se empareja la Adenina?',
      options: ['Guanina', 'Timina', 'Citosina', 'Uracilo'],
      correctAnswer: 1,
      explanation: 'La Adenina (A) siempre se empareja con la Timina (T) mediante dos puentes de hidrógeno.',
    },
    {
      id: 3,
      question: '¿Qué es un alelo?',
      options: [
        'Una célula reproductiva',
        'Una forma alternativa de un gen',
        'Un tipo de cromosoma',
        'Una proteína del núcleo',
      ],
      correctAnswer: 1,
      explanation: 'Un alelo es cada una de las formas alternativas que puede tener un gen.',
    },
    {
      id: 4,
      question: 'Un individuo con genotipo Aa para un carácter se denomina:',
      options: ['Homocigoto dominante', 'Heterocigoto', 'Homocigoto recesivo', 'Haploide'],
      correctAnswer: 1,
      explanation: 'Un heterocigoto posee dos alelos diferentes para un gen (Aa).',
    },
    {
      id: 5,
      question: '¿Qué representa el fenotipo?',
      options: [
        'La información genética completa',
        'Los cromosomas de un organismo',
        'Las características observables',
        'Solo los alelos recesivos',
      ],
      correctAnswer: 2,
      explanation: 'El fenotipo son las características observables de un organismo.',
    },
    {
      id: 6,
      question: 'La Primera Ley de Mendel (Ley de la Uniformidad) establece que:',
      options: [
        'Los genes se heredan independientemente',
        'Los alelos se separan en la meiosis',
        'Todos los F1 de líneas puras son iguales entre sí',
        'Las características se mezclan en los híbridos',
      ],
      correctAnswer: 2,
      explanation: 'La Primera Ley establece que al cruzar líneas puras, todos los F1 son uniformes.',
    },
    {
      id: 7,
      question: 'Si cruzamos dos plantas heterocigotas Aa × Aa, ¿qué proporción fenotípica esperamos en la F2 (asumiendo dominancia completa)?',
      options: ['1:1', '1:2:1', '3:1', '9:3:3:1'],
      correctAnswer: 2,
      explanation: 'El cruce Aa × Aa produce una proporción fenotípica de 3:1 (3 dominantes : 1 recesivo).',
    },
    {
      id: 8,
      question: '¿Cuántos cromosomas tiene una célula somática humana normal?',
      options: ['23', '46', '92', '48'],
      correctAnswer: 1,
      explanation: 'Las células somáticas humanas tienen 46 cromosomas (23 pares).',
    },
    {
      id: 9,
      question: 'En el grupo sanguíneo AB, los alelos I^A e I^B muestran:',
      options: ['Dominancia completa', 'Codominancia', 'Dominancia incompleta', 'Epistasis'],
      correctAnswer: 1,
      explanation: 'Los alelos I^A e I^B son codominantes, ambos se expresan en el fenotipo AB.',
    },
    {
      id: 10,
      question: '¿Por qué las enfermedades ligadas al cromosoma X recesivas son más comunes en hombres?',
      options: [
        'Los hombres tienen dos cromosomas X',
        'Los hombres solo tienen un cromosoma X',
        'El cromosoma Y es más pequeño',
        'Las mujeres son inmunes a estas enfermedades',
      ],
      correctAnswer: 1,
      explanation: 'Los hombres (XY) solo tienen un cromosoma X, por lo que un alelo recesivo se expresa.',
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
      if (score >= 7) { // 70% para aprobar
        onComplete();
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setExamStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? (score / questions.length) * 100 : 0;

  if (!examStarted) {
    return (
      <PageLayout
        title="Evaluación Final"
        onComplete={onComplete}
        isCompleted={isCompleted}
        onNext={onNext}
        onPrev={onPrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
        showCompleteButton={false}
      >
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8 text-center">
            <Award className="w-20 h-20 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl text-gray-800 mb-4">¿Listo para la evaluación?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Esta evaluación consta de 10 preguntas que abarcan todos los temas vistos en el curso.
              Necesitas obtener al menos 70% (7/10) para aprobar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl text-purple-600 mb-2">10</div>
              <p className="text-gray-600">Preguntas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl text-blue-600 mb-2">70%</div>
              <p className="text-gray-600">Puntuación mínima</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl text-green-600 mb-2">∞</div>
              <p className="text-gray-600">Intentos permitidos</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-lg text-blue-800 mb-3">Instrucciones:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Lee cada pregunta cuidadosamente antes de responder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Selecciona la opción que consideres correcta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Puedes revisar tus respuestas antes de enviar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Al finalizar, recibirás retroalimentación inmediata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Si no apruebas, puedes volver a intentarlo</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={() => setExamStarted(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Comenzar Evaluación
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Evaluación Final"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
      showCompleteButton={false}
    >
      <div className="space-y-8">
        {!showResults && (
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <p className="text-gray-700">
              Responde todas las preguntas y haz clic en "Enviar Respuestas" al finalizar.
              Progreso: {Object.keys(answers).length} / {questions.length}
            </p>
          </div>
        )}

        <div className="space-y-6">
          {questions.map((question) => {
            const userAnswer = answers[question.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = showResults && userAnswer === question.correctAnswer;
            const isWrong = showResults && isAnswered && userAnswer !== question.correctAnswer;

            return (
              <div
                key={question.id}
                className={`bg-white border-2 rounded-xl p-6 shadow-md ${
                  isCorrect
                    ? 'border-green-400'
                    : isWrong
                    ? 'border-red-400'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {question.id}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg">{question.question}</p>
                  </div>
                  {showResults && (
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      ) : isWrong ? (
                        <XCircle className="w-7 h-7 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>

                <div className="space-y-2 ml-14">
                  {question.options.map((option, index) => {
                    const isSelected = userAnswer === index;
                    const isCorrectOption = showResults && index === question.correctAnswer;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(question.id, index)}
                        disabled={showResults}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          isSelected && !showResults
                            ? 'border-purple-600 bg-purple-50'
                            : isCorrectOption
                            ? 'border-green-400 bg-green-50'
                            : isSelected && isWrong
                            ? 'border-red-400 bg-red-50'
                            : 'border-gray-200 hover:border-purple-300'
                        } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected && !showResults
                              ? 'border-purple-600 bg-purple-600'
                              : isCorrectOption
                              ? 'border-green-500 bg-green-500'
                              : isSelected && isWrong
                              ? 'border-red-500 bg-red-500'
                              : 'border-gray-400'
                          }`}>
                            {(isSelected || isCorrectOption) && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {showResults && (
                  <div className="ml-14 mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-700">Explicación:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showResults && Object.keys(answers).length === questions.length && (
          <div className="sticky bottom-6 z-10">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-xl"
            >
              Enviar Respuestas
            </button>
          </div>
        )}

        {showResults && (
          <div className="space-y-6">
            <div
              className={`${
                percentage >= 70
                  ? 'bg-green-50 border-green-400'
                  : 'bg-yellow-50 border-yellow-400'
              } border-l-4 p-8 rounded-lg`}
            >
              <div className="flex items-start gap-6">
                <Award
                  className={`w-16 h-16 ${
                    percentage >= 70 ? 'text-green-600' : 'text-yellow-600'
                  } flex-shrink-0`}
                />
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">
                    Tu puntuación: {score} de {questions.length} ({percentage.toFixed(0)}%)
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {percentage >= 90
                      ? '¡Excelente! Has demostrado un dominio sobresaliente de los conceptos de genética.'
                      : percentage >= 70
                      ? '¡Bien hecho! Has aprobado la evaluación y demostrado una buena comprensión del tema.'
                      : 'No has alcanzado la puntuación mínima. Te recomendamos revisar los contenidos y volver a intentarlo.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleReset}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Volver a Intentar
              </button>
              
              {percentage >= 70 && (
                <button
                  onClick={onComplete}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  <CheckCircle className="w-5 h-5" />
                  Marcar como Completado
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
