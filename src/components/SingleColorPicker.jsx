import React from 'react';

export const SingleColorPicker = ({ color, value, onChange }) => {
  const handleColorChange = (e) => {
    const newValue = Math.min(Math.max(Number(e.target.value), 0), 255);
    onChange(newValue);
  };

  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        h
        onChange={handleColorChange}
      />
    </div>
  );
};
