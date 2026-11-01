import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import Skull from "../models/skull_salazar.glb";
import { useTheme } from "../theme/useTheme";

interface SkullSceneProps {
  onProgress: (progress: number) => void;
  onLoaded: () => void;
  onError: () => void;
}

const SkullScene = ({ onProgress, onLoaded, onError }: SkullSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  const ringMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const ringLightRef = useRef<THREE.PointLight | null>(null);
  const targetLightColorRef = useRef<THREE.Color | null>(null);

  const { theme } = useTheme();

  // Update theme colors without recreating the Three.js scene
  useEffect(() => {
    const newColor = new THREE.Color(theme.colors.primary);

    targetLightColorRef.current = newColor;
  }, [theme.colors.primary]);

  // Create and manage the Three.js scene
  useEffect(() => {
    const container = mountRef.current;

    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );

    camera.position.set(0, 2, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 8, 8);
    directionalLight.castShadow = true;

    scene.add(directionalLight);

    // Rotating group
    const skullGroup = new THREE.Group();
    scene.add(skullGroup);

    // Initial theme color
    const initialColor = new THREE.Color(theme.colors.primary);

    targetLightColorRef.current = initialColor.clone();

    // Ring
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.035, 16, 100);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: initialColor,
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);

    ring.rotation.x = Math.PI / 2.8;
    ring.position.set(0, 1.3, -1.3);

    ringMaterialRef.current = ringMaterial;

    skullGroup.add(ring);

    // Ring light
    const ringLight = new THREE.PointLight(initialColor, 100, 30);

    ringLight.position.set(0, 1.3, -1.3);

    ringLightRef.current = ringLight;

    skullGroup.add(ringLight);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 2;

    controls.minDistance = 6;
    controls.maxDistance = 6;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Load skull model
    const loader = new GLTFLoader();

    let model: THREE.Group | null = null;

    loader.load(
      Skull,
      (gltf) => {
        model = gltf.scene;

        model.position.set(0, 0, 0);
        model.scale.set(1.5, 1.5, 1.5);

        skullGroup.add(model);

        onProgress(100);
        onLoaded();
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = (progress.loaded / progress.total) * 100;

          onProgress(Math.min(percent, 99));
        }
      },
      (error) => {
        console.error("Error loading skull:", error);
        onError();
      },
    );

    // Resize handler
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    let animationId = 0;

    const tick = () => {
      const delta = clock.getDelta();

      // Rotate skull
      skullGroup.rotation.y += delta * 0.3;

      // Smoothly transition theme colors
      const targetColor = targetLightColorRef.current;

      if (targetColor) {
        const transitionSpeed = 1 - Math.exp(-delta * 5);

        ringMaterial.color.lerp(targetColor, transitionSpeed);
        ringLight.color.lerp(targetColor, transitionSpeed);
      }

      controls.update();

      renderer.render(scene, camera);

      animationId = requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", handleResize);

      controls.dispose();

      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();

            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }

      ringGeometry.dispose();
      ringMaterial.dispose();

      ringMaterialRef.current = null;
      ringLightRef.current = null;
      targetLightColorRef.current = null;

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onProgress, onLoaded, onError]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full overflow-hidden"
    />
  );
};

export default SkullScene;
