import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function Box() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, "/brick.jpg");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color="blue" /> */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
