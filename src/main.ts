import * as THREE from "three";
import { getRandomColor } from "./utils/getRandomColor";
import { createGeometry } from "./utils/createGeometry";

// Helper Functions
var getRandomNumberCeil = (max: number) => Math.ceil(Math.random() * max);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Cubes
const numCubes = 20;
const lineOfCubes = new Array(numCubes).fill(null).map(() => createGeometry());
const cubeGroup = new THREE.Group();

lineOfCubes.forEach((cube, index) => {
  cube.position.x = (index + 1) * 30;
  cubeGroup.add(cube);
});

scene.add(cubeGroup);

// Sizes
const sizes = {
  width: 800,
  height: 800,
};

// Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height);
const middleCube = lineOfCubes[lineOfCubes.length - 1].position;
camera.lookAt(cubeGroup);
// camera.position.set(middleCube.x, middleCube.y, middleCube.z + 1000 * 0.5);
// camera.position.y = 0;
// camera.position.z = 25;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Add a directional light
let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// Clock
const clock = new THREE.Clock();

// Animation
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Rotate Cubes
  lineOfCubes.forEach((cube, index) => {
    scene.add(cube);
    // cube.rotation.y = Math.sin(elapsedTime * index * 3);
    cube.rotation.x = Math.sin(elapsedTime * index);
    cube.scale.x = Math.sin(elapsedTime * index);
    // cube.scale.y = Math.sin(elapsedTime * index);
  });

  // Change Cube Color
  lineOfCubes.forEach((cube) => {
    const red = getRandomNumberCeil(185);
    const green = getRandomNumberCeil(165);
    const blue = getRandomNumberCeil(155);
    const color = getRandomColor(red, green, blue);
    cube.material.color.set(
        color
    );
    cube.material.emissive.set(
        color
      );
  });

  const angleIntensity = 3;
  const spinAmount = elapsedTime * angleIntensity;

  // Move Camera in circle
    camera.position.x = Math.sin(elapsedTime) * spinAmount;
    camera.position.y = Math.sin(elapsedTime) * spinAmount;
    camera.position.z = Math.cos(elapsedTime) * spinAmount;
    camera.lookAt(middleCube);

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
