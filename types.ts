
export interface ManualSection {
  id: string;
  title: string;
  level: number;
  content?: ManualContent[];
  children?: ManualSection[];
}

export interface ManualContent {
  type: 'text' | 'image' | 'list' | 'note' | 'form' | 'button' | 'table' | 'step' | 'ui-preview';
  value: string | string[] | FormField[] | ButtonConfig | TableConfig | StepGuide | UIPreview;
  caption?: string;
}

export interface FormField {
  label: string;
  type: 'text' | 'password' | 'select' | 'checkbox' | 'number';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  value?: string;
}

export interface ButtonConfig {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  icon?: string;
  position?: string;
}

export interface TableConfig {
  headers: string[];
  rows: string[][];
  actions?: string[];
}

export interface StepGuide {
  title: string;
  steps: string[];
  highlights?: { step: number; description: string }[];
}

export interface UIPreview {
  title: string;
  description?: string;
  components: (FormField | ButtonConfig)[];
  layout?: 'form' | 'table' | 'mixed';
}
