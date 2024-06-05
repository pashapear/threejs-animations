import * as THREE from "three";

export const createGeometry = () => {
    // Create the geometry for the mesh
    const geometry = new THREE.BoxGeometry(5, 32, 32);

    // Create the wireframe geometry from the original geometry
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);

    // Create a material for the wireframe
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 65280, linewidth: 5 });

    const emissiveMaterial = new THREE.MeshStandardMaterial({
        color: 65280,
        emissive: 65280,
        emissiveIntensity: 1 // Adjust intensity to increase the glow effect
    });

    // Create the wireframe mesh using LineSegments
    return new THREE.LineSegments(wireframeGeometry, emissiveMaterial);
};
