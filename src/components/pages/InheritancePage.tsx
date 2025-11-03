import { PageLayout } from '../PageLayout';
import { FlipCard } from '../FlipCard';
import { Users, Heart } from 'lucide-react';

interface InheritancePageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function InheritancePage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: InheritancePageProps) {
  const patterns = [
    {
      name: 'Herencia Dominante',
      description: 'Un solo alelo dominante es suficiente para expresar el carácter.',
      example: 'Enfermedad de Huntington, polidactilia (dedos extra)',
      genotypes: ['AA', 'Aa'],
      phenotype: 'Afectado',
      color: 'purple',
    },
    {
      name: 'Herencia Recesiva',
      description: 'Se necesitan dos alelos recesivos para expresar el carácter.',
      example: 'Fibrosis quística, anemia falciforme',
      genotypes: ['aa'],
      phenotype: 'Afectado',
      color: 'blue',
    },
    {
      name: 'Codominancia',
      description: 'Ambos alelos se expresan simultáneamente en el heterocigoto.',
      example: 'Grupo sanguíneo AB',
      genotypes: ['AB'],
      phenotype: 'Ambos fenotipos visibles',
      color: 'green',
    },
    {
      name: 'Herencia Ligada al Sexo',
      description: 'Los genes están en los cromosomas sexuales (X o Y).',
      example: 'Hemofilia, daltonismo',
      genotypes: ['X^h Y', 'X^h X^h'],
      phenotype: 'Afectado',
      color: 'pink',
    },
  ];

  return (
    <PageLayout
      title="Patrones de Herencia"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Existen diferentes <strong>patrones de herencia</strong> que determinan cómo se transmiten
            las características de una generación a otra. Cada patrón tiene reglas específicas que
            permiten predecir la probabilidad de que un descendiente herede un carácter particular.
          </p>
        </div>

        {/* Patterns Grid */}
        <div>
          <h2 className="text-2xl text-gray-800 mb-6">Tipos de Herencia</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {patterns.map((pattern, index) => (
              <FlipCard
                key={index}
                front={
                  <div className={`h-full flex flex-col items-center justify-center bg-gradient-to-br from-${pattern.color}-400 to-${pattern.color}-600 text-white p-8 rounded-xl`}>
                    <div className="text-5xl mb-4">
                      {pattern.color === 'purple' && '👑'}
                      {pattern.color === 'blue' && '🔹'}
                      {pattern.color === 'green' && '🤝'}
                      {pattern.color === 'pink' && '⚧️'}
                    </div>
                    <h3 className="text-2xl text-center">{pattern.name}</h3>
                  </div>
                }
                back={
                  <div className="h-full bg-white border-4 border-gray-200 p-6 rounded-xl flex flex-col justify-center">
                    <h4 className="text-xl text-purple-700 mb-3">{pattern.name}</h4>
                    <p className="text-sm text-gray-700 mb-4">{pattern.description}</p>
                    <div className="bg-purple-50 rounded-lg p-3 mb-3">
                      <p className="text-xs text-gray-600 mb-1">Ejemplo:</p>
                      <p className="text-sm text-gray-800">{pattern.example}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Genotipos afectados:</p>
                      <p className="text-sm text-gray-800">{pattern.genotypes.join(', ')}</p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Blood Type Example */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Ejemplo: Grupos Sanguíneos ABO</h2>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
            <p className="text-gray-700 mb-6">
              El sistema ABO es un ejemplo clásico de <strong>alelos múltiples y codominancia</strong>.
              Existen tres alelos: I^A, I^B e i.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { type: 'A', genotypes: ['I^A I^A', 'I^A i'], color: 'red' },
                { type: 'B', genotypes: ['I^B I^B', 'I^B i'], color: 'blue' },
                { type: 'AB', genotypes: ['I^A I^B'], color: 'purple' },
                { type: 'O', genotypes: ['i i'], color: 'gray' },
              ].map((blood, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className={`w-16 h-16 bg-${blood.color}-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}>
                    {blood.type}
                  </div>
                  <h4 className="text-gray-800 mb-2">Tipo {blood.type}</h4>
                  <div className="text-sm text-gray-600">
                    {blood.genotypes.map((g, i) => (
                      <div key={i}>{g}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-purple-700 mb-4">Tabla de Compatibilidad</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Puede donar a:</th>
                      <th className="p-2">A</th>
                      <th className="p-2">B</th>
                      <th className="p-2">AB</th>
                      <th className="p-2">O</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">Tipo A</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✗</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✗</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Tipo B</td>
                      <td className="p-2 text-center">✗</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✗</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Tipo AB</td>
                      <td className="p-2 text-center">✗</td>
                      <td className="p-2 text-center">✗</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✗</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Tipo O</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✓</td>
                      <td className="p-2 text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Sex-linked inheritance */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-pink-600" />
            <h3 className="text-2xl text-gray-800">Herencia Ligada al Sexo</h3>
          </div>

          <p className="text-gray-700 mb-6">
            Los genes en el cromosoma X se heredan de manera diferente que los autosomas.
            Los hombres (XY) solo tienen una copia del cromosoma X, por lo que un alelo recesivo
            en X se expresará aunque no haya otro alelo dominante.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-pink-700 mb-4">Daltonismo (Ejemplo)</h4>
              <div className="space-y-3">
                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="text-sm mb-2">👨 Hombre con daltonismo:</p>
                  <p className="text-purple-700">X^d Y</p>
                  <p className="text-xs text-gray-600 mt-1">Solo necesita un alelo recesivo</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm mb-2">👩 Mujer con daltonismo:</p>
                  <p className="text-purple-700">X^d X^d</p>
                  <p className="text-xs text-gray-600 mt-1">Necesita dos alelos recesivos</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm mb-2">👩 Mujer portadora:</p>
                  <p className="text-purple-700">X^D X^d</p>
                  <p className="text-xs text-gray-600 mt-1">No afectada pero puede transmitirlo</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-purple-700 mb-4">¿Por qué más hombres?</h4>
              <p className="text-gray-700 mb-4">
                Las enfermedades ligadas al cromosoma X recesivas son más comunes en hombres porque:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Los hombres tienen solo un cromosoma X</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Un solo alelo recesivo causa la enfermedad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Las mujeres necesitan dos copias del alelo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Las mujeres pueden ser portadoras sin estar afectadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pedigree introduction */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 rounded-xl p-8">
          <h3 className="text-2xl text-gray-800 mb-4">Árboles Genealógicos (Pedigrí)</h3>
          <p className="text-gray-700 mb-6">
            Los árboles genealógicos son diagramas que muestran las relaciones familiares y la
            transmisión de caracteres hereditarios a través de las generaciones.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-purple-700 mb-4">Símbolos Básicos</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-700">Hombre no afectado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-400 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-700">Mujer no afectada</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-700">Hombre afectado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-700 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-700">Mujer afectada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key concept */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
          <h3 className="text-xl mb-3">🔑 Concepto Clave</h3>
          <p>
            Conocer los diferentes patrones de herencia es fundamental para comprender cómo se transmiten
            las enfermedades genéticas, predecir riesgos en las familias y tomar decisiones informadas
            en el asesoramiento genético.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
