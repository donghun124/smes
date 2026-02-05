
import React, { useState } from 'react';
import { ManualSection, FormField, ButtonConfig, TableConfig, UIPreview } from '../types';

interface ContentViewerProps {
  section: ManualSection;
  onSelect?: (section: ManualSection) => void;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ section, onSelect }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  if (!section.content && (!section.children || section.children.length === 0)) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{section.title}</h2>
        <div className="p-8 bg-blue-50 border border-blue-100 rounded-xl text-center">
          <svg className="w-12 h-12 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="text-blue-800 font-medium">이 섹션의 상세 내용이 아직 준비되지 않았습니다.</p>
          <p className="text-blue-600 text-sm mt-1">상단 메뉴나 하위 목차를 확인해주세요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-fadeIn">
      <header className="mb-10 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {section.title}
        </h1>
      </header>

      <div className="prose prose-blue prose-lg max-w-none text-gray-700 space-y-8">
        {section.content?.map((block, idx) => {
          switch (block.type) {
            case 'text':
              return <p key={idx} className="text-lg font-medium text-gray-900">{block.value as string}</p>;
            case 'note':
              return (
                <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-amber-700 leading-relaxed italic">
                        {block.value as string}
                      </p>
                    </div>
                  </div>
                </div>
              );
            case 'list':
              return (
                <ul key={idx} className="list-disc pl-5 space-y-3">
                  {(block.value as string[]).map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              );
            case 'image':
              return (
                <figure key={idx} className="my-8">
                  <div className="flex justify-center">
                    <div className="relative flex justify-center">
                      <img 
                        src={block.value as string} 
                        alt={block.caption || '메뉴얼 이미지'}
                        className="h-auto object-contain"
                        loading="lazy"
                        style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="aspect-video bg-gray-100 flex items-center justify-center p-8"><span class="text-gray-400 text-sm font-medium">이미지를 불러올 수 없습니다</span></div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                  {block.caption && (
                    <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            case 'ui-preview':
              return <UIPreviewComponent key={idx} preview={block.value as UIPreview} />;
            case 'form':
              return <FormPreview key={idx} fields={block.value as FormField[]} />;
            case 'table':
              return <TablePreview key={idx} table={block.value as TableConfig} />;
            case 'button':
              return <ButtonPreview key={idx} button={block.value as ButtonConfig} />;
            default:
              return null;
          }
        })}

        {hasAnyChildren(section) && (
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">하위 목차</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.children?.map(child => (
                <div 
                  key={child.id} 
                  onClick={() => onSelect && onSelect(child)}
                  className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    onSelect ? 'hover:border-blue-400' : ''
                  }`}
                >
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">{child.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 이미지 확대 모달 */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={expandedImage} 
              alt="확대된 메뉴얼 이미지"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

function hasAnyChildren(section: ManualSection): boolean {
  return !!(section.children && section.children.length > 0);
}

// UI Preview Component
const UIPreviewComponent: React.FC<{ preview: UIPreview }> = ({ preview }) => {
  return (
    <div className="my-8 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">{preview.title}</h3>
        {preview.description && (
          <p className="text-sm text-gray-600 mt-1">{preview.description}</p>
        )}
      </div>
      <div className="p-6">
        {preview.layout === 'form' && (
          <div className="space-y-4">
            {(preview.components as FormField[]).map((field, idx) => (
              <div key={idx} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.type === 'text' || field.type === 'password' || field.type === 'number' ? (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      field.required ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-300'
                    }`}
                    disabled
                  />
                ) : field.type === 'select' ? (
                  <select
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      field.required ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-300'
                    }`}
                    disabled
                  >
                    <option value="">선택하세요</option>
                    {field.options?.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      disabled
                    />
                    <span className="ml-2 text-sm text-gray-700">{field.label}</span>
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex gap-2 pt-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                확인
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                취소
              </button>
            </div>
          </div>
        )}
        {preview.layout === 'mixed' && (
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {(preview.components as ButtonConfig[]).map((btn, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    btn.variant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : btn.variant === 'danger'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Form Preview Component
const FormPreview: React.FC<{ fields: FormField[] }> = ({ fields }) => {
  return (
    <div className="my-8 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
      <div className="space-y-4">
        {fields.map((field, idx) => (
          <div key={idx} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className={`w-full px-4 py-2 border rounded-lg ${
                field.required ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-300'
              }`}
              disabled
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Table Preview Component
const TablePreview: React.FC<{ table: TableConfig }> = ({ table }) => {
  return (
    <div className="my-8 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-gray-50">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.actions && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex gap-2">
          {table.actions.map((action, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              disabled
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Button Preview Component
const ButtonPreview: React.FC<{ button: ButtonConfig }> = ({ button }) => {
  return (
    <div className="my-4">
      <button
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
          button.variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : button.variant === 'danger'
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        disabled
      >
        {button.label}
      </button>
    </div>
  );
};
