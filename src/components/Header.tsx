import { Dna } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Dna className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl">Genética y Herencia</h1>
            <p className="text-purple-100 text-sm">Recurso Educativo Digital - Modelo Margarita</p>
          </div>
        </div>
      </div>
    </header>
  );
}
