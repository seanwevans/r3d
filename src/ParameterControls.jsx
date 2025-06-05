import React from 'react';

const ParameterControls = ({
  redSpeed,
  setRedSpeed,
  greenSpeed,
  setGreenSpeed,
  blueSpeed,
  setBlueSpeed,
  redTrailLength,
  setRedTrailLength,
  greenTrailLength,
  setGreenTrailLength,
  blueTrailLength,
  setBlueTrailLength,
  mainSphereRotation,
  setMainSphereRotation,
  checkerSize,
  setCheckerSize,
}) => (
  <div className="mb-4 p-2 bg-gray-100 rounded-lg">
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-1 p-1 bg-red-50 border border-red-200 rounded">
        <span className="text-xs font-medium text-red-700 mr-1">Red:</span>
        <div className="flex items-center">
          <span className="text-xs">Speed</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setRedSpeed(redSpeed - 0.1)}
            >
              -
            </button>
            <input
              type="number"
              min="-10"
              max="10"
              step="0.1"
              value={redSpeed}
              onChange={(e) => setRedSpeed(parseFloat(e.target.value))}
              className="w-10 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setRedSpeed(redSpeed + 0.1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center ml-1">
          <span className="text-xs">Trail</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setRedTrailLength(Math.max(10, redTrailLength - 10))}
            >
              -
            </button>
            <input
              type="number"
              min="10"
              max="500"
              step="10"
              value={redTrailLength}
              onChange={(e) => setRedTrailLength(parseInt(e.target.value))}
              className="w-12 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setRedTrailLength(Math.min(500, redTrailLength + 10))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 p-1 bg-green-50 border border-green-200 rounded">
        <span className="text-xs font-medium text-green-700 mr-1">Green:</span>
        <div className="flex items-center">
          <span className="text-xs">Speed</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setGreenSpeed(greenSpeed - 0.1)}
            >
              -
            </button>
            <input
              type="number"
              min="-10"
              max="10"
              step="0.1"
              value={greenSpeed}
              onChange={(e) => setGreenSpeed(parseFloat(e.target.value))}
              className="w-10 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setGreenSpeed(greenSpeed + 0.1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center ml-1">
          <span className="text-xs">Trail</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setGreenTrailLength(Math.max(10, greenTrailLength - 10))}
            >
              -
            </button>
            <input
              type="number"
              min="10"
              max="500"
              step="10"
              value={greenTrailLength}
              onChange={(e) => setGreenTrailLength(parseInt(e.target.value))}
              className="w-12 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setGreenTrailLength(Math.min(500, greenTrailLength + 10))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 p-1 bg-blue-50 border border-blue-200 rounded">
        <span className="text-xs font-medium text-blue-700 mr-1">Blue:</span>
        <div className="flex items-center">
          <span className="text-xs">Speed</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setBlueSpeed(blueSpeed - 0.1)}
            >
              -
            </button>
            <input
              type="number"
              min="-10"
              max="10"
              step="0.1"
              value={blueSpeed}
              onChange={(e) => setBlueSpeed(parseFloat(e.target.value))}
              className="w-10 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setBlueSpeed(blueSpeed + 0.1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center ml-1">
          <span className="text-xs">Trail</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setBlueTrailLength(Math.max(10, blueTrailLength - 10))}
            >
              -
            </button>
            <input
              type="number"
              min="10"
              max="500"
              step="10"
              value={blueTrailLength}
              onChange={(e) => setBlueTrailLength(parseInt(e.target.value))}
              className="w-12 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setBlueTrailLength(Math.min(500, blueTrailLength + 10))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 p-1 bg-gray-50 border border-gray-200 rounded">
        <span className="text-xs font-medium mr-1">Main:</span>
        <div className="flex items-center">
          <span className="text-xs">Rot</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setMainSphereRotation(mainSphereRotation - 0.001)}
            >
              -
            </button>
            <input
              type="number"
              min="-0.05"
              max="0.05"
              step="0.001"
              value={mainSphereRotation}
              onChange={(e) => setMainSphereRotation(parseFloat(e.target.value))}
              className="w-14 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setMainSphereRotation(mainSphereRotation + 0.001)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 p-1 bg-gray-50 border border-gray-200 rounded">
        <span className="text-xs font-medium mr-1">Checker:</span>
        <div className="flex items-center">
          <span className="text-xs">Size</span>
          <div className="flex items-center ml-1">
            <button
              className="w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setCheckerSize(Math.max(1, checkerSize - 1))}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="256"
              step="1"
              value={checkerSize}
              onChange={(e) => setCheckerSize(parseInt(e.target.value, 10))}
              className="w-12 h-5 text-xs text-center border-y outline-none"
            />
            <button
              className="w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs"
              onClick={() => setCheckerSize(checkerSize + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ParameterControls;
