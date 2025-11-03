import { SectionCard } from '../SectionCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PlayCircle } from 'lucide-react';

interface IntroductionProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function Introduction({ onComplete, isCompleted }: IntroductionProps) {
  return (
    <SectionCard
      title="Introducción a la Genética y Herencia"
      onComplete={onComplete}
      isCompleted={isCompleted}
    >
      <div className="prose max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed">
          La genética es la rama de la biología que estudia cómo se transmiten las características
          hereditarias de padres a hijos. Este recurso educativo te guiará a través de los
          conceptos fundamentales de la genética y los mecanismos de herencia biológica.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl text-purple-700 mb-3">¿Qué es la Genética?</h3>
          <p className="text-gray-700">
            La genética estudia los genes, la variación genética y la herencia en los organismos.
            Es fundamental para comprender cómo funciona la vida a nivel molecular.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl text-blue-700 mb-3">¿Por qué es importante?</h3>
          <p className="text-gray-700">
            Entender la genética nos permite comprender enfermedades hereditarias, la evolución,
            la biodiversidad y aplicar este conocimiento en medicina y biotecnología.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 mt-6">
        <div className="flex items-start gap-4">
          <PlayCircle className="w-12 h-12 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl text-purple-700 mb-2">Video Introductorio</h3>
            <p className="text-gray-700 mb-4">
              Descubre los conceptos básicos de la genética en este video introductorio.
            </p>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-600">Video: Introducción a la Genética</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <h3 className="text-xl text-yellow-800 mb-2">💡 ¿Sabías que...?</h3>
        <p className="text-gray-700">
          Los seres humanos compartimos aproximadamente el 99.9% de nuestro ADN con otros humanos,
          y cerca del 98.8% con los chimpancés, nuestros parientes evolutivos más cercanos.
        </p>
      </div>
    </SectionCard>
  );
}
