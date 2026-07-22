/* ============================================
   CHIEF 启啡 — Three.js Particle Background
   Brand green floating particle system
   ============================================ */

(function() {
  // Load Three.js dynamically if not present
  if (typeof THREE === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initParticles;
    document.head.appendChild(script);
  } else {
    initParticles();
  }

  function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 150;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Brand green particle material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(isDark() ? '#4CAF50' : '#1B5E20') },
        uOpacity: { value: isDark() ? 0.35 : 0.22 }
      },
      vertexShader: /* glsl */ `
        attribute float size;
        varying float vAlpha;
        uniform float uTime;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.8;
          pos.x += cos(uTime * 0.2 + position.y * 0.3) * 0.5;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (180.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = 0.4 + 0.6 * sin(position.x * 1.5 + uTime * 0.4);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float alpha = smoothstep(1.0, 0.2, d) * uOpacity * vAlpha;
          if (alpha < 0.02) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating dust particles (smaller, more numerous)
    const dustCount = isMobile ? 40 : 100;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 60;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    const dustMat = new THREE.PointsMaterial({
      color: isDark() ? '#81C784' : '#A5D6A7',
      size: 0.8,
      transparent: true,
      opacity: isDark() ? 0.2 : 0.12,
      blending: THREE.AdditiveBlending
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // Animation
    let animationId;
    const clock = new THREE.Clock();

    function animate() {
      animationId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      material.uniforms.uTime.value = t;

      particles.rotation.y += 0.0002;
      particles.rotation.x += 0.0001;
      dust.rotation.y -= 0.0001;
      dust.rotation.x += 0.00015;

      renderer.render(scene, camera);
    }

    animate();

    // Resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Theme change
    const observer = new MutationObserver(() => {
      material.uniforms.uColor.value.set(isDark() ? '#4CAF50' : '#1B5E20');
      material.uniforms.uOpacity.value = isDark() ? 0.35 : 0.22;
      dustMat.color.set(isDark() ? '#81C784' : '#A5D6A7');
      dustMat.opacity = isDark() ? 0.2 : 0.12;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();
