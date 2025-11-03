import { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { User, Sparkles } from 'lucide-react';

interface MendelPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function MendelPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: MendelPageProps) {
  const [selectedLaw, setSelectedLaw] = useState<number | null>(null);

  const laws = [
    {
      id: 1,
      title: 'Primera Ley: Ley de la Uniformidad',
      shortTitle: '1ª Ley',
      description: 'Cuando se cruzan dos líneas puras que difieren en un carácter, todos los descendientes de la primera generación filial (F1) son iguales entre sí y fenotípicamente iguales a uno de los progenitores.',
      example: 'Si cruzamos plantas de guisantes de semillas lisas (RR) con plantas de semillas rugosas (rr), todos los descendientes F1 tendrán semillas lisas (Rr).',
      diagram: {
        parents: ['RR (Liso)', 'rr (Rugoso)'],
        f1: 'Rr (Todos lisos)',
      },
      color: 'purple',
    },
    {
      id: 2,
      title: 'Segunda Ley: Ley de la Segregación',
      shortTitle: '2ª Ley',
      description: 'Durante la formación de gametos, los alelos de un gen se separan, de manera que cada gameto recibe solo uno de los alelos. Cuando los gametos se unen en la fecundación, los alelos se combinan de nuevo.',
      example: 'Si cruzamos dos plantas F1 heterocigotas (Rr × Rr), en la F2 obtendremos una proporción 3:1 de fenotipos (3 lisas : 1 rugosa).',
      diagram: {
        parents: ['Rr', 'Rr'],
        f2: 'RR : Rr : Rr : rr (3 lisas : 1 rugosa)',
      },
      color: 'blue',
    },
    {
      id: 3,
      title: 'Tercera Ley: Ley de la Distribución Independiente',
      shortTitle: '3ª Ley',
      description: 'Los alelos de diferentes genes se distribuyen independientemente unos de otros durante la formación de los gametos. Esta ley se cumple cuando los genes están en cromosomas diferentes.',
      example: 'Si consideramos dos caracteres (forma y color de semilla), un dihíbrido RrAa producirá gametos RA, Ra, rA, ra en proporciones iguales.',
      diagram: {
        parents: ['RrAa', 'RrAa'],
        f2: 'Proporción fenotípica 9:3:3:1',
      },
      color: 'green',
    },
  ];

  return (
    <PageLayout
      title="Las Leyes de Mendel"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
    >
      <div className="space-y-8">
        {/* Introduction - Mendel */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white rounded-full p-6 shadow-lg flex-shrink-0">
              <User className="w-20 h-20 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl text-gray-800 mb-3">Gregor Mendel (1822-1884)</h2>
              <p className="text-gray-700">
                Monje agustino y científico austriaco, considerado el <strong>"Padre de la Genética"</strong>.
                Realizó experimentos con plantas de guisantes (<em>Pisum sativum</em>) en el jardín del
                monasterio de Brno, estableciendo las bases de la herencia biológica.
              </p>
            </div>
          </div>
        </div>

        {/* Why peas? */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl text-gray-800">¿Por qué guisantes?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="text-green-700 mb-2">Fáciles de cultivar</h3>
              <p className="text-sm text-gray-600">Crecen rápidamente y producen muchas semillas</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="text-blue-700 mb-2">Caracteres claros</h3>
              <p className="text-sm text-gray-600">Tienen características bien definidas y observables</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-purple-700 mb-2">Control de cruces</h3>
              <p className="text-sm text-gray-600">Se puede controlar fácilmente la polinización</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-pink-700 mb-2">Generaciones rápidas</h3>
              <p className="text-sm text-gray-600">Permiten observar varias generaciones en poco tiempo</p>
            </div>
          </div>
        </div>

        {/* Las Tres Leyes */}
        <div>
          <h2 className="text-2xl text-gray-800 mb-6">Las Tres Leyes de la Herencia</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {laws.map((law) => (
              <button
                key={law.id}
                onClick={() => setSelectedLaw(law.id)}
                className={`p-6 rounded-xl text-left transition-all ${
                  selectedLaw === law.id
                    ? `bg-gradient-to-br from-${law.color}-500 to-${law.color}-700 text-white shadow-xl scale-105`
                    : `bg-${law.color}-50 hover:bg-${law.color}-100 border-2 border-${law.color}-200`
                }`}
              >
                <div className="text-3xl mb-2">{law.id}</div>
                <h3 className={selectedLaw === law.id ? 'text-white' : `text-${law.color}-700`}>
                  {law.shortTitle}
                </h3>
              </button>
            ))}
          </div>

          {selectedLaw && (
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200 animate-fadeIn">
              {(() => {
                const law = laws.find(l => l.id === selectedLaw)!;
                return (
                  <>
                    <h3 className="text-2xl text-gray-800 mb-4">{law.title}</h3>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-700 mb-3">📖 Descripción</h4>
                      <p className="text-gray-700">{law.description}</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
                      <h4 className="text-blue-700 mb-3">💡 Ejemplo</h4>
                      <p className="text-gray-700">{law.example}</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
                      <h4 className="text-lg mb-3">Diagrama del Cruce</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-purple-100 text-sm mb-2">Progenitores (P):</p>
                          <div className="flex gap-4">
                            {law.diagram.parents.map((parent, idx) => (
                              <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                {parent}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-purple-100 text-sm mb-2">Descendencia:</p>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                            {law.diagram.f1 || law.diagram.f2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {!selectedLaw && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">Selecciona una ley para ver los detalles</p>
            </div>
          )}
        </div>

        {/* Caracteres estudiados */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl text-gray-800 mb-6">Los 7 Caracteres Estudiados por Mendel</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { trait: 'Forma de la semilla', dominant: 'Lisa', recessive: 'Rugosa' },
              { trait: 'Color de la semilla', dominant: 'Amarilla', recessive: 'Verde' },
              { trait: 'Color de la flor', dominant: 'Púrpura', recessive: 'Blanca' },
              { trait: 'Forma de la vaina', dominant: 'Inflada', recessive: 'Constreñida' },
              { trait: 'Color de la vaina', dominant: 'Verde', recessive: 'Amarilla' },
              { trait: 'Posición de la flor', dominant: 'Axial', recessive: 'Terminal' },
              { trait: 'Longitud del tallo', dominant: 'Alto (2m)', recessive: 'Enano (0.5m)' },
            ].map((char, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow">
                <h4 className="text-gray-800 mb-3">{char.trait}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Dominante:</span>
                    <p className="text-purple-700">{char.dominant}</p>
                  </div>
                  <div className="text-gray-400">vs</div>
                  <div className="flex-1 text-right">
                    <span className="text-sm text-gray-600">Recesivo:</span>
                    <p className="text-blue-700">{char.recessive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key concept */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
          <h3 className="text-xl mb-3">🔑 Importancia Histórica</h3>
          <p>
            Las leyes de Mendel, publicadas en 1866, no fueron reconocidas hasta 1900. Hoy sabemos
            que estas leyes se explican por el comportamiento de los cromosomas durante la meiosis,
            pero Mendel las descubrió sin conocer la existencia del ADN ni de los cromosomas.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
