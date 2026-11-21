import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ interactive = true, particleCount = 1400 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer, animationFrameId, geometry, material, ringGeo, ringMat, ringGeo2, ringMat2;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 22;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Particle Sphere & Geometry
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      // Tricolor & Tech Palette
      const colorSaffron = new THREE.Color('#FF9933');
      const colorWhite = new THREE.Color('#F8FAFC');
      const colorGreen = new THREE.Color('#138808');
      const colorCyan = new THREE.Color('#38BDF8');
      const colorGold = new THREE.Color('#FBBF24');

      const radius = 10.5;
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;
        const r = radius + (Math.random() - 0.5) * 1.5;

        const x = r * Math.cos(theta) * Math.sin(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        let pColor = colorWhite;
        if (y > 3) pColor = colorSaffron;
        else if (y < -3) pColor = colorGreen;
        else if (Math.random() > 0.5) pColor = colorCyan;
        else pColor = colorGold;

        colors[i * 3] = pColor.r;
        colors[i * 3 + 1] = pColor.g;
        colors[i * 3 + 2] = pColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Particle material
      material = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Outer Glowing Ring
      ringGeo = new THREE.TorusGeometry(12, 0.05, 16, 100);
      ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.35,
        wireframe: true
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      scene.add(ring);

      ringGeo2 = new THREE.TorusGeometry(11, 0.04, 16, 100);
      ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xff9933,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 4;
      scene.add(ring2);

      // Mouse movement interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event) => {
        if (!interactive) return;
        mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        if (renderer) renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        particles.rotation.y = elapsedTime * 0.08 + targetX * 1.5;
        particles.rotation.x = elapsedTime * 0.04 + targetY * 1.5;

        ring.rotation.z = elapsedTime * 0.1;
        ring.rotation.x = (Math.PI / 3) + targetY;
        ring2.rotation.y = (Math.PI / 4) + targetX;

        if (renderer) renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (container && renderer?.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (ringGeo) ringGeo.dispose();
        if (ringMat) ringMat.dispose();
        if (ringGeo2) ringGeo2.dispose();
        if (ringMat2) ringMat2.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (e) {
      console.warn('ThreeBackground initialization skipped:', e);
    }
  }, [interactive, particleCount]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
}
