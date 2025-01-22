import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "Box";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
