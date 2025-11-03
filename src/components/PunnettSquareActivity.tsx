import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface PunnettSquareActivityProps {
  onComplete: () => void;
}

export function PunnettSquareActivity({ onComplete }: PunnettSquareActivityProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswers = {
    cell1: 'BB',
    cell2: 'Bb',
    cell3: 'Bb',
    cell4: 'bb',
  };

  const handleInputChange = (cellId: string, value: string) => {
    setAnswers({ ...answers, [cellId]: value.toUpperCase() });
    setShowFeedback(false);
  };

  const checkAnswers = () => {
    const correct = Object.keys(correctAnswers).every(
      (key) => answers[key] === correctAnswers[key as keyof typeof correctAnswers]
    );
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto border-2 border-purple-200">
        <div className="grid grid-cols-3 gap-2">
          {/* Header row */}
          <div className="bg-gray-100 p-4 rounded"></div>
          <div className="bg-purple-200 p-4 rounded text-center">B</div>
          <div className="bg-purple-200 p-4 rounded text-center">b</div>

          {/* First row */}
          <div className="bg-blue-200 p-4 rounded text-center">B</div>
          <div className="bg-purple-50 p-2 rounded">
            <input
              type="text"
              value={answers.cell1}
              onChange={(e) => handleInputChange('cell1', e.target.value)}
              className="w-full text-center border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500"
              maxLength={2}
              placeholder="?"
            />
          </div>
          <div className="bg-purple-50 p-2 rounded">
            <input
              type="text"
              value={answers.cell2}
              onChange={(e) => handleInputChange('cell2', e.target.value)}
              className="w-full text-center border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500"
              maxLength={2}
              placeholder="?"
            />
          </div>

          {/* Second row */}
          <div className="bg-blue-200 p-4 rounded text-center">b</div>
          <div className="bg-purple-50 p-2 rounded">
            <input
              type="text"
              value={answers.cell3}
              onChange={(e) => handleInputChange('cell3', e.target.value)}
              className="w-full text-center border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500"
              maxLength={2}
              placeholder="?"
            />
          </div>
          <div className="bg-purple-50 p-2 rounded">
            <input
              type="text"
              value={answers.cell4}
              onChange={(e) => handleInputChange('cell4', e.target.value)}
              className="w-full text-center border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500"
              maxLength={2}
              placeholder="?"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={checkAnswers}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Verificar Respuestas
        </button>
      </div>

      {showFeedback && (
        <div
          className={`${
            isCorrect
              ? 'bg-green-50 border-green-400 text-green-800'
              : 'bg-red-50 border-red-400 text-red-800'
          } border-l-4 p-6 rounded`}
        >
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <>
                <CheckCircle className="w-6 h-6" />
                <div>
                  <p className="mb-2">
                    ¡Correcto! Has completado el cuadro de Punnett correctamente.
                  </p>
                  <p className="text-sm">
                    Resultado: 25% BB, 50% Bb, 25% bb
                  </p>
                </div>
              </>
            ) : (
              <p>
                Algunas respuestas no son correctas. Recuerda combinar un alelo de cada progenitor.
                Revisa las leyes de Mendel en la sección de Contenidos.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
        <p>
          <strong>Ayuda:</strong> Combina los alelos de cada progenitor. Por ejemplo, si una célula
          recibe "B" del progenitor vertical y "B" del progenitor horizontal, el resultado es "BB".
        </p>
      </div>
    </div>
  );
}
