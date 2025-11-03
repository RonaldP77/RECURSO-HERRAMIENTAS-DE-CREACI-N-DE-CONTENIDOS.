import { PageLayout } from '../PageLayout';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BookOpen, Layers, Eye } from 'lucide-react';

interface GenesPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function GenesPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: GenesPageProps) {
  return (
    <PageLayout
      title="Genes y Cromosomas"
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
            Los <strong>genes</strong> son segmentos de ADN que contienen las instrucciones para
            fabricar proteínas. Los genes están organizados en estructuras llamadas <strong>cromosomas</strong>,
            que se encuentran en el núcleo de las células.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1705256811175-b1e3398d50e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5ldGljcyUyMGNocm9tb3NvbWUlMjBiaW9sb2d5fGVufDF8fHx8MTc2MjEzNzI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cromosomas y estructura genética"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Genes section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl text-gray-800">¿Qué es un Gen?</h2>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Un gen es una unidad básica de herencia que:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span className="text-gray-700">Codifica información para producir proteínas específicas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span className="text-gray-700">Se transmite de padres a hijos durante la reproducción</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span className="text-gray-700">Determina características específicas del organismo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span className="text-gray-700">Puede tener diferentes versiones llamadas alelos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alelos */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <h3 className="text-xl text-purple-700 mb-4">Alelos</h3>
            <p className="text-gray-700 mb-4">
              Los <strong>alelos</strong> son las diferentes versiones o formas que puede tener un gen.
              Por ejemplo, el gen del color de ojos puede tener alelos para ojos marrones, azules o verdes.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Gen del color de flor en guisantes
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Alelo para flores púrpura (dominante)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full"></div>
                  <span className="text-gray-700">Alelo para flores blancas (recesivo)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <h3 className="text-xl text-blue-700 mb-4">Cromosomas</h3>
            <p className="text-gray-700 mb-4">
              Los <strong>cromosomas</strong> son estructuras formadas por ADN enrollado alrededor
              de proteínas llamadas histonas. Contienen muchos genes organizados linealmente.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>En humanos:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 46 cromosomas en total (23 pares)</li>
                <li>• 44 autosomas (cromosomas no sexuales)</li>
                <li>• 2 cromosomas sexuales (XX o XY)</li>
                <li>• Aproximadamente 20,000-25,000 genes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Genotype vs Phenotype */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Genotipo vs Fenotipo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-8">
              <h3 className="text-2xl mb-4">Genotipo</h3>
              <p className="mb-4">
                La información genética completa que posee un organismo. Es el conjunto de todos
                sus genes y alelos.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm mb-2">Ejemplos:</p>
                <ul className="space-y-1 text-sm">
                  <li>• AA (homocigoto dominante)</li>
                  <li>• Aa (heterocigoto)</li>
                  <li>• aa (homocigoto recesivo)</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-purple-100">
                ⚠️ No es visible directamente
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6" />
                <h3 className="text-2xl">Fenotipo</h3>
              </div>
              <p className="mb-4">
                Las características observables de un organismo, resultado de la expresión
                del genotipo y la influencia del ambiente.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm mb-2">Ejemplos:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Color de ojos</li>
                  <li>• Altura</li>
                  <li>• Color del cabello</li>
                  <li>• Grupo sanguíneo</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-blue-100">
                ✓ Observable y medible
              </div>
            </div>
          </div>
        </div>

        {/* Dominance */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8">
          <h3 className="text-2xl text-gray-800 mb-6">Dominancia y Recesividad</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl text-purple-700 mb-3">Alelo Dominante</h4>
              <p className="text-gray-700 mb-4">
                Se expresa en el fenotipo incluso cuando está presente un solo alelo (heterocigoto).
                Se representa con letra mayúscula.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Ejemplo:</strong> En guisantes, el alelo para semillas lisas (R) es dominante
                  sobre el alelo para semillas rugosas (r).
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p>RR = Semillas lisas</p>
                  <p>Rr = Semillas lisas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl text-blue-700 mb-3">Alelo Recesivo</h4>
              <p className="text-gray-700 mb-4">
                Solo se expresa en el fenotipo cuando están presentes dos copias del alelo (homocigoto).
                Se representa con letra minúscula.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Ejemplo:</strong> El alelo para semillas rugosas (r) solo se expresa cuando
                  no hay alelos dominantes presentes.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p>rr = Semillas rugosas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key concept */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
          <h3 className="text-xl mb-3">🔑 Concepto Clave</h3>
          <p>
            Cada individuo hereda dos alelos para cada gen (uno de cada progenitor). La combinación
            de estos alelos (genotipo) determina las características observables (fenotipo), pero
            el ambiente también puede influir en cómo se expresan estas características.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
