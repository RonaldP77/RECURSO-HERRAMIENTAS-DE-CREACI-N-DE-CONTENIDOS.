import { PageLayout } from '../PageLayout';
import { ExternalLink, BookOpen, Video, FileText, Globe, Download, Award } from 'lucide-react';

interface ResourcesPageProps {
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ResourcesPage({ onComplete, isCompleted, onNext, onPrev, hasNext, hasPrev }: ResourcesPageProps) {
  const resources = [
    {
      title: 'Libros y Textos Recomendados',
      icon: BookOpen,
      color: 'purple',
      items: [
        {
          name: 'Principios de Genética - Snustad & Simmons',
          description: 'Texto universitario completo sobre genética clásica y molecular.',
          url: '#',
        },
        {
          name: 'Genética Humana - Strachan & Read',
          description: 'Enfoque en genética humana y aplicaciones médicas.',
          url: '#',
        },
        {
          name: 'Genetics: Analysis of Genes and Genomes - Hartl',
          description: 'Análisis profundo de genes y genomas.',
          url: '#',
        },
      ],
    },
    {
      title: 'Videos y Tutoriales',
      icon: Video,
      color: 'blue',
      items: [
        {
          name: 'Khan Academy - Genética',
          description: 'Serie completa de videos sobre genética desde conceptos básicos hasta avanzados.',
          url: 'https://www.khanacademy.org/science/biology/classical-genetics',
        },
        {
          name: 'Crash Course Biology - Genetics',
          description: 'Videos educativos entretenidos sobre genética.',
          url: '#',
        },
        {
          name: 'DNA Learning Center',
          description: 'Animaciones y videos sobre ADN y herencia.',
          url: '#',
        },
      ],
    },
    {
      title: 'Sitios Web Educativos',
      icon: Globe,
      color: 'green',
      items: [
        {
          name: 'National Human Genome Research Institute',
          description: 'Recursos sobre el genoma humano y genética.',
          url: 'https://www.genome.gov/',
        },
        {
          name: 'Learn.Genetics - University of Utah',
          description: 'Recursos interactivos sobre genética y herencia.',
          url: 'https://learn.genetics.utah.edu/',
        },
        {
          name: 'Genetics Home Reference - NIH',
          description: 'Información sobre condiciones genéticas.',
          url: '#',
        },
      ],
    },
  ];

  const glossary = [
    { term: 'ADN', definition: 'Ácido desoxirribonucleico, molécula que contiene la información genética.' },
    { term: 'Alelo', definition: 'Cada una de las formas alternativas que puede tener un gen.' },
    { term: 'Cromosoma', definition: 'Estructura que contiene el ADN enrollado con proteínas.' },
    { term: 'Dominante', definition: 'Alelo que se expresa en el fenotipo en heterocigotos.' },
    { term: 'Fenotipo', definition: 'Características observables de un organismo.' },
    { term: 'Gameto', definition: 'Célula reproductiva (óvulo o espermatozoide).' },
    { term: 'Gen', definition: 'Unidad básica de herencia que codifica una característica.' },
    { term: 'Genotipo', definition: 'Conjunto de genes que posee un organismo.' },
    { term: 'Herencia', definition: 'Transmisión de características de padres a hijos.' },
    { term: 'Heterocigoto', definition: 'Individuo con dos alelos diferentes para un gen (Aa).' },
    { term: 'Homocigoto', definition: 'Individuo con dos alelos idénticos para un gen (AA o aa).' },
    { term: 'Meiosis', definition: 'División celular que produce gametos con la mitad de cromosomas.' },
    { term: 'Recesivo', definition: 'Alelo que solo se expresa en homocigosis.' },
    { term: 'Cariotipo', definition: 'Conjunto completo de cromosomas ordenados de un organismo.' },
    { term: 'Codominancia', definition: 'Ambos alelos se expresan simultáneamente en el fenotipo.' },
    { term: 'Mutación', definition: 'Cambio en la secuencia del ADN.' },
  ];

  return (
    <PageLayout
      title="Recursos Adicionales"
      onComplete={onComplete}
      isCompleted={isCompleted}
      onNext={onNext}
      onPrev={onPrev}
      hasNext={hasNext}
      hasPrev={hasPrev}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-xl p-8 text-center">
          <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl text-gray-800 mb-3">¡Felicitaciones!</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Has completado el curso de Genética y Herencia. Estos recursos adicionales te ayudarán
            a profundizar tus conocimientos y continuar aprendiendo.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-6">
          {resources.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              purple: 'bg-purple-50 border-purple-300 text-purple-700',
              blue: 'bg-blue-50 border-blue-300 text-blue-700',
              green: 'bg-green-50 border-green-300 text-green-700',
            };

            return (
              <div key={index} className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl text-gray-800">{category.title}</h2>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg text-gray-800 group-hover:text-purple-700 transition-colors mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Glossary */}
        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl text-gray-800">Glosario Completo de Términos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {glossary.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg text-purple-700 mb-2">{item.term}</h3>
                <p className="text-sm text-gray-700">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Materials */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-8 h-8" />
            <h2 className="text-2xl">Material Descargable</h2>
          </div>
          <p className="mb-6">
            Descarga estos materiales complementarios para estudiar sin conexión y tener siempre a mano.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-4 rounded-lg text-left">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Guía de Estudio Completa</div>
                  <div className="text-sm text-purple-100">PDF - 2.5 MB</div>
                </div>
              </div>
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-4 rounded-lg text-left">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Plantillas de Cuadros de Punnett</div>
                  <div className="text-sm text-purple-100">PDF - 500 KB</div>
                </div>
              </div>
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-4 rounded-lg text-left">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Ejercicios Adicionales</div>
                  <div className="text-sm text-purple-100">PDF - 1.8 MB</div>
                </div>
              </div>
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-4 rounded-lg text-left">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Resumen de Leyes de Mendel</div>
                  <div className="text-sm text-purple-100">PDF - 800 KB</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl text-gray-800 mb-6">Próximos Pasos en tu Aprendizaje</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-lg text-purple-700 mb-2">Genética Molecular</h3>
              <p className="text-sm text-gray-600">
                Profundiza en la estructura del ADN, replicación, transcripción y traducción.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg text-blue-700 mb-2">Biotecnología</h3>
              <p className="text-sm text-gray-600">
                Aprende sobre ingeniería genética, clonación y aplicaciones de la genética.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg text-green-700 mb-2">Genética de Poblaciones</h3>
              <p className="text-sm text-gray-600">
                Estudia cómo cambian las frecuencias génicas en las poblaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Final message */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200 text-center">
          <h3 className="text-2xl text-gray-800 mb-4">¡Gracias por completar este curso!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Esperamos que este recurso educativo haya sido útil para comprender los fundamentos
            de la genética y la herencia. Recuerda que el aprendizaje es un proceso continuo,
            ¡sigue explorando y descubriendo!
          </p>
          <div className="text-sm text-gray-500">
            Recurso educativo creado con eXeLearning & LUMI<br />
            Basado en el Modelo Margarita
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
