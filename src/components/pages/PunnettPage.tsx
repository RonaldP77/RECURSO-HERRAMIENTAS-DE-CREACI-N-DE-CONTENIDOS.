import { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { Grid, Calculator } from 'lucide-react';

interface PunnettPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function PunnettPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: PunnettPageProps) {
  const [parent1, setParent1] = useState('Aa');
  const [parent2, setParent2] = useState('Aa');

  // Calculate Punnett square results
  const calculatePunnett = () => {
    const alleles1 = parent1.split('');
    const alleles2 = parent2.split('');
    
    return [
      [alleles1[0] + alleles2[0], alleles1[0] + alleles2[1]],
      [alleles1[1] + alleles2[0], alleles1[1] + alleles2[1]],
    ];
  };

  const normalizeGenotype = (genotype: string) => {
    const sorted = genotype.split('').sort((a, b) => {
      if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
      if (a === a.toLowerCase() && b === b.toUpperCase()) return 1;
      return 0;
    }).join('');
    return sorted;
  };

  const results = calculatePunnett();
  const flatResults = results.flat().map(normalizeGenotype);
  
  // Count genotypes
  const genotypeCounts: Record<string, number> = {};
  flatResults.forEach(genotype => {
    genotypeCounts[genotype] = (genotypeCounts[genotype] || 0) + 1;
  });

  return (
    <PageLayout
      title="El Cuadro de Punnett"
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
            El <strong>Cuadro de Punnett</strong> es una herramienta gráfica inventada por el genetista
            Reginald Punnett que permite predecir todas las combinaciones posibles de alelos en la
            descendencia de un cruce genético.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Grid className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl text-gray-800">¿Cómo funciona?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="text-purple-700 mb-3">Identifica los gametos</h3>
              <p className="text-gray-700">
                Determina qué alelos puede aportar cada progenitor. Un individuo Aa produce
                gametos A y a.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="text-blue-700 mb-3">Crea la tabla</h3>
              <p className="text-gray-700">
                Coloca los gametos de un progenitor en las columnas y los del otro en las filas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="text-green-700 mb-3">Combina los alelos</h3>
              <p className="text-gray-700">
                Combina los alelos de cada fila y columna para obtener los genotipos de la descendencia.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">4️⃣</div>
              <h3 className="text-pink-700 mb-3">Calcula probabilidades</h3>
              <p className="text-gray-700">
                Cuenta cuántas veces aparece cada genotipo para determinar las proporciones.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Punnett Square */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Calculadora Interactiva</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
            {/* Parent selection */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 mb-2">Progenitor 1:</label>
                <select
                  value={parent1}
                  onChange={(e) => setParent1(e.target.value)}
                  className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                >
                  <option value="AA">AA (Homocigoto dominante)</option>
                  <option value="Aa">Aa (Heterocigoto)</option>
                  <option value="aa">aa (Homocigoto recesivo)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Progenitor 2:</label>
                <select
                  value={parent2}
                  onChange={(e) => setParent2(e.target.value)}
                  className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="AA">AA (Homocigoto dominante)</option>
                  <option value="Aa">Aa (Heterocigoto)</option>
                  <option value="aa">aa (Homocigoto recesivo)</option>
                </select>
              </div>
            </div>

            {/* Punnett Square Display */}
            <div className="max-w-md mx-auto mb-8">
              <div className="text-center mb-4">
                <p className="text-gray-700">
                  Cruce: <span className="text-purple-700">{parent1}</span> × <span className="text-blue-700">{parent2}</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* Top-left empty cell */}
                <div className="bg-gray-100 p-4 rounded-lg"></div>
                
                {/* Column headers (gametes from parent 2) */}
                <div className="bg-blue-200 p-4 rounded-lg text-center font-semibold">
                  {parent2[0]}
                </div>
                <div className="bg-blue-200 p-4 rounded-lg text-center font-semibold">
                  {parent2[1]}
                </div>

                {/* First row */}
                <div className="bg-purple-200 p-4 rounded-lg text-center font-semibold">
                  {parent1[0]}
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-400">
                  {results[0][0]}
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-400">
                  {results[0][1]}
                </div>

                {/* Second row */}
                <div className="bg-purple-200 p-4 rounded-lg text-center font-semibold">
                  {parent1[1]}
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-400">
                  {results[1][0]}
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-400">
                  {results[1][1]}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl text-gray-800 mb-4">Resultados del Cruce:</h3>
              
              <div className="space-y-3 mb-6">
                {Object.entries(genotypeCounts).map(([genotype, count]) => {
                  const percentage = (count / 4) * 100;
                  return (
                    <div key={genotype} className="bg-white rounded-lg p-4 shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-700">{genotype}</span>
                        <span className="text-gray-700">
                          {count}/4 = {percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="text-purple-700 mb-3">Interpretación Fenotípica:</h4>
                <p className="text-gray-700 text-sm">
                  Asumiendo que A es dominante sobre a:
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  {Object.keys(genotypeCounts).filter(g => g.includes('A')).length > 0 && (
                    <div className="flex items-center justify-between">
                      <span>Fenotipo dominante (AA o Aa):</span>
                      <span className="text-purple-700">
                        {((Object.entries(genotypeCounts)
                          .filter(([g]) => g.includes('A'))
                          .reduce((sum, [_, count]) => sum + count, 0) / 4) * 100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                  {genotypeCounts['aa'] && (
                    <div className="flex items-center justify-between">
                      <span>Fenotipo recesivo (aa):</span>
                      <span className="text-blue-700">
                        {((genotypeCounts['aa'] / 4) * 100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common ratios */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl text-gray-800 mb-6">Proporciones Clásicas de Mendel</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-green-700 mb-3">Proporción 3:1</h4>
              <p className="text-gray-700 text-sm mb-3">
                Cruce: Aa × Aa
              </p>
              <p className="text-gray-600 text-sm">
                75% fenotipo dominante<br />
                25% fenotipo recesivo
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Segunda Ley de Mendel
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-blue-700 mb-3">Proporción 1:2:1</h4>
              <p className="text-gray-700 text-sm mb-3">
                Cruce: Aa × Aa (genotípica)
              </p>
              <p className="text-gray-600 text-sm">
                25% AA<br />
                50% Aa<br />
                25% aa
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Distribución genotípica
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-purple-700 mb-3">Proporción 1:1</h4>
              <p className="text-gray-700 text-sm mb-3">
                Cruce: Aa × aa
              </p>
              <p className="text-gray-600 text-sm">
                50% fenotipo dominante<br />
                50% fenotipo recesivo
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Cruce de prueba
              </div>
            </div>
          </div>
        </div>

        {/* Practice tip */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl text-yellow-800 mb-3">💡 Consejo Práctico</h3>
          <p className="text-gray-700">
            Para verificar si has completado correctamente un cuadro de Punnett, asegúrate de que:
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">✓</span>
              <span>Todos los gametos estén representados en filas y columnas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">✓</span>
              <span>Cada celda contenga exactamente dos alelos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">✓</span>
              <span>Las proporciones sumen 100% (o 4/4)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">✓</span>
              <span>Los alelos dominantes se escriban con mayúsculas</span>
            </li>
          </ul>
        </div>

        {/* Key concept */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
          <h3 className="text-xl mb-3">🔑 Concepto Clave</h3>
          <p>
            El cuadro de Punnett es una herramienta fundamental en genética que permite visualizar
            y calcular las probabilidades de heredar diferentes combinaciones de alelos. Es especialmente
            útil para entender cómo se transmiten las características de padres a hijos y predecir
            el riesgo de enfermedades genéticas.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
