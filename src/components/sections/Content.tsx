import { useState } from 'react';
import { SectionCard } from '../SectionCard';
import { FlipCard } from '../FlipCard';
import { ChevronRight } from 'lucide-react';

interface ContentProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function Content({ onComplete, isCompleted }: ContentProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const concepts = [
    {
      term: 'Gen',
      definition: 'Unidad hereditaria que se transmite de padres a hijos y determina características específicas del organismo.',
      example: 'El gen que determina el color de los ojos.',
    },
    {
      term: 'Alelo',
      definition: 'Cada una de las formas alternativas que puede tener un gen. Los alelos se representan con letras.',
      example: 'El alelo "A" para ojos oscuros y "a" para ojos claros.',
    },
    {
      term: 'Genotipo',
      definition: 'Conjunto de genes que posee un organismo. Es la información genética completa.',
      example: 'AA, Aa, o aa para el rasgo del color de ojos.',
    },
    {
      term: 'Fenotipo',
      definition: 'Características observables de un organismo resultado de la interacción entre genotipo y ambiente.',
      example: 'Ojos marrones, altura, color de cabello.',
    },
    {
      term: 'Dominante',
      definition: 'Alelo que se expresa en el fenotipo incluso en presencia de otro alelo diferente (heterocigoto).',
      example: 'El alelo para ojos oscuros suele ser dominante.',
    },
    {
      term: 'Recesivo',
      definition: 'Alelo que solo se expresa en el fenotipo cuando está en homocigosis (dos copias iguales).',
      example: 'El alelo para ojos claros suele ser recesivo.',
    },
  ];

  const mendelLaws = [
    {
      title: 'Primera Ley: Ley de la Uniformidad',
      description: 'Cuando se cruzan dos líneas puras para un carácter, todos los descendientes de la primera generación (F1) son iguales entre sí.',
      color: 'purple',
    },
    {
      title: 'Segunda Ley: Ley de la Segregación',
      description: 'Los alelos de un gen se separan durante la formación de gametos, y cada gameto recibe solo un alelo de cada gen.',
      color: 'blue',
    },
    {
      title: 'Tercera Ley: Ley de la Distribución Independiente',
      description: 'Los alelos de diferentes genes se distribuyen independientemente durante la formación de gametos.',
      color: 'pink',
    },
  ];

  return (
    <SectionCard
      title="Contenidos: Fundamentos de Genética"
      onComplete={onComplete}
      isCompleted={isCompleted}
    >
      {/* Conceptos Básicos */}
      <div>
        <h3 className="text-2xl text-purple-700 mb-4">Conceptos Fundamentales</h3>
        <p className="text-gray-700 mb-6">
          Haz clic en cada tarjeta para descubrir su definición y ejemplos.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((concept, index) => (
            <FlipCard
              key={index}
              front={
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-lg">
                  <h4 className="text-2xl text-center">{concept.term}</h4>
                </div>
              }
              back={
                <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg flex flex-col justify-center">
                  <h4 className="text-xl text-purple-700 mb-2">{concept.term}</h4>
                  <p className="text-gray-700 text-sm mb-3">{concept.definition}</p>
                  <p className="text-sm text-blue-600">
                    <span className="font-semibold">Ejemplo:</span> {concept.example}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>

      {/* Leyes de Mendel */}
      <div className="mt-8">
        <h3 className="text-2xl text-purple-700 mb-4">Leyes de Mendel</h3>
        <p className="text-gray-700 mb-6">
          Gregor Mendel, considerado el padre de la genética, estableció las leyes fundamentales
          de la herencia a través de sus experimentos con guisantes.
        </p>

        <div className="space-y-4">
          {mendelLaws.map((law, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-${law.color}-50 to-${law.color}-100 rounded-lg p-6 border-l-4 border-${law.color}-600`}
            >
              <h4 className="text-xl text-gray-800 mb-2">{law.title}</h4>
              <p className="text-gray-700">{law.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cuadro de Punnett */}
      <div className="mt-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6">
        <h3 className="text-2xl text-purple-700 mb-4">El Cuadro de Punnett</h3>
        <p className="text-gray-700 mb-6">
          Es una herramienta gráfica utilizada para predecir las combinaciones posibles de alelos
          en la descendencia de un cruce genético.
        </p>

        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
          <div className="text-center mb-4">
            <p className="text-gray-700">Ejemplo: Cruce Aa × Aa</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-100 p-4 rounded"></div>
            <div className="bg-purple-200 p-4 rounded text-center">A</div>
            <div className="bg-purple-200 p-4 rounded text-center">a</div>
            
            <div className="bg-blue-200 p-4 rounded text-center">A</div>
            <div className="bg-green-100 p-4 rounded text-center">AA</div>
            <div className="bg-yellow-100 p-4 rounded text-center">Aa</div>
            
            <div className="bg-blue-200 p-4 rounded text-center">a</div>
            <div className="bg-yellow-100 p-4 rounded text-center">Aa</div>
            <div className="bg-red-100 p-4 rounded text-center">aa</div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-700">
              <span className="inline-block w-4 h-4 bg-green-100 border border-gray-300 mr-2"></span>
              25% AA (Homocigoto dominante)
            </p>
            <p className="text-sm text-gray-700">
              <span className="inline-block w-4 h-4 bg-yellow-100 border border-gray-300 mr-2"></span>
              50% Aa (Heterocigoto)
            </p>
            <p className="text-sm text-gray-700">
              <span className="inline-block w-4 h-4 bg-red-100 border border-gray-300 mr-2"></span>
              25% aa (Homocigoto recesivo)
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
