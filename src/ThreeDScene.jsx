import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDScene = ({ params }) => {
  const mountRef = useRef(null);

  const {
    redSpeed = 1.2,
    greenSpeed = 0.3,
    blueSpeed = 4.8,
    redTrailLength = 100,
    greenTrailLength = 100,
    blueTrailLength = 100,
    mainSphereRotation = 0.005,
    onTriangleAreaUpdate = () => {},
  } = params || {};

  const sceneRef = useRef({
    isDragging: false,
    isRightDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    cameraDistance: 15,
    cameraTheta: Math.PI / 4,
    cameraPhi: Math.PI / 4,
    panX: 0,
    panY: 0,
    camera: null,
    renderer: null,
    scene: null,

    redTrailPositions: [],
    greenTrailPositions: [],
    blueTrailPositions: [],

    redTrail: null,
    greenTrail: null,
    blueTrail: null,

    maxRedTrailLength: redTrailLength,
    maxGreenTrailLength: greenTrailLength,
    maxBlueTrailLength: blueTrailLength,

    mainSphere: null,

    redOrbitSpeed: redSpeed,
    greenOrbitSpeed: greenSpeed,
    blueOrbitSpeed: blueSpeed,
    mainSphereRotationSpeed: mainSphereRotation,
  });

  useEffect(() => {
    const currentRef = mountRef.current;
    const state = sceneRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbCbCbC);
    state.scene = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      currentRef.clientWidth / currentRef.clientHeight,
      0.1,
      1000
    );
    camera.position.z = state.cameraDistance;
    state.camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    currentRef.appendChild(renderer.domElement);
    state.renderer = renderer;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const cubeRenderTarget = pmremGenerator.fromScene(new THREE.Scene());
    scene.environment = cubeRenderTarget.texture;

    const size = 512;
    const data = new Uint8Array(size * size * 4);
    const squareSize = 32;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const isWhite = Math.floor(x / squareSize) % 2 !== Math.floor(y / squareSize) % 2;

        if (isWhite) {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = 128;
        } else {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
          data[i + 3] = 255;
        }
      }
    }

    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    texture.needsUpdate = true;

    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.2,
      metalness: 0.3,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    state.mainSphere = sphere;

    const xyGridHelper = new THREE.GridHelper(100, 100, 0x0000ff, 0x0000ff);
    xyGridHelper.rotation.x = Math.PI / 2;
    xyGridHelper.material.opacity = 0.3;
    xyGridHelper.material.transparent = true;
    scene.add(xyGridHelper);

    const xzGridHelper = new THREE.GridHelper(100, 100, 0xff0000, 0xff0000);
    xzGridHelper.material.opacity = 0.3;
    xzGridHelper.material.transparent = true;
    scene.add(xzGridHelper);

    const yzGridHelper = new THREE.GridHelper(100, 100, 0x00ff00, 0x00ff00);
    yzGridHelper.rotation.z = Math.PI / 2;
    yzGridHelper.material.opacity = 0.3;
    yzGridHelper.material.transparent = true;
    scene.add(yzGridHelper);

    const xSphereGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const xSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const xSphere = new THREE.Mesh(xSphereGeometry, xSphereMaterial);
    scene.add(xSphere);

    const ySphereGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const ySphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const ySphere = new THREE.Mesh(ySphereGeometry, ySphereMaterial);
    scene.add(ySphere);

    const zSphereGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const zSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const zSphere = new THREE.Mesh(zSphereGeometry, zSphereMaterial);
    scene.add(zSphere);

    const redTrailMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const greenTrailMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const blueTrailMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const connectionLineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const triangleFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      opacity: 0.4,
      side: THREE.DoubleSide,
      transparent: true,
    });

    const redTrailGeometry = new THREE.BufferGeometry();
    const greenTrailGeometry = new THREE.BufferGeometry();
    const blueTrailGeometry = new THREE.BufferGeometry();
    const connectionLineGeometry = new THREE.BufferGeometry();
    const triangleFaceGeometry = new THREE.BufferGeometry();

    const redTrail = new THREE.Line(redTrailGeometry, redTrailMaterial);
    const greenTrail = new THREE.Line(greenTrailGeometry, greenTrailMaterial);
    const blueTrail = new THREE.Line(blueTrailGeometry, blueTrailMaterial);
    const connectionLine = new THREE.Line(connectionLineGeometry, connectionLineMaterial);
    const triangleFace = new THREE.Mesh(triangleFaceGeometry, triangleFaceMaterial);

    scene.add(redTrail);
    scene.add(greenTrail);
    scene.add(blueTrail);
    scene.add(connectionLine);
    scene.add(triangleFace);

    state.redTrail = redTrail;
    state.greenTrail = greenTrail;
    state.blueTrail = blueTrail;
    state.connectionLine = connectionLine;
    state.triangleFace = triangleFace;

    const updateCameraPosition = () => {
      camera.position.x = state.panX + state.cameraDistance * Math.sin(state.cameraPhi) * Math.cos(state.cameraTheta);
      camera.position.y = state.panY + state.cameraDistance * Math.cos(state.cameraPhi);
      camera.position.z = state.cameraDistance * Math.sin(state.cameraPhi) * Math.sin(state.cameraTheta);
      camera.lookAt(new THREE.Vector3(state.panX, state.panY, 0));
    };

    const handleMouseDown = (e) => {
      if (e.button === 0) {
        state.isDragging = true;
      } else if (e.button === 2) {
        state.isRightDragging = true;
        e.preventDefault();
      }
      state.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (state.isDragging) {
        const deltaMove = {
          x: e.clientX - state.previousMousePosition.x,
          y: e.clientY - state.previousMousePosition.y,
        };

        state.cameraTheta += deltaMove.x * 0.01;
        state.cameraPhi = Math.max(0.1, Math.min(Math.PI - 0.1, state.cameraPhi - deltaMove.y * 0.01));

        updateCameraPosition();
      } else if (state.isRightDragging) {
        const deltaMove = {
          x: e.clientX - state.previousMousePosition.x,
          y: e.clientY - state.previousMousePosition.y,
        };

        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);

        const panSpeed = 0.01;
        state.panX -= deltaMove.x * panSpeed * right.x;
        state.panY += deltaMove.y * panSpeed * up.y;

        updateCameraPosition();
      }

      state.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      state.isDragging = false;
      state.isRightDragging = false;
    };

    const handleWheel = (e) => {
      state.cameraDistance += e.deltaY * 0.01;
      state.cameraDistance = Math.max(1, Math.min(100, state.cameraDistance));
      updateCameraPosition();
      e.preventDefault();
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('wheel', handleWheel);
    renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

    updateCameraPosition();

    const animate = () => {
      if (!mountRef.current) return;

      requestAnimationFrame(animate);
      if (state.mainSphere) {
        state.mainSphere.rotation.y += state.mainSphereRotationSpeed;
      }

      const time = Date.now() * 0.001;

      xSphere.position.y = 6 * Math.cos(time * state.redOrbitSpeed);
      xSphere.position.z = 6 * Math.sin(time * state.redOrbitSpeed);
      xSphere.position.x = 0;

      ySphere.position.x = 12 * Math.cos(time * state.greenOrbitSpeed);
      ySphere.position.z = 12 * Math.sin(time * state.greenOrbitSpeed);
      ySphere.position.y = 0;

      zSphere.position.x = 3 * Math.cos(time * state.blueOrbitSpeed);
      zSphere.position.y = 3 * Math.sin(time * state.blueOrbitSpeed);
      zSphere.position.z = 0;

      state.redTrailPositions.push(new THREE.Vector3(xSphere.position.x, xSphere.position.y, xSphere.position.z));
      state.greenTrailPositions.push(new THREE.Vector3(ySphere.position.x, ySphere.position.y, ySphere.position.z));
      state.blueTrailPositions.push(new THREE.Vector3(zSphere.position.x, zSphere.position.y, zSphere.position.z));

      if (state.redTrailPositions.length > state.maxRedTrailLength) {
        state.redTrailPositions.shift();
      }
      if (state.greenTrailPositions.length > state.maxGreenTrailLength) {
        state.greenTrailPositions.shift();
      }
      if (state.blueTrailPositions.length > state.maxBlueTrailLength) {
        state.blueTrailPositions.shift();
      }

      if (state.redTrailPositions.length > 1) {
        state.redTrail.geometry.dispose();
        state.redTrail.geometry = new THREE.BufferGeometry().setFromPoints(state.redTrailPositions);
      }
      if (state.greenTrailPositions.length > 1) {
        state.greenTrail.geometry.dispose();
        state.greenTrail.geometry = new THREE.BufferGeometry().setFromPoints(state.greenTrailPositions);
      }
      if (state.blueTrailPositions.length > 1) {
        state.blueTrail.geometry.dispose();
        state.blueTrail.geometry = new THREE.BufferGeometry().setFromPoints(state.blueTrailPositions);
      }

      const connectionPoints = [
        xSphere.position.clone(),
        ySphere.position.clone(),
        zSphere.position.clone(),
        xSphere.position.clone(),
      ];

      if (state.connectionLine) {
        state.connectionLine.geometry.dispose();
        state.connectionLine.geometry = new THREE.BufferGeometry().setFromPoints(connectionPoints);
      }

      if (state.triangleFace) {
        state.triangleFace.geometry.dispose();

        const vertices = [
          xSphere.position.clone(),
          ySphere.position.clone(),
          zSphere.position.clone(),
        ];

        const triangleGeometry = new THREE.BufferGeometry();

        const positions = new Float32Array([
          vertices[0].x,
          vertices[0].y,
          vertices[0].z,
          vertices[1].x,
          vertices[1].y,
          vertices[1].z,
          vertices[2].x,
          vertices[2].y,
          vertices[2].z,
        ]);

        triangleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        triangleGeometry.computeVertexNormals();
        state.triangleFace.geometry = triangleGeometry;

        const a = vertices[0].distanceTo(vertices[1]);
        const b = vertices[1].distanceTo(vertices[2]);
        const c = vertices[2].distanceTo(vertices[0]);

        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        onTriangleAreaUpdate(area);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;

      const width = currentRef.clientWidth;
      const height = currentRef.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', handleMouseDown);
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
        renderer.domElement.removeEventListener('mouseup', handleMouseUp);
        renderer.domElement.removeEventListener('wheel', handleWheel);
        renderer.domElement.removeEventListener('contextmenu', (e) => e.preventDefault());
      }

      if (currentRef && renderer) {
        currentRef.removeChild(renderer.domElement);
      }

      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (texture) texture.dispose();
      if (xyGridHelper && xyGridHelper.material) xyGridHelper.material.dispose();
      if (xzGridHelper && xzGridHelper.material) xzGridHelper.material.dispose();
      if (yzGridHelper && yzGridHelper.material) yzGridHelper.material.dispose();
      if (xSphereGeometry) xSphereGeometry.dispose();
      if (xSphereMaterial) xSphereMaterial.dispose();
      if (ySphereGeometry) ySphereGeometry.dispose();
      if (ySphereMaterial) ySphereMaterial.dispose();
      if (zSphereGeometry) zSphereGeometry.dispose();
      if (zSphereMaterial) zSphereMaterial.dispose();
      if (redTrailMaterial) redTrailMaterial.dispose();
      if (greenTrailMaterial) greenTrailMaterial.dispose();
      if (blueTrailMaterial) blueTrailMaterial.dispose();
      if (connectionLineMaterial) connectionLineMaterial.dispose();
      if (triangleFaceMaterial) triangleFaceMaterial.dispose();
      if (redTrail && redTrail.geometry) redTrail.geometry.dispose();
      if (greenTrail && greenTrail.geometry) greenTrail.geometry.dispose();
      if (blueTrail && blueTrail.geometry) blueTrail.geometry.dispose();
      if (state.connectionLine && state.connectionLine.geometry) state.connectionLine.geometry.dispose();
      if (state.triangleFace && state.triangleFace.geometry) state.triangleFace.geometry.dispose();
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    sceneRef.current.redOrbitSpeed = redSpeed;
    sceneRef.current.greenOrbitSpeed = greenSpeed;
    sceneRef.current.blueOrbitSpeed = blueSpeed;
    sceneRef.current.maxRedTrailLength = redTrailLength;
    sceneRef.current.maxGreenTrailLength = greenTrailLength;
    sceneRef.current.maxBlueTrailLength = blueTrailLength;
    sceneRef.current.mainSphereRotationSpeed = mainSphereRotation;

    if (sceneRef.current.redTrailPositions.length > redTrailLength) {
      sceneRef.current.redTrailPositions = sceneRef.current.redTrailPositions.slice(-redTrailLength);
    }

    if (sceneRef.current.greenTrailPositions.length > greenTrailLength) {
      sceneRef.current.greenTrailPositions = sceneRef.current.greenTrailPositions.slice(-greenTrailLength);
    }

    if (sceneRef.current.blueTrailPositions.length > blueTrailLength) {
      sceneRef.current.blueTrailPositions = sceneRef.current.blueTrailPositions.slice(-blueTrailLength);
    }
  }, [redSpeed, greenSpeed, blueSpeed, redTrailLength, greenTrailLength, blueTrailLength, mainSphereRotation]);

  return <div ref={mountRef} className="h-3/4 bg-gray-900 rounded-lg" />;
};

export default ThreeDScene;
