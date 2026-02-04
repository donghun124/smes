
import React, { useState } from 'react';
import { ManualSection } from '../types';

interface SidebarProps {
  data: ManualSection[];
  activeId: string;
  onSelect: (section: ManualSection) => void;
}

const SidebarItem: React.FC<{
  item: ManualSection;
  activeId: string;
  onSelect: (section: ManualSection) => void;
  depth: number;
}> = ({ item, activeId, onSelect, depth }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="select-none">
      <div
        onClick={() => onSelect(item)}
        className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors group ${
          isActive 
            ? 'bg-blue-50 text-blue-700 font-semibold' 
            : 'hover:bg-gray-100 text-gray-700'
        }`}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
      >
        {hasChildren ? (
          <button 
            onClick={toggleOpen}
            className="mr-2 p-1 hover:bg-gray-200 rounded text-gray-400 group-hover:text-gray-600 transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div className="w-5" />
        )}
        <span className="text-sm truncate">{item.title}</span>
      </div>

      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              activeId={activeId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ data, activeId, onSelect }) => {
  return (
    <nav className="h-full overflow-y-auto py-6 px-4">
      <div className="mb-6 px-3">
        <h1 className="text-xl font-bold text-gray-900">SMES Manual</h1>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">ENGSOFT SMES 따라하기</p>
      </div>
      <div className="space-y-1">
        {data.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            activeId={activeId}
            onSelect={onSelect}
            depth={0}
          />
        ))}
      </div>
    </nav>
  );
};
