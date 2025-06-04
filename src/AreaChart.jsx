import React from 'react';

const AreaChart = ({ data }) => {
  const width = 1600;
  const height = 128;
  const padding = 2;

  if (!data || data.length < 2) {
    return (
      <div className="w-32 h-8 ml-2 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
        Collecting data...
      </div>
    );
  }

  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue || 1;

  const points = data
    .map((value, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="ml-2 relative" title={`Min: ${minValue.toFixed(2)}, Max: ${maxValue.toFixed(2)}`}>
      <svg width={width} height={height} className="border border-gray-200 rounded bg-gray-100">
        <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default AreaChart;
