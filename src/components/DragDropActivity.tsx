import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Item {
  id: string;
  text: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
  color: string;
}

interface DragDropActivityProps {
  items: Item[];
  categories: Category[];
  onComplete: () => void;
}

export function DragDropActivity({ items, categories, onComplete }: DragDropActivityProps) {
  const [itemPositions, setItemPositions] = useState<Record<string, string>>({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData('itemId', itemId);
  };

  const handleDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('itemId');
    setItemPositions({ ...itemPositions, [itemId]: categoryId });
    setShowFeedback(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const checkAnswers = () => {
    const correct = items.every((item) => itemPositions[item.id] === item.category);
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      onComplete();
    }
  };

  const remainingItems = items.filter((item) => !itemPositions[item.id]);

  return (
    <div className="space-y-6">
      {/* Items to drag */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-sm text-gray-600 mb-3">Arrastra estos elementos:</h4>
        <div className="flex flex-wrap gap-3">
          {remainingItems.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              className="bg-white px-4 py-2 rounded-lg shadow cursor-move hover:shadow-md transition-shadow border-2 border-gray-200"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Drop zones */}
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((category) => {
          const colorClasses = {
            purple: 'bg-purple-50 border-purple-300',
            blue: 'bg-blue-50 border-blue-300',
            green: 'bg-green-50 border-green-300',
          };

          const itemsInCategory = items.filter(
            (item) => itemPositions[item.id] === category.id
          );

          return (
            <div
              key={category.id}
              onDrop={(e) => handleDrop(e, category.id)}
              onDragOver={handleDragOver}
              className={`${
                colorClasses[category.color as keyof typeof colorClasses]
              } border-2 border-dashed rounded-lg p-4 min-h-[200px]`}
            >
              <h4 className="text-center mb-4">{category.label}</h4>
              <div className="space-y-2">
                {itemsInCategory.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    className="bg-white px-4 py-2 rounded-lg shadow cursor-move"
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Check button */}
      {Object.keys(itemPositions).length === items.length && (
        <button
          onClick={checkAnswers}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Verificar Respuestas
        </button>
      )}

      {/* Feedback */}
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
                <p>
                  ¡Excelente! Has clasificado correctamente todos los términos.
                </p>
              </>
            ) : (
              <>
                <p>
                  Algunos elementos no están en la categoría correcta. Inténtalo de nuevo.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
