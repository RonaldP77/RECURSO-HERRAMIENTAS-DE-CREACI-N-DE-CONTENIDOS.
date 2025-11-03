import { Check, BookOpen, Target, FileText, Zap, ClipboardCheck, Library } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  component: any;
}

interface SidebarProps {
  sections: Section[];
  currentSection: string;
  completedSections: string[];
  onSectionChange: (sectionId: string) => void;
}

const sectionIcons: Record<string, any> = {
  introduction: BookOpen,
  objectives: Target,
  content: FileText,
  activities: Zap,
  evaluation: ClipboardCheck,
  resources: Library,
};

export function Sidebar({ sections, currentSection, completedSections, onSectionChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 bg-white shadow-lg border-r border-gray-200">
      <nav className="p-4">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Modelo Margarita
        </h2>
        
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = sectionIcons[section.id];
            const isActive = currentSection === section.id;
            const isCompleted = completedSections.includes(section.id);
            
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="relative">
                    <Icon className="w-5 h-5" />
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <span>{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
