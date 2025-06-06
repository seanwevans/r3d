import React, { useState, useEffect } from 'react';
import ThreeDScene from './ThreeDScene.jsx';
import AreaChart from './AreaChart.jsx';
import ParameterControls from './ParameterControls.jsx';

const App = () => {
  const [redSpeed, setRedSpeed] = useState(-1);
  const [greenSpeed, setGreenSpeed] = useState(0.25);
  const [blueSpeed, setBlueSpeed] = useState(4);

  const [redTrailLength, setRedTrailLength] = useState(200);
  const [greenTrailLength, setGreenTrailLength] = useState(800);
  const [blueTrailLength, setBlueTrailLength] = useState(50);

  const [mainSphereRotation, setMainSphereRotation] = useState(0.005);
  const [checkerSize] = useState(64);
  const [showControls, setShowControls] = useState(true);
  const [triangleArea, setTriangleArea] = useState(0);

  const [areaHistory, setAreaHistory] = useState([]);
  const maxHistoryPoints = 2048;

  useEffect(() => {
    setAreaHistory((prevHistory) => {
      const newHistory = [...prevHistory, triangleArea];
      return newHistory.length > maxHistoryPoints
        ? newHistory.slice(newHistory.length - maxHistoryPoints)
        : newHistory;
    });
  }, [triangleArea]);

  const sceneParams = {
    redSpeed,
    greenSpeed,
    blueSpeed,
    redTrailLength,
    greenTrailLength,
    blueTrailLength,
    mainSphereRotation,
    onTriangleAreaUpdate: setTriangleArea,
  };

  return (
    <div className="flex flex-col p-4 w-screen h-screen bg-gray-200 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium flex items-center">
            <AreaChart data={areaHistory} />
          </div>
          <span>
            Triangle Area: <span className="text-blue-600">{triangleArea.toFixed(3)}</span>
          </span>
        </div>
        <button
          onClick={() => setShowControls(prev => !prev)}
          className="p-1 text-xs bg-gray-300 rounded"
        >
          {showControls ? 'Hide' : 'Show'} Controls
        </button>
      </div>

      <div className="h-screen relative">
        <ThreeDScene params={sceneParams} />
      </div>

      {showControls && (
        <ParameterControls
          redSpeed={redSpeed}
          setRedSpeed={setRedSpeed}
          greenSpeed={greenSpeed}
          setGreenSpeed={setGreenSpeed}
          blueSpeed={blueSpeed}
          setBlueSpeed={setBlueSpeed}
          redTrailLength={redTrailLength}
          setRedTrailLength={setRedTrailLength}
          greenTrailLength={greenTrailLength}
          setGreenTrailLength={setGreenTrailLength}
          blueTrailLength={blueTrailLength}
          setBlueTrailLength={setBlueTrailLength}
          mainSphereRotation={mainSphereRotation}
          setMainSphereRotation={setMainSphereRotation}
          checkerSize={checkerSize}
          setCheckerSize={setCheckerSize}
        />
      )}

    </div>
  );
};

export default App;
