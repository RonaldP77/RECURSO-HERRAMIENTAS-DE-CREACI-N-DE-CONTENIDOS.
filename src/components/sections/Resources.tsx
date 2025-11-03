import { SectionCard } from '../SectionCard';
import { ExternalLink, BookOpen, Video, FileText, Globe } from 'lucide-react';

interface ResourcesProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function Resources({ onComplete, isCompleted }: ResourcesProps) {
  const resources = [
    {
      title: 'Recursos Adicionales',
      icon: BookOpen,
      color: 'purple',
      items: [
        {
          name: 'Khan Academy - Genética',
          description: 'Curso completo de genética con videos y ejercicios interactivos.',
          url: '#',
        },
        {
          name: 'National Human Genome Research Institute',
          description: 'Recursos educativos sobre genética y genómica.',
          url: '#',
        },
        {
          name: 'Genetics Home Reference',
          description: 'Información sobre condiciones genéticas y genes.',
          url: '#',
        },
      ],
    },
    {
      title: 'Videos Educativos',
      icon: Video,
      color: 'blue',
      items: [
        {
          name: 'ADN y Replicación',
          description: 'Explica cómo funciona el ADN y su replicación.',
          url: '#',
        },
        {
          name: 'Leyes de Mendel Explicadas',
          description: 'Video detallado sobre las tres leyes de Mendel.',
          url: '#',
        },
        {
          name: 'Cuadro de Punnett Tutorial',
          description: 'Cómo usar el cuadro de Punnett paso a paso.',
          url: '#',
        },
      ],
    },
    {
      title: 'Herramientas Interactivas',
      icon: Globe,
      color: 'green',
      items: [
        {
          name: 'Simulador de Cruces Genéticos',
          description: 'Herramienta para practicar cruces genéticos.',
          url: '#',
        },
        {
          name: 'Generador de Cuadros de Punnett',
          description: 'Crea cuadros de Punnett automáticamente.',
          url: '#',
        },
        {
          name: 'Explorador del Genoma Humano',
          description: 'Explora el genoma humano de forma interactiva.',
          url: '#',
        },
      ],
    },
  ];

  const glossary = [
    { term: 'ADN', definition: 'Ácido desoxirribonucleico, molécula que contiene la información genética.' },
    { term: 'Cromosoma', definition: 'Estructura que contiene el ADN y las proteínas asociadas.' },
    { term: 'Gameto', definition: 'Célula reproductiva (óvulo o espermatozoide).' },
    { term: 'Herencia', definition: 'Transmisión de características de padres a hijos.' },
    { term: 'Homocigoto', definition: 'Individuo con dos alelos idénticos para un gen.' },
    { term: 'Heterocigoto', definition: 'Individuo con dos alelos diferentes para un gen.' },
    { term: 'Mutación', definition: 'Cambio en la secuencia del ADN.' },
    { term: 'Cariotipo', definition: 'Conjunto completo de cromosomas de un individuo.' },
  ];

  return (
    <SectionCard
      title="Recursos Complementarios"
      onComplete={onComplete}
      isCompleted={isCompleted}
    >
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
        <p className="text-gray-700">
          Estos recursos adicionales te ayudarán a profundizar en los conceptos de genética
          y continuar tu aprendizaje más allá de este módulo.
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
            <div key={index} className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-gray-800 group-hover:text-purple-700 transition-colors mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Glossary */}
      <div className="mt-8 bg-white rounded-lg border-2 border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl text-gray-800">Glosario de Términos</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {glossary.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
              <h4 className="text-purple-700 mb-1">{item.term}</h4>
              <p className="text-sm text-gray-700">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
        <h3 className="text-xl mb-3">Material Descargable</h3>
        <p className="mb-4">
          Descarga estos materiales complementarios para estudiar sin conexión:
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            📄 Guía de Estudio (PDF)
          </button>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            📊 Plantillas de Cuadros de Punnett
          </button>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            📝 Ejercicios Adicionales
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
