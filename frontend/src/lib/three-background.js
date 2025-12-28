import * as THREE from "three";
export const createBackgroundScene = (container) => {
    try {
        console.log("Starting Three.js scene creation...");
        console.log("Container element:", container);
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.Fog(0x000000, 500, 1000);
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
        });
        console.log("Renderer created:", renderer);
        // Configure renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.zIndex = "0";
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        console.log("Appending renderer to container...");
        const canvas = renderer.domElement;
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        container.style.position = "relative";
        container.style.width = "100%";
        container.style.height = "100%";
        container.appendChild(renderer.domElement);
        console.log("Renderer appended successfully");
        camera.position.z = 120;
        // Mouse tracking
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        // Create floating particles with Nothing OS aesthetic
        const particleCount = 150;
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const initialPositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 400;
            const y = (Math.random() - 0.5) * 400;
            const z = (Math.random() - 0.5) * 400;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            initialPositions[i * 3] = x;
            initialPositions[i * 3 + 1] = y;
            initialPositions[i * 3 + 2] = z;
            // White/light gray colors for Nothing OS aesthetic
            const brightness = Math.random() * 0.5 + 0.5;
            colors[i * 3] = brightness;
            colors[i * 3 + 1] = brightness;
            colors[i * 3 + 2] = brightness;
        }
        particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        const particleMaterial = new THREE.PointsMaterial({
            size: 2.5,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.7,
            vertexColors: true,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        // Create animated lines - Nothing OS style
        const lineCount = 5;
        const lines = [];
        for (let i = 0; i < lineCount; i++) {
            const lineGeometry = new THREE.BufferGeometry();
            const linePositions = new Float32Array(200 * 3);
            for (let j = 0; j < 200; j++) {
                const t = j / 200;
                linePositions[j * 3] = (t - 0.5) * 300;
                linePositions[j * 3 + 1] =
                    Math.sin(t * Math.PI * 4 + i) * 60 +
                    Math.cos(t * Math.PI * 2 + i) * 40;
                linePositions[j * 3 + 2] =
                    Math.cos(t * Math.PI * 3 + i) * 60;
            }
            lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
            const hue = 0.1 + (i / lineCount) * 0.3; // Blue to cyan range
            const lineMaterial = new THREE.LineBasicMaterial({
                color: new THREE.Color().setHSL(hue, 0.7, 0.5),
                opacity: 0.4,
                transparent: true,
                linewidth: 2,
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            lines.push(line);
            scene.add(line);
        }
        // Add ambient light
        // Create glowing point light that follows mouse
        const pointLight = new THREE.PointLight(0x00ff88, 1, 300);
        pointLight.position.z = 100;
        pointLight.castShadow = true;
        scene.add(pointLight);
        // Add more ambient lighting for better depth
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        // Add directional light for better shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
        directionalLight.position.set(200, 100, 100);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        // Create orbital rings for more depth
        const ringCount = 3;
        const rings = [];
        for (let i = 0; i < ringCount; i++) {
            const geometry = new THREE.TorusGeometry(80 + i * 40, 1, 32, 100);
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(0.55 + i * 0.05, 0.8, 0.5),
                emissive: new THREE.Color().setHSL(0.55 + i * 0.05, 0.8, 0.3),
                wireframe: false,
            });
            const ring = new THREE.Mesh(geometry, material);
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;
            ring.castShadow = true;
            ring.receiveShadow = true;
            rings.push(ring);
            scene.add(ring);
        }
        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);
        // Animation loop with enhanced effects
        let time = 0;
        const animate = () => {
            time += 0.001;
            requestAnimationFrame(animate);
            // Update point light position based on mouse
            pointLight.position.x = mouse.x * 100;
            pointLight.position.y = mouse.y * 100;
            // Pulse point light
            pointLight.intensity = 1 + Math.sin(time * 3) * 0.5;
            // Animate particles
            particles.rotation.x += 0.0002;
            particles.rotation.y += 0.0003;
            // Update particle positions for floating effect
            const positionAttribute = particleGeometry.getAttribute("position");
            const posArray = positionAttribute.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                posArray[i3] = initialPositions[i3] + Math.sin(time * 0.3 + i) * 20;
                posArray[i3 + 1] = initialPositions[i3 + 1] + Math.cos(time * 0.2 + i * 0.1) * 20;
                posArray[i3 + 2] = initialPositions[i3 + 2] + Math.sin(time * 0.25 + i * 0.5) * 15;
            }
            positionAttribute.needsUpdate = true;
            // Animate lines with more dynamic movement
            lines.forEach((line, index) => {
                line.rotation.x += 0.00015 * (index + 1);
                line.rotation.y += 0.00025 * (index + 1);
                line.rotation.z += 0.0001 * (index + 1);
                // Pulse opacity
                line.material.opacity =
                    0.3 + 0.2 * Math.sin(time * 2 + index);
            });
            // Rotate orbital rings
            rings.forEach((ring, index) => {
                ring.rotation.x += 0.0001 * (index + 1);
                ring.rotation.y += 0.0002 * (index + 1);
                // Subtle scale pulse
                const scale = 1 + 0.05 * Math.sin(time * 1.5 + index);
                ring.scale.set(scale, scale, scale);
            });
            renderer.render(scene, camera);
        };
        console.log("Starting animation loop...");
        animate();
        console.log("Three.js scene setup complete, returning cleanup function");
        const cleanup = () => {
            console.log("Cleaning up Three.js scene...");
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            particleGeometry.dispose();
            particleMaterial.dispose();
            lines.forEach((line) => {
                line.geometry.dispose();
                line.material.dispose();
            });
            rings.forEach((ring) => {
                ring.geometry.dispose();
                ring.material.dispose();
            });
        };
        return cleanup;
    }
    catch (error) {
        console.error("Error in createBackgroundScene:", error);
        throw error;
    }
};
