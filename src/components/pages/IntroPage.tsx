import { PageLayout } from '../PageLayout';
import { Sparkles, Target, BookOpen } from 'lucide-react';

interface IntroPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function IntroPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: IntroPageProps) {
  return (
    <PageLayout
      title="Bienvenido al Curso de Genética y Herencia"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8 text-center">
          <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl text-gray-800 mb-4">
            Descubre los secretos de la herencia biológica
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            En este curso explorarás cómo se transmiten las características de padres a hijos,
            desde el nivel molecular del ADN hasta los patrones de herencia en las familias.
          </p>
        </div>

        {/* What you'll learn */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl text-gray-800">¿Qué aprenderás?</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h4 className="text-lg text-purple-700 mb-3">Conceptos Fundamentales</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Estructura y función del ADN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Genes, alelos y cromosomas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Genotipo y fenotipo</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h4 className="text-lg text-blue-700 mb-3">Leyes de la Herencia</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Las tres leyes de Mendel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Patrones de herencia dominante y recesiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Herencia ligada al sexo</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h4 className="text-lg text-green-700 mb-3">Herramientas Prácticas</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Uso del cuadro de Punnett</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Resolución de problemas genéticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Análisis de árboles genealógicos</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <h4 className="text-lg text-pink-700 mb-3">Aplicaciones Reales</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Genética médica y enfermedades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Biotecnología y agricultura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Evolución y biodiversidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course structure */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8" />
            <h3 className="text-2xl">Estructura del Curso</h3>
          </div>
          <p className="text-purple-100 mb-4">
            Este recurso educativo está organizado siguiendo el Modelo Margarita, una metodología
            que integra objetivos, contenidos, actividades y evaluación de forma coherente.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">9</div>
              <div className="text-sm text-purple-100">Lecciones interactivas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">15+</div>
              <div className="text-sm text-purple-100">Actividades prácticas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">1</div>
              <div className="text-sm text-purple-100">Evaluación final</div>
            </div>
          </div>
        </div>

        {/* Fun fact */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl text-yellow-800 mb-3">💡 Dato Curioso</h3>
          <p className="text-gray-700">
            Si pudieras estirar todo el ADN de una sola célula humana, mediría aproximadamente
            2 metros de largo. ¡Y tienes trillones de células en tu cuerpo!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            ¿Listo para comenzar tu viaje por el mundo de la genética?
          </p>
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Comenzar el Curso →
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
