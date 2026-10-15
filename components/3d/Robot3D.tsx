"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import Spline from "@splinetool/react-spline";

interface Robot3DProps {
  splineSceneUrl?: string;
}

// When you export your Spline scene, paste the URL here:
const EXPORTED_SPLINE_SCENE_URL = "";

export default function Robot3D({ splineSceneUrl = EXPORTED_SPLINE_SCENE_URL }: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splineLoadError, setSplineLoadError] = useState(false);

  const useSpline = Boolean(splineSceneUrl && !splineLoadError);

  useEffect(() => {
    if (useSpline) return;

    const container = containerRef.current;
    if (!container) return;

    // ================== SCENE & CAMERA (3/4 PERSPECTIVE) ==================
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      32,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Elevated 3/4 camera matching reference image
    camera.position.set(0.18, 0.54, 4.15);
    camera.lookAt(0, 0.12, 0);

    // ================== PBR RENDERER ==================
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // ================== HDRI ENVIRONMENT (CONTROLLED INTENSITY) ==================
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envRoom = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(envRoom).texture;
    scene.environment = envTexture;

    // ================== STUDIO LIGHTING (REFERENCE ACCURATE) ==================
    // 1. Soft Ambient & Sky/Ground Hemisphere
    const ambientLight = new THREE.AmbientLight(0x0e111d, 0.9);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x060812, 0.6);
    scene.add(hemiLight);

    // 2. Front Soft Studio Fill (gentle, avoids washing out screen)
    const frontKey = new THREE.DirectionalLight(0xffffff, 1.2);
    frontKey.position.set(1.5, 3.0, 4.2);
    frontKey.castShadow = true;
    frontKey.shadow.mapSize.width = 1024;
    frontKey.shadow.mapSize.height = 1024;
    frontKey.shadow.bias = -0.001;
    scene.add(frontKey);

    // 3. Signature Crimson / Red Top Rim Light (creates top edge gleam on head)
    const redRimLight = new THREE.DirectionalLight(0xff2255, 3.4);
    redRimLight.position.set(0.4, 5.0, -2.8);
    scene.add(redRimLight);

    // 4. Vibrant Cobalt / Royal Blue Light (illuminates pedestal & lower body)
    const blueKeyLight = new THREE.DirectionalLight(0x1d4ed8, 3.8);
    blueKeyLight.position.set(-3.2, -0.4, 3.2);
    scene.add(blueKeyLight);

    // 5. Soft Purple Accent (skims right side of the head)
    const purpleRim = new THREE.PointLight(0xa855f7, 2.2, 10);
    purpleRim.position.set(3.2, 2.0, 0.4);
    scene.add(purpleRim);

    // 6. Cyan Fill
    const cyanFill = new THREE.DirectionalLight(0x0ea5e9, 0.8);
    cyanFill.position.set(-3.0, 1.2, 1.5);
    scene.add(cyanFill);

    // ================== PBR MATERIALS ==================
    // Sleek metallic white-grey body
    const metallicBodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8ebf0,
      metalness: 0.7,
      roughness: 0.26,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
      envMapIntensity: 0.48,
    });

    // Matching metallic white-grey pedestal cube
    const pedestalMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8ebf0,
      metalness: 0.7,
      roughness: 0.26,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
      envMapIntensity: 0.48,
    });

    // PURE DARK OLED VISOR SCREEN:
    // envMapIntensity: 0 completely eliminates the giant white ceiling box reflection!
    const screenMat = new THREE.MeshPhysicalMaterial({
      color: 0x030407,
      metalness: 0.05,
      roughness: 0.25,
      clearcoat: 0.0,
      envMapIntensity: 0.0, // Stays pure, velvety pitch black without glare
    });

    // Dark Chamfer Frame around the screen
    const bezelMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0c16,
      metalness: 0.55,
      roughness: 0.45,
      clearcoat: 0.0,
      envMapIntensity: 0.1,
    });

    // Smooth glowing pearl-white orb eyes
    const eyeOrbMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.02,
      roughness: 0.16,
      emissive: 0xffffff,
      emissiveIntensity: 0.55,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1,
      envMapIntensity: 0.2,
    });

    // Subtle dark recessed socket ring behind each eye (anchors eyes into screen)
    const socketMat = new THREE.MeshBasicMaterial({
      color: 0x010204,
    });

    // Dark polished chrome for joints
    const jointMat = new THREE.MeshPhysicalMaterial({
      color: 0x141624,
      metalness: 0.75,
      roughness: 0.35,
      clearcoat: 0.0,
      envMapIntensity: 0.25,
    });

    // ================== THEME HARMONIZATION ==================
    let isDarkTheme = false;

    const applyThemeColors = (isDark: boolean) => {
      isDarkTheme = isDark;
      if (isDark) {
        // DARK MODE / DARK BACKGROUND: Keep robot and pedestal LIGHT & LUMINOUS
        metallicBodyMat.color.setHex(0xf3f0fb); // Luminous pearl-platinum silver with soft lavender tint
        metallicBodyMat.metalness = 0.72;
        metallicBodyMat.roughness = 0.28;
        metallicBodyMat.clearcoat = 0.4;
        metallicBodyMat.envMapIntensity = 0.45;

        // Pedestal cube: SAME as robot white
        pedestalMat.color.setHex(0xf3f0fb); // Clean matching pearl-platinum white
        pedestalMat.metalness = 0.72;
        pedestalMat.roughness = 0.28;
        pedestalMat.clearcoat = 0.4;
        pedestalMat.envMapIntensity = 0.45;

        jointMat.color.setHex(0x334155);
        bezelMat.color.setHex(0x1e293b);

        ambientLight.intensity = 1.35;
        frontKey.intensity = 2.4;
        blueKeyLight.color.setHex(0x93c5fd); // Soft cool studio fill (clean, not oversaturated)
        blueKeyLight.intensity = 2.4;
        redRimLight.color.setHex(0xf43f5e);
        purpleRim.color.setHex(0xc084fc);

        renderer.toneMappingExposure = 1.3;
      } else {
        // LIGHT MODE: Sleek metallic white-grey body and pedestal
        metallicBodyMat.color.setHex(0xe8ebf0); // Clean metallic white-grey
        metallicBodyMat.metalness = 0.7;
        metallicBodyMat.roughness = 0.26;
        metallicBodyMat.clearcoat = 0.4;
        metallicBodyMat.envMapIntensity = 0.48;

        // Matching metallic white-grey pedestal cube
        pedestalMat.color.setHex(0xe8ebf0);
        pedestalMat.metalness = 0.7;
        pedestalMat.roughness = 0.26;
        pedestalMat.clearcoat = 0.4;
        pedestalMat.envMapIntensity = 0.48;

        jointMat.color.setHex(0x334155);
        bezelMat.color.setHex(0x1e293b);

        ambientLight.intensity = 1.35;
        frontKey.intensity = 2.4;
        blueKeyLight.color.setHex(0x93c5fd);
        blueKeyLight.intensity = 2.4;
        redRimLight.color.setHex(0xf43f5e);
        purpleRim.color.setHex(0xddf160); // Pill lime accent reflection

        renderer.toneMappingExposure = 1.3;
      }
    };

    const currentScheme = document.documentElement.getAttribute("color-scheme") || "light";
    applyThemeColors(currentScheme === "dark");

    const themeObserver = new MutationObserver(() => {
      const scheme = document.documentElement.getAttribute("color-scheme") || "light";
      applyThemeColors(scheme === "dark");
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["color-scheme"],
    });

    // ================== ROBOT MASTER ROOT ==================
    const robot = new THREE.Group();
    robot.position.set(0, -0.02, 0);
    scene.add(robot);

    // ================== 1. ANGLED 3D PEDESTAL CUBE ==================
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, -0.52, 0);
    pedestalGroup.rotation.y = 0.54; // ~31 degree angle showing top and side faces
    robot.add(pedestalGroup);

    const pedestalGeo = new RoundedBoxGeometry(0.88, 0.74, 0.88, 6, 0.08);
    const pedestalMesh = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestalMesh.castShadow = true;
    pedestalMesh.receiveShadow = true;
    pedestalGroup.add(pedestalMesh);

    // ================== 2. TWO SHORT LEGS ==================
    const legsGroup = new THREE.Group();
    legsGroup.position.set(0, -0.11, 0);
    robot.add(legsGroup);

    const legGeo = new THREE.CylinderGeometry(0.065, 0.06, 0.12, 24);

    const leftLeg = new THREE.Mesh(legGeo, jointMat);
    leftLeg.position.set(-0.075, 0, 0);
    leftLeg.castShadow = true;
    legsGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, jointMat);
    rightLeg.position.set(0.075, 0, 0);
    rightLeg.castShadow = true;
    legsGroup.add(rightLeg);

    // ================== 3. TAPERED BELL TORSO ==================
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.02, 0);
    robot.add(torsoGroup);

    // Lower hip disc
    const hipGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.06, 32);
    const hip = new THREE.Mesh(hipGeo, jointMat);
    hip.position.set(0, -0.01, 0);
    torsoGroup.add(hip);

    // Smooth tapered body
    const torsoGeo = new THREE.CylinderGeometry(0.14, 0.23, 0.24, 32);
    const torso = new THREE.Mesh(torsoGeo, metallicBodyMat);
    torso.position.set(0, 0.12, -0.02);
    torso.castShadow = true;
    torso.receiveShadow = true;
    torsoGroup.add(torso);

    // ================== 4. SLENDER SWIVEL NECK JOINT ==================
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 0.24, -0.02);
    torsoGroup.add(neckGroup);

    const neckCollarGeo = new THREE.CylinderGeometry(0.09, 0.11, 0.05, 24);
    const neckCollar = new THREE.Mesh(neckCollarGeo, jointMat);
    neckCollar.position.y = 0.02;
    neckGroup.add(neckCollar);

    const neckBallGeo = new THREE.SphereGeometry(0.08, 24, 24);
    const neckBall = new THREE.Mesh(neckBallGeo, jointMat);
    neckBall.position.y = 0.07;
    neckGroup.add(neckBall);

    // ================== 5. HEAD & DARK OLED VISOR ==================
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.38, 0);
    neckGroup.add(headPivot);

    // Natural inquisitive slight tilt
    headPivot.rotation.z = -0.03;

    // Chunky rounded rectangular head (proportions matching reference)
    const headBoxGeo = new RoundedBoxGeometry(1.08, 0.74, 0.76, 8, 0.13);
    const headMesh = new THREE.Mesh(headBoxGeo, metallicBodyMat);
    headMesh.castShadow = true;
    headMesh.receiveShadow = true;
    headPivot.add(headMesh);

    // Recessed Bezel Frame (smooth chamfer transition into the visor)
    const bezelGeo = new RoundedBoxGeometry(0.88, 0.58, 0.04, 6, 0.09);
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.set(0, 0.01, 0.36);
    headPivot.add(bezel);

    // Pure Pitch-Black OLED Visor Screen (recessed inside bezel)
    const screenGeo = new RoundedBoxGeometry(0.83, 0.53, 0.02, 6, 0.08);
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.01, 0.372);
    headPivot.add(screen);

    // ================== 6. FLAWLESS PEARL WHITE ORB EYES ==================
    const eyesGroup = new THREE.Group();
    eyesGroup.position.set(0, 0.015, 0.38);
    headPivot.add(eyesGroup);

    // Sockets that anchor eyes cleanly into the dark screen
    const socketGeo = new THREE.CircleGeometry(0.12, 32);

    const leftSocket = new THREE.Mesh(socketGeo, socketMat);
    leftSocket.position.set(-0.20, 0, 0.001);
    eyesGroup.add(leftSocket);

    const rightSocket = new THREE.Mesh(socketGeo, socketMat);
    rightSocket.position.set(0.20, 0, 0.001);
    eyesGroup.add(rightSocket);

    // Glowing 3D spherical pearl eyes
    const eyeOrbGeo = new THREE.SphereGeometry(0.102, 36, 36);

    const leftEyeOrb = new THREE.Mesh(eyeOrbGeo, eyeOrbMat);
    leftEyeOrb.position.set(-0.20, 0, 0.02);
    eyesGroup.add(leftEyeOrb);

    const rightEyeOrb = new THREE.Mesh(eyeOrbGeo, eyeOrbMat);
    rightEyeOrb.position.set(0.20, 0, 0.02);
    eyesGroup.add(rightEyeOrb);

    // ================== 7. EAR PORTS ==================
    const earTorusGeo = new THREE.TorusGeometry(0.095, 0.018, 20, 36);
    earTorusGeo.rotateY(Math.PI / 2);

    const earDiscGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.02, 32);
    earDiscGeo.rotateZ(Math.PI / 2);

    // Left Ear
    const leftEarRing = new THREE.Mesh(earTorusGeo, jointMat);
    leftEarRing.position.set(-0.545, 0, 0);
    headPivot.add(leftEarRing);

    const leftEarDisc = new THREE.Mesh(earDiscGeo, bezelMat);
    leftEarDisc.position.set(-0.543, 0, 0);
    headPivot.add(leftEarDisc);

    // Right Ear
    const rightEarRing = new THREE.Mesh(earTorusGeo, jointMat);
    rightEarRing.position.set(0.545, 0, 0);
    headPivot.add(rightEarRing);

    const rightEarDisc = new THREE.Mesh(earDiscGeo, bezelMat);
    rightEarDisc.position.set(0.543, 0, 0);
    headPivot.add(rightEarDisc);

    // ================== MOUSE TRACKING & INTERPOLATION ==================
    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };

    let robotScreenPos = {
      x: typeof window !== "undefined" ? window.innerWidth * 0.72 : 0,
      y: typeof window !== "undefined" ? window.innerHeight * 0.3 : 0,
    };

    const updateRobotPos = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      robotScreenPos.x = rect.left + rect.width * 0.5;
      robotScreenPos.y = rect.top + rect.height * 0.32;
    };

    updateRobotPos();

    const handleMouseMove = (e: MouseEvent) => {
      updateRobotPos();
      const dx = (e.clientX - robotScreenPos.x) / (window.innerWidth * 0.45);
      const dy = -(e.clientY - robotScreenPos.y) / (window.innerHeight * 0.45);

      mouseTarget.x = THREE.MathUtils.clamp(dx, -1.0, 1.0);
      mouseTarget.y = THREE.MathUtils.clamp(dy, -0.6, 0.8);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", updateRobotPos, { passive: true });

    const handleResize = () => {
      if (!container) return;
      updateRobotPos();
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // ================== ANIMATION LOOP ==================
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let blinkTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth organic head movement
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.12;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.12;

      headPivot.rotation.y = mouseCurrent.x * 0.42;
      headPivot.rotation.x = -mouseCurrent.y * 0.22 + Math.sin(elapsed * 1.5) * 0.01;
      headPivot.rotation.z = -0.03 - mouseCurrent.x * 0.04;

      neckGroup.rotation.y = mouseCurrent.x * 0.1;

      torsoGroup.position.y = 0.02 + Math.sin(elapsed * 1.8) * 0.005;

      // Eyeball tracking with precision inside the dark screen
      const eyeShiftX = mouseCurrent.x * 0.032;
      const eyeShiftY = mouseCurrent.y * 0.022;

      leftEyeOrb.position.x = -0.20 + eyeShiftX;
      leftEyeOrb.position.y = eyeShiftY;
      rightEyeOrb.position.x = 0.20 + eyeShiftX;
      rightEyeOrb.position.y = eyeShiftY;

      leftSocket.position.x = -0.20 + eyeShiftX * 0.5;
      leftSocket.position.y = eyeShiftY * 0.5;
      rightSocket.position.x = 0.20 + eyeShiftX * 0.5;
      rightSocket.position.y = eyeShiftY * 0.5;

      // Natural soft blink
      blinkTimer += delta;
      if (blinkTimer > 3.8) {
        leftEyeOrb.scale.y = 0.08;
        rightEyeOrb.scale.y = 0.08;
        if (blinkTimer > 3.96) {
          leftEyeOrb.scale.y = 1.0;
          rightEyeOrb.scale.y = 1.0;
          blinkTimer = 0;
        }
      }

      // Gentle atmospheric lighting pulse
      const basePurple = isDarkTheme ? 4.2 : 2.4;
      const baseRed = isDarkTheme ? 3.8 : 3.0;
      purpleRim.intensity = basePurple + Math.sin(elapsed * 1.6) * 0.2;
      redRimLight.intensity = baseRed + Math.cos(elapsed * 1.4) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", updateRobotPos);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      pmremGenerator.dispose();
      envRoom.dispose();
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [useSpline]);

  return (
    <div
      ref={containerRef}
      className="robot-3d-canvas-wrap"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        pointerEvents: "none",
      }}
    >
      {useSpline && splineSceneUrl && (
        <Spline
          scene={splineSceneUrl}
          onError={() => setSplineLoadError(true)}
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        />
      )}
    </div>
  );
}
