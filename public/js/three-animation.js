/**
 * Three.js background animation for hero section
 * This creates a cyberpunk-style 3D grid with particles and movement
 */

// Import dependencies - note this should be loaded via a script tag in the HTML
// Since this is a client-side script, it won't be bundled with Next.js

class ThreeAnimation {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;
      
      // Setup
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
      );
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);
      
      // Camera positioning
      this.camera.position.z = 30;
      
      // Colors
      this.colors = {
        grid: 0x1a1a2e,
        particles: [0x3a86ff, 0x8c1eff, 0xf72585, 0x00f5d4]
      };
      
      // Initialize scene
      this.createGrid();
      this.createParticles();
      
      // Add event listeners
      window.addEventListener('resize', this.handleResize.bind(this));
      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      
      // Animation loop
      this.clock = new THREE.Clock();
      this.mouse = new THREE.Vector2(0, 0);
      this.animate();
    }
    
    createGrid() {
      // Create grid
      const size = 100;
      const divisions = 40;
      const gridHelper = new THREE.GridHelper(size, divisions, this.colors.grid, this.colors.grid);
      gridHelper.position.y = -10;
      gridHelper.rotation.x = Math.PI / 8;
      this.scene.add(gridHelper);
      
      // Create second grid for depth effect
      const gridHelper2 = new THREE.GridHelper(size, divisions / 2, this.colors.grid, this.colors.grid);
      gridHelper2.position.y = -20;
      gridHelper2.rotation.x = Math.PI / 8;
      this.scene.add(gridHelper2);
      
      // Store grid references
      this.grid = gridHelper;
      this.grid2 = gridHelper2;
    }
    
    createParticles() {
      const particleCount = 300;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        // Position
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80 - 5;
        const z = (Math.random() - 0.5) * 80 - 10;
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        
        // Velocity
        velocities.push({
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.3) * 0.5 // Move toward camera
        });
        
        // Color
        const color = new THREE.Color(this.colors.particles[Math.floor(Math.random() * this.colors.particles.length)]);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const material = new THREE.PointsMaterial({
        size: 0.6,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      
      const points = new THREE.Points(particles, material);
      this.scene.add(points);
      
      // Store references
      this.particles = particles;
      this.particlePoints = points;
      this.particleVelocities = velocities;
    }
    
    updateParticles() {
      const time = this.clock.getElapsedTime();
      const positions = this.particles.attributes.position.array;
      
      for (let i = 0; i < positions.length / 3; i++) {
        // Update position based on velocity
        positions[i * 3] += this.particleVelocities[i].x;
        positions[i * 3 + 1] += this.particleVelocities[i].y;
        positions[i * 3 + 2] += this.particleVelocities[i].z;
        
        // Reset particles that go too far
        if (positions[i * 3 + 2] < -20) {
          positions[i * 3] = (Math.random() - 0.5) * 80;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 80 - 5;
          positions[i * 3 + 2] = 70; // Reset to far back
        }
        
        // Mouse interaction
        const mouseInfluenceX = this.mouse.x * 0.1;
        const mouseInfluenceY = this.mouse.y * 0.1;
        
        this.particleVelocities[i].x += mouseInfluenceX * 0.01;
        this.particleVelocities[i].y -= mouseInfluenceY * 0.01;
        
        // Apply some friction
        this.particleVelocities[i].x *= 0.99;
        this.particleVelocities[i].y *= 0.99;
      }
      
      this.particles.attributes.position.needsUpdate = true;
      
      // Rotate grid slightly based on mouse position
      if (this.grid) {
        this.grid.rotation.x = Math.PI / 8 + this.mouse.y * 0.05;
        this.grid.rotation.z = this.mouse.x * 0.05;
      }
      
      if (this.grid2) {
        this.grid2.rotation.x = Math.PI / 8 + this.mouse.y * 0.03;
        this.grid2.rotation.z = this.mouse.x * 0.03;
      }
    }
    
    handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
    
    handleMouseMove(event) {
      // Normalize mouse coordinates
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    animate() {
      requestAnimationFrame(this.animate.bind(this));
      
      this.updateParticles();
      this.renderer.render(this.scene, this.camera);
    }
    
    // Public method to stop animation
    destroy() {
      if (this.container) {
        while (this.container.firstChild) {
          this.container.removeChild(this.container.firstChild);
        }
      }
      
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('mousemove', this.handleMouseMove);
      
      this.scene = null;
      this.camera = null;
      this.renderer = null;
    }
  }
  
  // Initialize when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    // Check if Three.js is loaded
    if (typeof THREE !== 'undefined') {
      const animation = new ThreeAnimation('hero-animation');
      
      // Store reference for potential cleanup
      window.threeAnimation = animation;
    } else {
      console.error('Three.js library not loaded.');
    }
  });