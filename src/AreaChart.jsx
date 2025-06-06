import React, { useState, useRef, useLayoutEffect } from 'react';

const AreaChart = ({ data, width: propWidth }) => {
  const containerRef = useRef(null);
  const [computedWidth, setComputedWidth] = useState(propWidth || 0);
  const height = 128;
  const padding = 2;

  useLayoutEffect(() => {
    if (propWidth) {
      setComputedWidth(propWidth);
      return;
    }

    const updateWidth = () => {
      if (containerRef.current) {
        setComputedWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [propWidth]);

  if (!data || data.length < 2 || computedWidth === 0) {
    return (
      <div
        ref={containerRef}
        className="w-full h-8 ml-2 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400"
      >
        Collecting data...
      </div>
    );
  }

  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue || 1;

  const points = data
    .map((value, index) => {
      const x =
        padding + (index / (data.length - 1)) * (computedWidth - 2 * padding);
      const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div
      ref={containerRef}
      className="ml-2 relative"
      title={`Min: ${minValue.toFixed(2)}, Max: ${maxValue.toFixed(2)}`}
    >
      <svg width={computedWidth} height={height} className="border border-gray-200 rounded bg-gray-100">
        <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default AreaChart;
