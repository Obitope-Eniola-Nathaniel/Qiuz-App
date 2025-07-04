// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, color = 'blue' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600 text-white px-4 py-2 rounded hover:bg-${color}-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
