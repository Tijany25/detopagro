import React from 'react';

interface TextAreaInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const TextAreaInputField: React.FC<TextAreaInputFieldProps> = ({ label, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={label}>
        {label}
      </label>
      <textarea
        className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-500 ${
          error ? 'border-red-500' : ''
        }`}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaInputField;
