import { PageLayout } from '../PageLayout';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FlipCard } from '../FlipCard';
import { Atom, Dna } from 'lucide-react';

interface DNAPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function DNAPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: DNAPageProps) {
  const nucleotides = [
    {
      name: 'Adenina (A)',
      pair: 'Timina (T)',
      color: 'from-red-400 to-red-600',
      description: 'Base nitrogenada púrica que se empareja con la timina mediante dos puentes de hidrógeno.',
    },
    {
      name: 'Timina (T)',
      pair: 'Adenina (A)',
      color: 'from-orange-400 to-orange-600',
      description: 'Base nitrogenada pirimidínica que se empareja con la adenina.',
    },
    {
      name: 'Citosina (C)',
      pair: 'Guanina (G)',
      color: 'from-blue-400 to-blue-600',
      description: 'Base nitrogenada pirimidínica que se empareja con la guanina mediante tres puentes de hidrógeno.',
    },
    {
      name: 'Guanina (G)',
      pair: 'Citosina (C)',
      color: 'from-green-400 to-green-600',
      description: 'Base nitrogenada púrica que se empareja con la citosina.',
    },
  ];

  return (
    <PageLayout
      title="El ADN: La Molécula de la Vida"
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
            El <strong>ADN (ácido desoxirribonucleico)</strong> es la molécula que almacena toda la
            información genética de los seres vivos. Su estructura en forma de doble hélice fue descubierta
            por James Watson y Francis Crick en 1953.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560851552-233ecb65e276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBkb3VibGUlMjBoZWxpeCUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjIxMzcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Estructura del ADN en doble hélice"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Structure section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Atom className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Estructura del ADN</h2>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              El ADN está formado por dos cadenas que se enrollan formando una doble hélice.
              Cada cadena está compuesta por:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-purple-700 mb-2">Azúcar (Desoxirribosa)</h3>
                <p className="text-sm text-gray-600">Forma el esqueleto de la cadena</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-blue-700 mb-2">Grupo Fosfato</h3>
                <p className="text-sm text-gray-600">Une los azúcares entre sí</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-pink-700 mb-2">Bases Nitrogenadas</h3>
                <p className="text-sm text-gray-600">Contienen la información genética</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bases nitrogenadas */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Dna className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Las Bases Nitrogenadas</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Las bases nitrogenadas se emparejan de forma específica siguiendo la <strong>regla de
            complementariedad de bases</strong>. Haz clic en cada tarjeta para conocer más:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {nucleotides.map((nucleotide, index) => (
              <FlipCard
                key={index}
                front={
                  <div className={`h-full flex flex-col items-center justify-center bg-gradient-to-br ${nucleotide.color} text-white p-6 rounded-xl`}>
                    <div className="text-6xl mb-4">{nucleotide.name[0]}</div>
                    <h3 className="text-2xl text-center">{nucleotide.name}</h3>
                  </div>
                }
                back={
                  <div className="h-full bg-white border-4 border-gray-200 p-6 rounded-xl flex flex-col justify-center">
                    <h4 className="text-xl text-purple-700 mb-3">{nucleotide.name}</h4>
                    <p className="text-sm text-gray-700 mb-4">{nucleotide.description}</p>
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-3">
                      <p className="text-sm text-center">
                        <strong>Se empareja con:</strong><br />
                        {nucleotide.pair}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Complementarity rule */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8">
          <h3 className="text-2xl text-gray-800 mb-4">Regla de Complementariedad</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center gap-8 text-2xl">
                <span className="text-red-600">A</span>
                <span className="text-gray-400">↔</span>
                <span className="text-orange-600">T</span>
              </div>
              <p className="text-center text-gray-600 mt-3">Adenina con Timina (2 puentes H)</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center gap-8 text-2xl">
                <span className="text-blue-600">C</span>
                <span className="text-gray-400">↔</span>
                <span className="text-green-600">G</span>
              </div>
              <p className="text-center text-gray-600 mt-3">Citosina con Guanina (3 puentes H)</p>
            </div>
          </div>
        </div>

        {/* Interactive exercise */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl text-yellow-800 mb-3">🧪 Ejercicio Rápido</h3>
          <p className="text-gray-700 mb-4">
            Si una cadena de ADN tiene la secuencia: <strong className="text-purple-700">A-T-C-G-G-A</strong>
          </p>
          <p className="text-gray-700">
            ¿Cuál sería la secuencia complementaria?
          </p>
          <details className="mt-4">
            <summary className="cursor-pointer text-purple-700 hover:text-purple-800">
              Ver respuesta
            </summary>
            <div className="mt-3 p-4 bg-white rounded-lg">
              <p className="text-gray-700">
                La secuencia complementaria sería: <strong className="text-blue-700">T-A-G-C-C-T</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Recuerda: A se empareja con T, y C se empareja con G.
              </p>
            </div>
          </details>
        </div>

        {/* Key concept */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
          <h3 className="text-xl mb-3">🔑 Concepto Clave</h3>
          <p>
            La estructura de doble hélice del ADN permite que la molécula se replique de manera precisa.
            Cada cadena sirve como molde para crear una nueva cadena complementaria, asegurando que la
            información genética se transmita fielmente de célula a célula.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
